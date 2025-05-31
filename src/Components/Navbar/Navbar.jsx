import React, { useState } from 'react'
import Link from '../Link/Link'
import { FaBeer } from 'react-icons/fa'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [open,SetOpen] = useState(false)

    const routes = [
        {id:1, path: '/', name: 'Home'},
        {id:2, path: '/about', name: 'About'},
        {id:3, path: '/services', name: 'Services'},
        {id:4, path: '/contact', name: 'Contact'},
        {id:5, path: '*', name: 'NotFound'},
    ]
  return (
    <nav className='bg-green-300 p-6'>
     <div className='md:hidden text-2xl ' onClick={()=> SetOpen(!open)}>
        {
            open === true ? <AiOutlineClose/> : <AiOutlineMenu className=''></AiOutlineMenu>
        }
       </div>

  <ul className={`md:flex duration-1000 absolute md:static
        ${open ? 'top-16' : '-top-60 '}
    bg-green-300 px-6 `}>
  {
        routes.map(route => <Link key={route.id} route={route}></Link> )
      }
  </ul>
   
    </nav>
  )
}

export default Navbar