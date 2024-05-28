import { AreaChart, EventProps, LineChart, BarChart } from '@tremor/react';
import { useState, Fragment, useEffect } from 'react'



const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function AreaChartHero() {
    const [value, setValue] = useState(null);
    const [foodData, setFoodData] = useState([])
     
    
  useEffect(() => {
    async function fetchFoodData(url){

        console.log("fetching food data")
        const res = await fetch(url, {
            method: "GET",
            headers: {
    
                "Content-Type": "application/json",
            },
        })
        const data = await res.json()
      
        setFoodData(data)
      
        if (res.status >= 200 & res.status <= 209) {
          
            console.log("fetch successful")
           
            console.log("Food Data: ", foodData)
       
    }
    }
  
    fetchFoodData('https://food-price-dashboard-be.onrender.com/supermarkets/all-time/?food_item=oil&item_type=vegetable&category=1000%20ml&year=2024')

  }, [])

  return (
  <>
     <div className="p-10">
     <AreaChart
        className="mt-4 p-10 h-72"
        data={foodData.data}
        index="date"
        categories={['value']}
        colors={['green', 'red']}
        yAxisWidth={65}
        onValueChange={(v) => setValue(v)}
        connectNulls={true}
     
      />
     </div>

  </>

  );
}