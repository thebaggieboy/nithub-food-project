import { AreaChart, EventProps, BarChart } from '@tremor/react';
import { useState, Fragment, useEffect } from 'react'


const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function AveragePerYearChart() {
    const [value, setValue] = useState(null);
     
    const [foodData, setFoodData] = useState([])
     
    async function fetchFoodData(url){

      console.log("fetching food data")
      const res = await fetch(url, {
          method: "GET",
          headers: {
  
              "Content-Type": "application/json",
          },
      })
      const data = await res.json()
    
  
    
      if (res.status >= 200 & res.status <= 209) {
        
       
          setFoodData(data)
         
  }
  }
  fetchFoodData('https://food-price-dashboard-be.onrender.com/nbs/average-item-types-price/?food_item=oil&item_type=vegetable&category=1000%20ml&year=2024')

  return (
  <>
     <div className="p-10">
     <BarChart
        className="mt-4 p-10 h-72"
        data={foodData.data}
        index="item_type"
        categories={['average_price']}
        colors={['green', 'red']}
        yAxisWidth={65}
        onValueChange={(v) => setValue(v)}
        connectNulls={true}
        xAxisLabel="Food Item"
        yAxisLabel="Average Price"
      />
     </div>

  </>

  );
}