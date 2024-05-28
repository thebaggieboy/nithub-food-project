

import Link from 'next/link'

import { useRouter } from 'next/router'
import Head from 'next/head'
import NavBar from './Navbar'
import Script from "next/script" 
import { Dropdown } from "flowbite-react";

import LandingPage from "./LandingPage"


import Main from './Main'

import Main2 from './Main2'
import { useSearchParams } from 'next/navigation'

export default function Layout({children}) {

  const router = useRouter()
  const path_ = router.pathname
  const searchParams = useSearchParams();
  const dashboard_query = searchParams.get('dashboard')

  const displayDashboardType = ()=>{
    const dashboard_type = router.query.dashboard_query
    console.log("Dashboard Type: ", dashboard_query)
  }
  displayDashboardType
 
    return (
      <>
<div className={dashboard_query !== "Daily" || dashboard_query !== "Monthly" ? 'bg-white' : "bg-gray-50"} >
        
<NavBar/>  
{dashboard_query == null  ? <LandingPage/> : ""}


{dashboard_query == "Daily" || dashboard_query == "Monthly" ? <div className="p-10 ml-5">
<Dropdown className=" ml-5" dismissOnClick={true} label="Dashboard Type" style={{backgroundColor:"white", marginLeft:10,textAlign:"center", color:"black", border:"1px solid green", fontSize:10, maxWidth:"fit-content", marginInline:"auto" }}>
      <Dropdown.Item as={Link} href="?dashboard=Daily">
        Daily
      </Dropdown.Item>
      <Dropdown.Item as={Link} href="?dashboard=Monthly">
        Monthly
      </Dropdown.Item>
    </Dropdown>

</div> : ""}        
</div>


{dashboard_query === "Daily" ? <Main/> : ""}
{dashboard_query === "Monthly" ? <Main2/> : ""}

 
 
         {children}
     
      
       </>
    )
  }
 

