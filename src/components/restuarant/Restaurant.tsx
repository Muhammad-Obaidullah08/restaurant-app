"use client";
import { useState } from 'react'
import Menu from './MenuApi'
import MenuCard from './MenuCard';

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    console.log(menuData);

    const filterItem = (category: string) => {
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        }
        );
        setMenuData(updatedList);
    }
    return (
        <>
            <nav className='w-full bg-orange-50 pt-10'>
                <ul className='flex flex-wrap w-2/3 bg-white justify-around items-center rounded-full mx-auto py-3'>
                    <li className='px-2 hover:underline hover:underline-offset-8 hover:decoration-violet-700 hover:decoration-4 cursor-pointer' onClick={() => setMenuData(Menu)}>All</li>
                    <li className='px-2 hover:underline hover:underline-offset-8 hover:decoration-violet-700 hover:decoration-4 cursor-pointer' onClick={() => filterItem("Breakfast")}>Breakfast</li>
                    <li className='px-2 hover:underline hover:underline-offset-8 hover:decoration-violet-700 hover:decoration-4 cursor-pointer' onClick={() => filterItem("Lunch")}>Lunch</li>
                    <li className='px-2 hover:underline hover:underline-offset-8 hover:decoration-violet-700 hover:decoration-4 cursor-pointer' onClick={() => filterItem("Brunch")}>Brunch</li>
                    <li className='px-2 hover:underline hover:underline-offset-8 hover:decoration-violet-700 hover:decoration-4 cursor-pointer' onClick={() => filterItem("Dinner")}>Dinner</li>
                    <li className='px-2 hover:underline hover:underline-offset-8 hover:decoration-violet-700 hover:decoration-4 cursor-pointer' onClick={() => filterItem("Refreshment")}>Refreshment</li>
                </ul>
            </nav>

            <MenuCard menuData={menuData} />
        </>
    )
}

export default Restaurant