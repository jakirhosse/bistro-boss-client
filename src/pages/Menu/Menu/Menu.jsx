import { Helmet } from "react-helmet-async";
import menuImg from '../../../assets/assets/reservation/category-pizza.jpg';
import pizzaImg from '../../../assets/assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/assets/menu/salad-bg.jpg'
import supeImg from '../../../assets/assets/menu/soup-bg.jpg'
import desswrtImg from '../../../assets/assets/menu/dessert-bg.jpeg'
import Cover from "../../Shared/Cover/Cover";
import SecctionTitle from "../../../componetes/SecctionTitle/SecctionTitle";
import Menucategory from "../MenuCategory/Menucategory";
import useMenu from "../../../hook/UseMenu";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered')
    const soups = menu.filter(item => item.category === 'soup')
    const salads = menu.filter(item => item.category === 'salad')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const desserts = menu.filter(item => item.category === 'dessert')
    
    return (
        <div>
            <Helmet>
                <title>Menu | Page</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" />
            <SecctionTitle  Heading={"Don't  Miss"}
                subHeading={"Today's  offer"}></SecctionTitle>
                <Menucategory items={offered}></Menucategory>
                <Menucategory items={soups} img={supeImg} title="soup"></Menucategory>
                <Menucategory items={salads} img={saladImg} title="salad"></Menucategory>
                <Menucategory items={pizzas} img={pizzaImg} title="pizza"></Menucategory>
                <Menucategory items={desserts} img={desswrtImg} title="dessert"></Menucategory>
        </div>
    );
};

export default Menu;
