import { useState, Fragment } from 'react'
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

const navigation = [
  { name: 'Food Item', href: '/' },
  { name: 'Item type', href: '/admin' },
  { name: 'Category', href: '/' },

 
]



export default function NavBar() {
 
  return (
    <>
    
    </>
  )
}