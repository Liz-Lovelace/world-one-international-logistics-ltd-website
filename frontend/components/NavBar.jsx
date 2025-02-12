import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const linkStyles = 'px-4 h-full flex items-center hover:underline'
  const dropdownTriggerStyles = 'px-4 h-full flex items-center cursor-pointer relative group'
  const dropdownMenuStyles = 'absolute top-full left-0 bg-white border border-gray-200 shadow-lg py-2 w-48 hidden group-hover:block'
  const dropdownItemStyles = 'px-4 py-2 hover:bg-gray-100 block w-full text-left'

  return (
    <div>
      <div className="mt-10 flex items-center">
        <h1 className="text-3xl h-full flex items-center"> World One </h1>
      </div>
      <nav className="bg-white border-b border-gray-600 h-14 flex justify-end">
        <NavLink to="/" className={linkStyles}>
          Home
        </NavLink>

        <div className={dropdownTriggerStyles}>
          Cable
          <div className={dropdownMenuStyles}>
            <NavLink to="/products/XHU" className={dropdownItemStyles}>
              XHU
            </NavLink>
            <NavLink to="/products/XHK" className={dropdownItemStyles}>
              XHK
            </NavLink>
          </div>
        </div>

        <div className={dropdownTriggerStyles}>
          Kits
          <div className={dropdownMenuStyles}>
            <NavLink to="/products/PJB300" className={dropdownItemStyles}>
              PJB300
            </NavLink>
            <NavLink to="/products/PJB300-L" className={dropdownItemStyles}>
              PJB300-L
            </NavLink>
            <NavLink to="/products/PJB100M" className={dropdownItemStyles}>
              PJB100M
            </NavLink>
          </div>
        </div>

        <div className={dropdownTriggerStyles}>
          Accessories
          <div className={dropdownMenuStyles}>
            <NavLink to="/products/FT-H98" className={dropdownItemStyles}>
              FT-H98
            </NavLink>
            <NavLink to="/products/PS-SS" className={dropdownItemStyles}>
              PS-SS
            </NavLink>
            <NavLink to="/products/AT-L164" className={dropdownItemStyles}>
              AT-L164
            </NavLink>
          </div>
        </div>

        <NavLink to="/about" className={linkStyles}>
          About
        </NavLink>

        <NavLink to="/quote" className={linkStyles}>
          Get a free Quote
        </NavLink>
      </nav>
    </div>
  )
} 