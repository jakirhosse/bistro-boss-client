import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopulerMenu from "../PopulerMenu/PopulerMenu";
import TestiMonial from "../TestiMonial/TestiMonial";
import Feature from "./Feature/Feature";

const Home = () => {
        return (
                <div>
                        <Banner></Banner>
                        <Category></Category>
                        <PopulerMenu></PopulerMenu>
                        <Feature></Feature>
                        <TestiMonial></TestiMonial>
                </div>
        );
};

export default Home;