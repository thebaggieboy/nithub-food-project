import { selectActiveCategory, setActiveCategory } from '@/state/category/activeCategorySlice';
import { selectActiveItem, setActiveItem, setActiveItemType } from '@/state/food_item/activeFoodItemSlice';
import { selectItem, setItem } from '@/state/food_item/itemSlice';
import { selectItemUrl, setItemUrl } from '@/state/food_item/urlSlice';
import { selectActiveItemType } from '@/state/item_types/activeItemType';
import { selectItemType } from '@/state/item_types/itemTypeSlice';
import { AreaChart, EventProps } from '@tremor/react';
import { useState, Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';




const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function AreaChartHero() {
    const [value, setValue] = useState(null);
    const [foodData, setFoodData] = useState([])
    const [liveData, setLiveData] = useState([])
    const [isLoading, setIsLoading ] = useState(false)
    const item = useSelector(selectItem)
    const item_url = useSelector(selectItemUrl)
    const active_item = useSelector(selectActiveItem)
    const active_item_type = useSelector(selectActiveItemType)
    const active_category = useSelector(selectActiveCategory)
   const dispatch = useDispatch()


 useEffect(() => {
  const api_url = `https://food-price-dashboard-be.onrender.com/nbs/year/?food_item=${active_item !== null ? active_item : 'oil' }&item_type=${encodeURI(active_item_type !== null ? active_item_type : 'vegetable')}&category=${encodeURI(active_category !== null ? active_category : '1000 ml') }&year=2024`

  async function fetchFoodData(url){
  
    const res = await fetch(url, {
        method: "GET",
        headers: {

            "Content-Type": "application/json",
        },
    })
    const data = await res.json()
  
    setFoodData(data)
    
    console.log("Area Food Data: ", foodData)
    if (res.status >= 200 & res.status <= 209) {
      setIsLoading(false)
          
  
}

}

fetchFoodData(`https://food-price-dashboard-be.onrender.com/nbs/year/?food_item=${active_item !== null ? active_item : 'oil' }&item_type=${encodeURI(active_item_type !== null ? active_item_type : 'vegetable')}&category=${encodeURI(active_category !== null ? active_category : '1000 ml') }&year=2024`)


 }, [])


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
     <AreaChart
        className="mt-4 p-10 h-72"
        data={foodData?.data}
        index="date"
        categories={['value']}
        colors={['green', 'red']}
        yAxisWidth={65}
        onValueChange={(v) => setValue(v)}
        connectNulls={true}
        xAxisLabel="Date Of Month"
      />
     </div>

  </>

  );
}