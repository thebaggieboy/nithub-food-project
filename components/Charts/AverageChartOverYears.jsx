import { LineChart, AreaChart } from '@tremor/react';

import { useState, Fragment, useEffect } from 'react'


//const chartDataDate = 
const averagePriceOverYearData =   [{"average_price":455.41,"year":2016},{"average_price":552.52,"year":2017},{"average_price":532.65,"year":2018},{"average_price":528.28,"year":2019},{"average_price":613.76,"year":2020},{"average_price":868.57,"year":2021},{"average_price":1125.0,"year":2022},{"average_price":1539.4,"year":2023},{"average_price":2256.91,"year":2024}]     
  

const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function AverageChartOverYears() {
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
     <AreaChart
      className="h-80"
      data={foodData.data}
      index="year"
      categories={['average_price']}
      colors={['blue', 'red']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
      xAxisLabel="Item Types"
      yAxisLabel="Average Price"
    />

     </div>

  </>

  );
}