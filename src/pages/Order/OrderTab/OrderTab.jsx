import FoodCard from "../../../componetes/FoodCard/FoodCard";


const OrderTab = ({items}) => {
        return (
                     <div className="grid md:grid-cols-3 gap-6">
                {
                        items.map(item=> <FoodCard key={item._id}
                        item={item}
                        ></FoodCard>)
                }
        </div>   
        );
};

export default OrderTab;