 import React from 'react'
 import { useSearchParams } from 'next/navigation'
 import Link from 'next/link'

 import { useRouter } from 'next/router'
import path from 'path'
 export default function LandingPage() {
    const router = useRouter()
    const path_ = router.pathname
    const searchParams = useSearchParams();
    const dashboard_query = searchParams.get('dashboard')
    console.log("DASH: ", dashboard_query)
  
  

   return (
     <>
     
     {dashboard_query !== "Daily" || dashboard_query !== "Monthly" ?    <section class="bg-white dark:bg-gray-900 " >
    <div style={{margin:40}} class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-4 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl text-green-900 font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">The Naija Food Price Project</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Predict price trends & make informed choices with our data-driven food price forecasts .</p>
            <Link href="?dashboard=Monthly" style={{borderRadius:50}} class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-xs text-white rounded-lg bg-green-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Dashboard
               <img src="/icons/up-right.png" style={{height:20, marginLeft:10, backgroundColor:"white" , border:"none", borderRadius:100}}  alt="" srcset="" />
            </Link>
        
        </div>
        <div class="lg:mt-2 lg:col-span-5 lg:flex sm:mt-2">
            <img src="icons/vector-food.png" style={{height:400, borderRadius:100}} alt="mockup"/>
        </div>                
    </div>
</section>: ""}
     </>
   )
 }
 