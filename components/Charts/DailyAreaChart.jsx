import { AreaChart, EventProps, LineChart, BarChart } from '@tremor/react';
import { useState, Fragment, useEffect } from 'react'
import { selectItem } from '@/state/food_item/itemSlice';
import { selectItemType } from '@/state/item_types/itemTypeSlice';


const dataFormatter = (number) =>
  `$${Intl.NumberFormat('us').format(number).toString()}`;

export default function AreaChartHero() {
    const [value, setValue] = useState(null);
       
    const [foodData, setFoodData] = useState([])
    const [liveData, setLiveData] = useState([])
    
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
      
    
        const res2 = await fetch(item, {
          method: "GET",
          headers: {
    
              "Content-Type": "application/json",
          },
      })
    
      const data2 = await res2.json()
    
      
        if (res.status >= 200 & res.status <= 209) {
          if(item == "https://food-price-dashboard-be.onrender.com/nbs/year/?food_item=&item_type=&category=&year=2024"){
            setFoodData(data)
            console.log("Food Data: ", foodData)
        
          }
           
      
    }
    
    
    if (res2.status >= 200 & res2.status <= 209) {
      if(item !== "https://food-price-dashboard-be.onrender.com/nbs/year/?food_item=&item_type=&category=&year=2024"){
        setLiveData(data2)
        console.log("Live Data: ", liveData)
    
      }   
    }
    
    }
    
    if(item == "https://food-price-dashboard-be.onrender.com/nbs/year/?food_item=&item_type=&category=&year=2024"){
      console.log("USING DEFAULT FOOD ITEMS")
      fetchFoodData('https://food-price-dashboard-be.onrender.com/nbs/year/?food_item=oil&item_type=vegetable&category=1000%20ml&year=2024')
    
     }
    
     }, [foodData])
    
  return (
  <>
     <div className="p-10">
     <AreaChart
        className="mt-4 p-10 h-72"
        data={item !== "https://food-price-dashboard-be.onrender.com/nbs/year/?food_item=&item_type=&category=&year=2024" ? liveData.data : foodData.data}
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