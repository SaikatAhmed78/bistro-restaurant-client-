import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Common/Cover';
import menuImg from '../assets/menu/banner3.jpg'
import useMenu from '../Hooks/useMenu';
import SectionTitle from '../Common/SectionTitle';
import MenuCategory from '../Components/MenuCategory';
import dessertImg from '../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../assets/menu/pizza-bg.jpg'
import saladImg from '../assets/menu/salad-bg.jpg'
import soupImg from '../assets/menu/soup-bg.jpg'


const Menu = () => {

    const [menu] = useMenu();

    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')

    return (
        <div>
            <Helmet>
                <title>Bistro Boss - Our Menu</title>
            </Helmet>

            <Cover  img={menuImg} title="our menu"></Cover>
           
           <div className='w-11/12 mx-auto p-5'>

                <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>

                <MenuCategory items={offered}></MenuCategory>
                <MenuCategory 
                items={desserts}
                img={dessertImg}
                title="DESSERT"
                ></MenuCategory>

                <MenuCategory 
                items={pizza}               
                 img={pizzaImg}
                 title="PIZZA"
                ></MenuCategory>

                <MenuCategory 
                items={salad}
                img={saladImg}
                title="SALAD"
                ></MenuCategory>

                <MenuCategory 
                items={soup}
                img={soupImg}
                title={"SOUP"}
                ></MenuCategory>
                

           </div>
        </div>
    );
};

export default Menu;