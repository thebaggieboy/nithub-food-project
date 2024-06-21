import { selectItem } from '@/state/food_item/itemSlice';
import { selectItemType } from '@/state/item_types/itemTypeSlice';
import { AreaChart, EventProps, BarChart, LineChart
 } from '@tremor/react';
import { useState, Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


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
    
      setFoodData(data)
      if (res.status >= 200 & res.status <= 209) {
        
       
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
     <div className="p-10">
     <LineChart
        className="mt-4 p-10 h-72"
        data={foodData?.data}
        index="item_type"
        categories={['average_price']}
        colors={['green', 'red']}
        yAxisWidth={65}
        onValueChange={(v) => setValue(v)}
      
        xAxisLabel="Food Item"
        yAxisLabel="Average Price"
      />
     </div>

  </>

  );
}