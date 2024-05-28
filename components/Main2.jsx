import AreaChart from "./Charts/AreaChart"

import Date from "./DatePicker"
import { Dropdown } from "flowbite-react";
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux";
import AveragePerYearChart from "./Charts/AveragePerYearChart"

import AverageChartOverYears from "./Charts/AverageChartOverYears"
import { useState, Fragment, useEffect, use } from 'react'

import {setItem, selectItem, selectItemType} from "../state/food_item/itemSlice"

export default function Main2() {
  
  const [foodData, setFoodData] = useState([])

  const item = useSelector(selectItem)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetch_average_month_price(url){
      console.log("Fetching average month price")
      const res = await fetch(url, {
        method: "GET",
        headers: {

            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
    
  
    if (res.status >= 200 & res.status <= 209) {
      
        console.log("fetch successful")
        setFoodData(data)
       
        console.log("fetch_average_month_price: ", foodData)
      
}
    }
  
  fetch_average_month_price('https://food-price-dashboard-be.onrender.com/nbs/mom-percentage/?food_item=oil&item_type=vegetable&category=1000%20ml&year=2024')


  })
  return (
    <>
     <div className="bg-gray-50  p-10">
  

      

  <div  className="flex p-2 ">
  <div className="">
          <h4 style={{fontWeight:"light", fontSize:15, marginLeft:30}}>Current Month Price</h4>

          <ul class="flex space-x-2 text-sm font-medium text-center ml-20 text-gray-500 dark:text-gray-400">
      <li class="me-2">
      <h3 style={{color:"black", marginLeft:30, fontSize:25}} className="flex font-bold text-lg pt-1 text-black">₦{foodData?.current_month_price}</h3>

      </li>
      <li class="me-2 mt-1">
      <span class="inline-flex bg-green-100 text-green-800  text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">{foodData?.percentage_change}% <img src="/icons/increase.png" style={{height:10, marginLeft:5}} alt="" />  </span>
      </li>
    
  
  </ul>
      </div>
  
     
  <ul class="flex flex-wrap  space-x-1 pt-4  mt-2 ml-2 pl-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li class="me-2 mt-2">
      <span class="bg-green-800 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"></span> <span class="text-xs" style={{fontSize:10}}> Current Year</span>
      </li>
      <li class="me-2 mt-2">
      <span class="bg-green-400 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"></span> <span class="text-xs" style={{fontSize:10}}> Previous Year</span>
      </li>
      <li class="me-2">
      <div className="p-10 ml-2 pt-2" style={{fontSize:8}}>
<Dropdown className="text-xs" dismissOnClick={true} label="2024" style={{backgroundColor:"white",textAlign:"center", fontSize:8,  color:"black", border:"0.5px solid green",  maxWidth:"fit-content", marginInline:"auto", height:30, width:70, alignItems:"center" }}>
      <Dropdown.Item as={Link} href="?dashboard=Daily">
        2023
      </Dropdown.Item>
      <Dropdown.Item as={Link} href="?dashboard=Daily">
        2022
      </Dropdown.Item>
      <Dropdown.Item as={Link} href="?dashboard=Daily">
        2021
      </Dropdown.Item>
      <Dropdown.Item as={Link} href="?dashboard=Daily">
        2020
      </Dropdown.Item>
      <Dropdown.Item as={Link} href="?dashboard=Daily">
        2019
      </Dropdown.Item>
      <Dropdown.Item as={Link} href="?dashboard=Daily">
        2018
      </Dropdown.Item>
  
</Dropdown>
</div>

      </li>
  
  </ul>
  
  </div>
  

     </div>
     <div class=" bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-10">
    <div class=" p-4">
        <AreaChart/>
    </div>
    <div class=" p-4">
        <AveragePerYearChart/>
    </div>
    <div style={{float:"right"}} class=" p-4">
        <AverageChartOverYears/>
    </div>

  
</div>

    </>
  )
}
