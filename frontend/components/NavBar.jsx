import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const linkStyles = 'px-4 h-full flex items-center hover:underline'

  return (
    <div>
      <div className="mt-10 flex items-center">
        <h1 className="text-3xl h-full flex items-center"> World One </h1>
      </div>
      <nav className="bg-white border-b border-gray-600 h-14 flex justify-end">
        <NavLink to="/" className={linkStyles}>
          Home
        </NavLink>
        <NavLink to="/about" className={linkStyles}>
          About
        </NavLink>
      </nav>
    </div>
  )
} 