import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hook/useAxiosSeceure";
import useCart from "../../../hook/useCart";
import UseAuth from "../../../hook/UseAuth";

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [trangectionId,SettrangentionId] = useState('')
    const [clientSecret, setClientSecret] = useState();
    const axiosSecure = useAxiosSecure();
    const { user } = UseAuth();
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            });
    }, [axiosSecure, totalPrice]);

    const handlePayment = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError('');
        }

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'Anonymous',
                    email: user?.email || 'anonymous@example.com'
                }
            },
        });

        if (confirmError) {
            console.log('confirm error',);

        } else {
            console.log('payment intent', paymentIntent);
            if(paymentIntent.status=== 'succeeded'){
              console.log('trangectionId',paymentIntent.id);
              SettrangentionId(paymentIntent.id)
            }
        }
    }

    return (
        <form onSubmit={handlePayment}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
            <p className="text-red-500">{error}</p>
            {trangectionId && <p>your id number:{trangectionId}</p>}
        </form>
    );
};

export default CheckOut;
