

import Link from 'next/link'

import { useRouter } from 'next/router'
import Head from 'next/head'
import NavBar from './Navbar'
import Script from "next/script" 

export default function Layout({children}) {

  const router = useRouter()
  const path_ = router.pathname

 
    return (
      <>
<div className='bg-gray-50'>
        
<NavBar/>  
      
   
</div>
 
         {children}
     
      
       </>
    )
  }
 

