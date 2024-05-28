import { AreaChart, EventProps } from '@tremor/react';
import { useState, Fragment, useEffect } from 'react'


const chartDataDate =
[{"date":"2016-01-01","value":361.14},{"date":"2016-02-01","value":364.24},{"date":"2016-03-01","value":403.33},{"date":"2016-04-01","value":390.0},{"date":"2016-05-01","value":395.07},{"date":"2016-06-01","value":402.42},{"date":"2016-07-01","value":414.16},{"date":"2016-08-01","value":482.51},{"date":"2016-09-01","value":508.37},{"date":"2016-10-01","value":539.21},{"date":"2016-11-01","value":600.83},{"date":"2016-12-01","value":603.7},{"date":"2017-01-01","value":598.42},{"date":"2017-02-01","value":507.26},{"date":"2017-03-01","value":538.18},{"date":"2017-04-01","value":552.81},{"date":"2017-05-01","value":559.14},{"date":"2017-06-01","value":550.0},{"date":"2017-07-01","value":555.55},{"date":"2017-08-01","value":578.57},{"date":"2017-09-01","value":555.3},{"date":"2017-10-01","value":550.82},{"date":"2017-11-01","value":550.82},{"date":"2017-12-01","value":533.33}]

const averagePriceYearData = [{"average_price":455.41,"year":2016},{"average_price":552.52,"year":2017},{"average_price":532.65,"year":2018},{"average_price":528.28,"year":2019},{"average_price":613.76,"year":2020},{"average_price":868.57,"year":2021},{"average_price":1125.0,"year":2022},{"average_price":1539.4,"year":2023},{"average_price":2256.91,"year":2024}]

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
  

  
    if (res.status >= 200 & res.status <= 209) {
      
        console.log("fetch successful")
        setFoodData(data)
        console.log("Food Data: ", foodData)
   
}
}
fetchFoodData('https://food-price-dashboard-be.onrender.com/nbs/year/?food_item=oil&item_type=vegetable&category=1000%20ml&year=2024')

 })
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
        xAxisLabel="Date Of Month"
      />
     </div>

  </>

  );
}