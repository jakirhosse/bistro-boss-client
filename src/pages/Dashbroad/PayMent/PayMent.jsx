import { Elements } from "@stripe/react-stripe-js";
import SecctionTitle from "../../../componetes/SecctionTitle/SecctionTitle";

import {loadStripe} from '@stripe/stripe-js';
import CheakeOut from "../CheackOut/CheakeOut";
const PayMent = () => {
        const stripePromise = loadStripe(import.meta.env.VITE_data_pk);
        return (
                <div>
                       <SecctionTitle heading="payment" Setheading='taka dah'></SecctionTitle> 
                       <div>
                       <Elements stripe={stripePromise}>
                        <CheakeOut></CheakeOut>
                       </Elements>
                       </div>
                </div>
        );
};

export default PayMent;