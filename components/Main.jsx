import React from 'react'

import ChartOne from "./Charts/ChartOne"
import ChartTwo from "./Charts/ChartTwo"
import ChartThree from "./Charts/ChartThree"
import ChartFour from "./Charts/ChartFour"
import ChartFive from "./Charts/ChartFour"


export default function Main() {
  return (
    <>
     <div className="bg-gray-50  p-10">
  

      

  <div  className="flex p-2 ">
  <div className="p-5 mr-5 pr-5">
          <h4 style={{fontWeight:"light", fontSize:15}}>Average price per day</h4>

          <ul class="flex space-x-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li class="me-2">
      <h3 style={{color:"black", fontSize:25}} className="flex font-bold text-lg pt-1 text-black">$240.8k</h3>

      </li>
      <li class="me-2 mt-1">
      <span class="inline-flex bg-green-100 text-green-800  text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">14.8%</span>
      </li>
    
  
  </ul>
      </div>
  
     
  <ul class="flex flex-wrap space-x-2 pt-4  mt-1 ml-10 pl-10 text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <li class="me-2">
          <a href="#" style={{borderRadius:50, fontSize:10}} class="inline-block px-4 py-1 text-green-900 bold text-xs bg-green-200 rounded-lg active" aria-current="page">Daily</a>
      </li>
      <li class="me-2">
          <a href="#" style={{borderRadius:50, fontSize:10}}  class="inline-block px-4 py-1 text-xs rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">Last month</a>
      </li>
      <li class="me-2">
          <a href="#" style={{borderRadius:50, fontSize:10}} class="inline-block px-4 py-1 text-xs rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white">last week</a>
      </li>
  
  </ul>
  
  </div>
  
         
  
  
     </div>
     <div class=" bg-gray-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 p-10">
    <div class=" p-4">
      <ChartOne/>
    </div>
    <div class=" p-4"><ChartOne/></div>
    <div class=" p-4"><ChartThree/></div>
    
    <div class=" p-4"><ChartTwo/></div>
</div>


    </>
  )
}
