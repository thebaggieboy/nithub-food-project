import { LineChart } from '@tremor/react';
import { selectItem, setItem } from '@/state/food_item/itemSlice';
import { selectItemUrl, setItemUrl } from '@/state/food_item/urlSlice';
import { selectItemType } from '@/state/item_types/itemTypeSlice';
import { AreaChart, EventProps } from '@tremor/react';
import { useState, Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


const chartdata = [
  {
    date: 'Jan 22',
    SolarPanels: 2890,
    'Inverters': 2338,
  },
  {
    date: 'Feb 22',
    SolarPanels: 2756,
    'Inverters': 2103,
  },
  {
    date: 'Mar 22',
    SolarPanels: 3322,
    'Inverters': 2194,
  },
  {
    date: 'Apr 22',
    SolarPanels: 3470,
    'Inverters': 2108,
  },
  {
    date: 'May 22',
    SolarPanels: 3475,
    'Inverters': 1812,
  },
  {
    date: 'Jun 22',
    SolarPanels: 3129,
    'Inverters': 1726,
  },
  {
    date: 'Jul 22',
    SolarPanels: 3490,
    'Inverters': 1982,
  },
  {
    date: 'Aug 22',
    SolarPanels: 2903,
    'Inverters': 2012,
  },
  {
    date: 'Sep 22',
    SolarPanels: 2643,
    'Inverters': 2342,
  },
  {
    date: 'Oct 22',
    SolarPanels: 2837,
    'Inverters': 2473,
  },
  {
    date: 'Nov 22',
    SolarPanels: 2954,
    'Inverters': 3848,
  },
  {
    date: 'Dec 22',
    SolarPanels: 3239,
    'Inverters': 3736,
  },
];

const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export function LineChartHero() {
    const [value, setValue] = useState(null);
    const [foodData, setFoodData] = useState([])
    const [liveData, setLiveData] = useState([])
    const [isLoading, setIsLoading ] = useState(true)
    const item = useSelector(selectItem)
  const item_url = useSelector(selectItemUrl)
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
    setLiveData(item)
  
    if (res.status >= 200 & res.status <= 209) {
  
      setIsLoading(false)
      console.log("Area Chart  Data: ", foodData)    
      console.log("Area Chart  Live Data: ", liveData)    
  
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
  const dataFormatter = (number) =>
    `$${Intl.NumberFormat('us').format(number).toString()}`;
  
  return (
    <LineChart
      className="h-80"
      data={item?.data}
      index="date"
      categories={['SolarPanels', 'Inverters']}
      colors={['indigo', 'rose']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
  );
}