import { selectItem, setItem } from '@/state/food_item/itemSlice';
import { selectItemUrl, setItemUrl } from '@/state/food_item/urlSlice';
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
    const [isLoading, setIsLoading ] = useState(true)
    const item = useSelector(selectItem)
  const item_url = useSelector(selectItemUrl)
   const dispatch = useDispatch()


 useEffect(() => {
  
 if(item !== null) {
  setLiveData(item)
  setIsLoading(false)
  console.log("Area Chart Item: ", liveData)

 

 }

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
        data={item?.data}
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