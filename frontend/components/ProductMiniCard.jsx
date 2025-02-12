import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductMiniCard({ category, model, details, imageUrl }) {
  return (
    <div className="flex-1 border-2 border-brand mx-2 flex flex-col items-center h-[28rem]">
      <div className="w-full p-4">
        <img 
          src={imageUrl} 
          alt={model}
          className="w-full h-44 object-contain border-2 border-brand"
        />
      </div>
      <div className="p-4 text-center flex flex-col flex-1 justify-between w-full">
        <div className="flex flex-col items-center">
          <p className="text-gray-600 mb-2">{category}</p>
          <p className="text-xl font-bold mb-2">{model}</p>
          <p className="font-bold">{details}</p>
        </div>
        <Link 
          to={`/products/${model}`} 
          className="bg-brand text-white px-6 py-2 rounded-md hover:underline transition-colors"
        >
          VIEW PRODUCT
        </Link>
      </div>
    </div>
  )
} 