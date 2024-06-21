import { selectItem, setItem } from '@/state/food_item/itemSlice';
import { selectItemType } from '@/state/item_types/itemTypeSlice';
import { AreaChart, EventProps
 } from '@tremor/react';
import { useState, Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function AveragePerYearChart() {
    const [value, setValue] = useState(null);
     
    const [foodData, setFoodData] = useState([])
    const [liveData, setLiveData] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
    
  const item = useSelector(selectItem)
  const dispatch = useDispatch()
  useEffect(() => {
    async function fetchFoodData(url){
  
      const res = await fetch(url, {
          method: "GET",
          headers: {
  
              "Content-Type": "application/json",
          },
      })
      const data = await res.json()
      setLiveData(data)

       
  
      if (res.status >= 200 & res.status <= 209) {
        setFoodData(data)
       
        setIsLoading(false)
        console.log("avg Food Data: ", foodData)    
    
  }
  
  
  
  }
  fetchFoodData('https://food-price-dashboard-be.onrender.com/nbs/average-item-types-price/?food_item=oil&item_type=vegetable&category=1000%20ml&year=2024')
  
  
  
   }, [foodData])
  
  
  if(isLoading == true){
    return(
      
  <div role="status" class="space-y-2.5 animate-pulse max-w-lg">
      <div class="flex items-center w-full">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div class="flex items-center w-full max-w-[480px]">
          <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                  <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div class="flex items-center w-full max-w-[400px]">
          <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div class="flex items-center w-full max-w-[480px]">
          <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                  <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div class="flex items-center w-full max-w-[440px]">
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
          <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div class="flex items-center w-full max-w-[360px]">
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
          <div class="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
          <div class="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <span class="sr-only">Loading...</span>
  </div>
  
    )
  }
  
  


  return (
  <>
   <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={foodData?.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="average_price" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="item_type" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="average_price" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
  </>

  );
}