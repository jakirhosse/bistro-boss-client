import Cover from "../../Shared/Cover/Cover";
import 'react-tabs/style/react-tabs.css';
import orderImg from '../../../assets/assets/shop/banner2.jpg'
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenu from "../../../hook/UseMenu";
import { useState } from "react";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
const Order = () => {
  const categories = ['Pizza','Salad','Soup','Desserts']
  const {category} = useParams()
  const initialIndex= categories.indexOf(category)
        const [menu] = useMenu();
        const [tabIndex, setTabIndex] = useState(initialIndex);
        const offered = menu.filter(item => item.category === 'offered')
        const soups = menu.filter(item => item.category === 'soup')
        const salads = menu.filter(item => item.category === 'salad')
        const pizzas = menu.filter(item => item.category === 'pizza')
        const desserts = menu.filter(item => item.category === 'dessert')
       
        
        return (
                <div className="mb-8">
                   <Cover img={orderImg} title="order food"></Cover>  
                   <Tabs className='mt-10' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
       <TabList className='uppercase font-medium text-center'>
        <Tab>Pizza</Tab>
        <Tab>Salad</Tab>
        <Tab>Soup</Tab>
        <Tab>Desserts</Tab>
        <Tab>Drinks</Tab>
      </TabList>
      <TabPanel>
        <OrderTab items={salads}></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab items={pizzas}></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab items={soups}></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab items={offered}></OrderTab>
      </TabPanel>
      <TabPanel>
        <OrderTab items={desserts}></OrderTab>
      </TabPanel>
    </Tabs>   
         </div>
 );
};

export default Order;