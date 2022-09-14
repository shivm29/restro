import React from 'react'
import "./style.css"
import Menu from './menuApi.js'
import { useState } from 'react'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [
    ...new Set(Menu.map((curElem) => {
    return curElem.category
})),"All"
]

console.log("Unique list : ")
console.log(uniqueList);

const Restro = () => {

    const [menuData, setMenudata] = useState(Menu);
    const [menuList, setMenulist] = useState(uniqueList); 

    const filterItem = (category) => {
        console.log(category);
        if(category==="All") {
            setMenudata(Menu)
        }
        else{
            const categoryList = Menu.filter((curElem) => {
                return curElem.category === category;
            })
    
            setMenudata(categoryList);
        }
    } 

  return (
    <>
        <Navbar filterItem={filterItem} menuList={menuList}/>
       <MenuCard menuData={menuData} />
    </>
  )
}

export default Restro