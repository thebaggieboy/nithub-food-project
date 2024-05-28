import { useState, Fragment, useEffect, use } from 'react'

import ChartOne from "./Charts/ChartOne"
import AreaChart from "./Charts/AreaChart"
import DailyAreaChart from "./Charts/DailyAreaChart"
import AveragePerYearChart from "./Charts/AveragePerYearChart"

import AverageChartOverYears from "./Charts/AverageChartOverYears"

import { useDispatch, useSelector } from "react-redux";
import {setItem, selectItem, selectItemType} from "../state/food_item/itemSlice"



export default function Main() {
      
  const [foodData, setFoodData] = useState([])

  const item = useSelector(selectItem)
  const dispatch = useDispatch()

  useEffect(() => {
    async function fetch_average_daily_price(url){
        console.log("Fetching average daily price")
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
         
          console.log("fetch_average_daily_price: ", foodData)
        
  }
      }
    
    fetch_average_daily_price('https://food-price-dashboard-be.onrender.com/supermarkets/dod-percentage/?food_item=oil&item_type=vegetable&category=1000%20ml&year=2024')
  
  })
  return (
    <>
     <div className="bg-gray-50  p-10">
  

      

  <div  className="flex p-2 ">
  <div className="p-10 mr-5 pr-5">
  <h4 style={{fontWeight:"light", fontSize:15, marginLeft:30}}>Current Daily Price</h4>

          <ul class="flex space-x-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li class="me-2">
      <h3 style={{color:"black", marginLeft:30, fontSize:25}} className="flex font-bold text-lg pt-1 text-black">₦{foodData?.current_day_average_price}</h3>
      </li>
      <li class="me-2 mt-1">
      <span class="inline-flex bg-green-100 text-green-800  text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">{foodData?.percentage_change}%</span>
      </li>
    
  
  </ul>
      </div>
  
     
  <ul class="flex flex-nowrap space-x-1 pt-4  mt-1 ml-2 pl-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li class="me-2">
          <a href="#" style={{borderRadius:50, fontSize:10}} class="inline-block px-4 py-1 text-green-900 bold text-xs bg-green-200 rounded-lg active" aria-current="page">Daily</a>
      </li>
      <li class="me-2">
          <a href="#" style={{borderRadius:50, fontSize:10}}  class="inline-block px-4 py-1 text-xs rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Last month</a>
      </li>
      <li class="me-2">
          <a href="#" style={{borderRadius:50, fontSize:10}} class="inline-block px-4 py-1 text-xs rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">last week</a>
      </li>
  
  </ul>
  
  </div>
     </div>
     <div class=" bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-10">
    <div class=" p-4">
        <DailyAreaChart/>
    </div>
    <div class="p-4">
    <AveragePerYearChart/>
    
    </div>
    <div class="p-4">
    <AverageChartOverYears/>
    
    </div>
</div>


    </>
  )
}
