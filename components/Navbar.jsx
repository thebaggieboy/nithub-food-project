
import { useState, Fragment, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Popover, Transition } from '@headlessui/react'
import Link from 'next/link'
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/router'
import Head from 'next/head'

import NBS_DASHBOARD from "../data/nbs.json"
import SUPERMARKETS_DASHBOARD from "../data/supermarkets_dashboard.json"
import { Dropdown } from "flowbite-react";



const navigation = [
  { name: 'Food Item', href: '/' },
  { name: 'Item type', href: '/admin' },
  { name: 'Category', href: '/' },

 
]




export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [resultReady, setResultReady] = useState(true)
  const [options, setOptions] = useState([]);
  const [error, setError] = useState(null);
  const [result, setResult] = useState([]); 
  const [resultItemType, setResultItemType] = useState([]); 
  var results=[];
  var itemResults =[]

  useEffect(() => {
    async function getJson() {
  
      console.log("NBS_DASHBOARD: ", NBS_DASHBOARD[0]);
      console.log("SUPERMARKETS_DASHBOARD: ", SUPERMARKETS_DASHBOARD);
      setResultReady(true)
  
      var json = NBS_DASHBOARD
      console.log("JSON EXAMPLE", json[0]);

  
    
    for (let key in json[0]) {
  
     
      console.log("Keys: ", key)
     
      let resultKeys = (`${key}`)
      results.push(key)

      setResult(results)
      
      const item_type = `${json[0]}.${key}`
      itemResults.push(item_type)
      setResultItemType(item_type)
 
      console.log(item_type)
    
    
    }
    console.log("Result Keys: ", results)
    console.log("Key Sub Categories", itemResults)
      } 
    getJson()


  //  { async function getJsonItemType() {
  
  //     console.log("NBS_DASHBOARD: ", NBS_DASHBOARD);
  //     console.log("SUPERMARKETS_DASHBOARD: ", SUPERMARKETS_DASHBOARD);
     
  
  //     var json = NBS_DASHBOARD
  //     console.log("JSON EXAMPLE", json[0]);

  //   var results=[];
    
  //   for (let key in json[0]) {
  
     
  //     //console.log("Keys: ", key)
     
  //     let resultKeys = (`${key}`)
  //     results.push(key)
  //     setResult(results)
     
   
  //   }
  //   console.log("Result Keys: ", results)
  //     console.log("Results State: ", result)
  //     } 
  //   getJsonItemType()}
  }, [])

  


  if (error) {
    return <div>Error: {error}</div>;
  }


  const router = useRouter()
  const path = router.pathname
  
  console.log("The current path for this route is ", path)
  return (
    <>
    {/* { <Head>
     <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      
     </Head>} */}
    <div className="isolate  ">
      <div className="absolute inset-x-0 top-[-10rem] transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
      
      </div>
      <div className="px-4 0  p-5 lg:px-8">
        <nav style={{borderRadius:50}} className="flex bg-white  items-center justify-between p-2" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <svg width="75" height="27" viewBox="0 0 75 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 26.9908V14.3528H2.06807L2.34505 19.1169L2.13732 18.153C2.23888 17.4346 2.43276 16.7673 2.71896 16.1463C3.00979 15.5299 3.43448 15.0294 3.99305 14.6494C4.55623 14.2694 5.28559 14.0793 6.18576 14.0793C7.37675 14.0793 8.29999 14.4501 8.94627 15.187C9.59254 15.9238 9.91568 17.0407 9.91568 18.5284V26.9861H7.47831V19.3579C7.47831 18.6396 7.40445 18.0603 7.25673 17.62C7.10901 17.1798 6.87358 16.86 6.54121 16.6561C6.20884 16.4568 5.76568 16.3548 5.21173 16.3548C4.58854 16.3548 4.02998 16.5309 3.53604 16.8832C3.0421 17.2354 2.6728 17.671 2.42814 18.1854V26.9908H0V26.9908Z" fill="#0D1836"></path><path d="M13.0547 12.4063C12.5931 12.4063 12.2007 12.2441 11.8822 11.9243C11.5637 11.6045 11.4021 11.1874 11.4021 10.6776C11.4021 10.1771 11.5637 9.76465 11.8868 9.44951C12.2099 9.13438 12.5977 8.97681 13.0547 8.97681C13.5071 8.97681 13.8995 9.13438 14.2226 9.44951C14.5458 9.76465 14.7073 10.1771 14.7073 10.6776C14.7073 11.1874 14.5458 11.6045 14.2226 11.9243C13.8949 12.2441 13.5071 12.4063 13.0547 12.4063ZM11.8083 26.9907V14.3759H14.278L14.2457 26.9953H11.8083V26.9907Z" fill="#0D1836"></path><path d="M15.4783 16.3455V14.1673H22.9243V16.3455H15.4783ZM20.3253 26.9907C19.3328 26.9907 18.5665 26.7358 18.0264 26.226C17.4863 25.7162 17.2186 24.9932 17.2186 24.0571V17.4206C17.2186 17.175 17.2694 16.9479 17.3663 16.744C17.4679 16.5401 17.611 16.4057 17.8049 16.3455L17.214 14.6632V14.3156L17.791 10.5247H19.6283V23.5241C19.6283 23.9876 19.7344 24.3027 19.9468 24.4742C20.1591 24.6457 20.5469 24.7291 21.1055 24.7291C21.4655 24.7291 21.7979 24.7291 22.0933 24.7291C22.3888 24.7291 22.6704 24.7245 22.9289 24.7152V26.8377C22.5042 26.9073 22.0656 26.949 21.6086 26.9629C21.1516 26.986 20.7223 26.9907 20.3253 26.9907Z" fill="#0D1836"></path><path d="M24.2122 26.9907V8.97681H26.6357V14.3527L26.451 17.9583L26.5526 18.9778L26.391 18.1529C26.4833 17.4578 26.668 16.7997 26.9404 16.1787C27.2127 15.5577 27.6282 15.0525 28.1821 14.6678C28.7361 14.2832 29.4701 14.0885 30.3887 14.0885C31.5889 14.0885 32.5122 14.4547 33.1538 15.1915C33.7955 15.9238 34.1186 17.0407 34.1186 18.5422V27H31.672V19.3579C31.672 18.3058 31.5104 17.5458 31.1827 17.0685C30.8549 16.5958 30.264 16.3548 29.41 16.3548C28.7868 16.3548 28.2375 16.5494 27.7574 16.948C27.282 17.3419 26.908 17.8053 26.6357 18.3383V26.9953H24.2122V26.9907Z" fill="#0D1836"></path><path d="M39.4226 26.9907C38.3378 26.9907 37.4607 26.6106 36.7959 25.8552C36.1312 25.0998 35.7988 24.0293 35.7988 22.6436V14.0839H38.2362V22.0226C38.2362 22.6251 38.3054 23.1256 38.4485 23.5288C38.5916 23.932 38.8178 24.2286 39.1364 24.4278C39.4503 24.6225 39.8611 24.7244 40.3597 24.7244C40.9921 24.7244 41.5507 24.5483 42.04 24.1961C42.5293 23.8439 42.894 23.4129 43.1433 22.9031V14.0839H45.5668V26.7358H43.4987L43.2217 22.1014L43.4433 22.9263C43.3418 23.6354 43.1479 24.3027 42.8617 24.9191C42.5708 25.5355 42.1508 26.036 41.5968 26.4206C41.0383 26.8006 40.3181 26.9907 39.4226 26.9907Z" fill="#0D1836"></path><path d="M47.3996 26.8517L47.3904 8.82385H49.8139V14.4778L49.8278 24.1174L50.0355 24.5345L49.8139 24.882L49.7077 26.8517H47.3996ZM53.1791 26.9907C52.3344 26.9907 51.6604 26.847 51.1665 26.5551C50.6679 26.2631 50.3078 25.9294 50.077 25.554C49.8462 25.174 49.7031 24.8542 49.6477 24.5901L49.0476 24.1591L49.7954 23.881C49.8416 24.0571 49.9662 24.2425 50.1694 24.4325C50.3725 24.6225 50.6633 24.7801 51.0372 24.9052C51.4111 25.0303 51.8635 25.0952 52.3944 25.0952C53.3084 25.0952 54.0701 24.7337 54.6702 24.0154C55.2703 23.2971 55.5703 22.1292 55.5703 20.5164C55.5703 19.0427 55.2934 17.9304 54.7348 17.1889C54.1762 16.4474 53.4746 16.0767 52.6298 16.0767C52.0205 16.0767 51.5173 16.1647 51.1157 16.3408C50.7141 16.517 50.4094 16.7255 50.2017 16.9665C49.9939 17.2075 49.8601 17.4253 49.7954 17.6246L49.6108 17.3929L49.8047 17.0314C49.8278 16.4845 49.9709 15.9747 50.234 15.5067C50.4971 15.0386 50.8895 14.6632 51.4111 14.3759C51.9328 14.0885 52.5975 13.9449 53.3961 13.9449C54.3978 13.9449 55.2426 14.209 55.935 14.7466C56.6275 15.2796 57.1537 16.0211 57.5184 16.9665C57.8785 17.9119 58.0631 19.0103 58.0631 20.2615C58.0631 21.3877 57.9246 22.3748 57.643 23.2183C57.3615 24.0617 56.9875 24.7615 56.5167 25.3177C56.0458 25.8738 55.5242 26.2909 54.9472 26.5643C54.3701 26.8563 53.7792 26.9907 53.1791 26.9907Z" fill="#0D1836"></path><path d="M71.7823 1.69617L66.5798 8.88412C68.0155 6.9006 68.514 4.51388 68.1586 2.2662L71.7823 1.69617Z" fill="#62CF3A"></path><path d="M74.9999 6.14055L66.5798 8.88874C68.9064 8.1287 70.7021 6.4974 71.7316 4.46753L74.9999 6.14055Z" fill="#62CF3A"></path><path d="M74.9999 11.6323L66.5798 8.88415C68.9064 9.64419 71.3161 9.38003 73.338 8.3512L74.9999 11.6323Z" fill="#62CF3A"></path><path d="M71.7823 16.0767L66.5798 8.88879C68.0155 10.8723 70.1205 12.0865 72.3594 12.4434L71.7823 16.0767Z" fill="#62CF3A"></path><path d="M66.5798 17.7729V8.88416C66.5798 11.3358 67.5723 13.5603 69.1742 15.1684L66.5798 17.7729Z" fill="#62CF3A"></path><path d="M61.3772 16.0767L66.5797 8.88879C65.144 10.8723 64.6455 13.259 65.0009 15.5067L61.3772 16.0767Z" fill="#62CF3A"></path><path d="M58.1646 11.6324L66.5846 8.88416C64.258 9.6442 62.4623 11.2755 61.4328 13.3054L58.1646 11.6324Z" fill="#62CF3A"></path><path d="M58.1646 6.1405L66.5846 8.8887C64.258 8.12866 61.8483 8.39282 59.8264 9.42166L58.1646 6.1405Z" fill="#62CF3A"></path><path d="M61.3773 1.69617L66.5798 8.88412C65.1442 6.9006 63.0392 5.68638 60.8003 5.32953L61.3773 1.69617Z" fill="#62CF3A"></path><path d="M66.5799 0V8.88414C66.5799 6.43254 65.5874 4.20803 63.9856 2.5999L66.5799 0Z" fill="#62CF3A"></path></svg>
              
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 sm:hidden" aria-hidden="true" />
            </button>
          </div>
          <div  className="hidden lg:flex lg:gap-x-12 bold mr-10">
           <h2 style={{fontWeight:'bold'}}>NAIJA FOOD PRICE PROJECT</h2>
          </div>
          <div  className="ml-10 hidden lg:flex lg:gap-x-12 overflow-x-visible">
         
         
<div  style={{borderRadius:50, border:"1px green solid", padding:10, width:100, fontSize:10, fontWeight:'lighter', color:"black", fontFamily:"Poppins, sans-serif", textAlign:'center', paddingLeft:10}}  className=" hover:text-white   hover:bg-green-800 ml-3">
<Dropdown inline label="Food Item">

{result.map(item=>(
  <>
   <Dropdown.Item>
      {item}
</Dropdown.Item>

  </>
))}

  </Dropdown>

</div>
<div  style={{borderRadius:50, border:"1px green solid", padding:10, width:100, fontSize:10, fontWeight:'lighter', color:"black", fontFamily:"Poppins, sans-serif", textAlign:'center', paddingLeft:10}}  className=" hover:text-white   hover:bg-green-800 ml-3">
<Dropdown inline label="Item Type" >
{itemResults.map(item=>(
  <>
   <Dropdown.Item>
      {item}
</Dropdown.Item>

  </>
))}
  
</Dropdown>

</div>
<div  style={{borderRadius:50, border:"1px green solid", padding:10, width:100, fontSize:10, fontWeight:'lighter', color:"black", fontFamily:"Poppins, sans-serif", textAlign:'center', paddingLeft:10}}  className=" hover:text-white   hover:bg-green-800 ml-3">
<Dropdown inline label="Category" >
  <Dropdown.Item>
    Food Item 1
  </Dropdown.Item>
  <Dropdown.Item>
    Food Item 2
  </Dropdown.Item>
  
</Dropdown>

</div>
          </div>
       
          

        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="">NITHUB</span>
               
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
             
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
      
    </div>
    </>
  )
}