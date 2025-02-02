import React from 'react'

export default function BannerWithProductImages({ title, description, imageUrl }) {
  return (
    <div className="border-2 border-brand mb-8">
      <div className="flex p-8">
        <div className="flex-1 flex flex-col justify-center text-center pr-8">
          <p className="text-2xl font-bold mb-4">{title}</p>
          <p className="text-gray-700">{description}</p>
        </div>
        <div className="flex-1">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-[30rem] object-cover border-2 border-brand"
          />
        </div>
      </div>
    </div>
  )
} 