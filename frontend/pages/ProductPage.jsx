import React from 'react'
import { useParams } from 'react-router-dom'
// Import all product images
import xhuImage from '/static/XHU.png'
import xhkImage from '/static/XHK.png'
import pjb100mImage from '/static/PJB100M.png'
import fiberglassTapeImage from '/static/fiberglass-tape-stock-image.avif'
import pjb300Image from '/static/PJB300.png'
import pjb300LImage from '/static/PJB300-L.png'
import psSSImage from '/static/PS-SS.jpg'
import aluminumFoilImage from '/static/aluminum-foil-stock-image.jpg'
import xarexLogo from '/static/xarex_logo.png'
import xhuSpecPdf from '/static/XHU DATA SHEET_241209.pdf'
import xhkSpecPdf from '/static/XHK DATA SHEET_241209.pdf'

const productDetails = {
  'XHU': {
    image: xhuImage,
    description: [
      "The XHU Self-Regulating Heating Cable is designed for freeze protection and process temperature maintenance of metal and non-metal pipes, vessels, and equipment.",
      
      "The unique PTC feature of XHU self-regulating core elements adjusts its heat output in response to the surrounding temperature along the entire circuit, delivering more heat where and when required. This self-regulating feature also serves to prevent overheating, even in cases where XHU cables overlap. Another benefit of the cable is the ability to cut to length in the field, completed with Xarex system connection kits for quick and convenient installations.",
      
      "XHU heating cable system is certified for ordinary and hazardous areas with maximum maintain temperature of 250°F (120°C) and intermittent exposure temperature of 392°F (200°C). Use of PJB connection kits for XHU installation is required to comply with system approval, ensuring safe operation and reliable thermal performance."
    ],
    specPdf: xhuSpecPdf
  },
  'XHK': {
    image: xhkImage,
    description: [
      "The XHK Self-Regulating Heating Cable is designed for freeze protection and high process temperature maintenance of metal and non-metal pipes, vessels, and equipment where steam cleaning is required.",
      
      "The unique PTC feature of XHK self-regulating core elements adjusts its heat output in response to the surrounding temperature along the entire circuit, delivering more heat where and when required. This self-regulating feature also serves to prevent overheating, even in cases where XHK cables overlap. Another benefit of the cable is the ability to cut to length in the field, completed with Xarex system connection kits for quick and convenient installations.",
      
      "XHK heating cable system is certified for ordinary and hazardous areas with maximum maintain temperature of 300°F(150°C) and intermittent exposure temperature of 482°F(250°C). Use of PJB connection kits for XHK installation is required to comply with system approval, ensuring safe operation and reliable thermal performance."
    ],
    specPdf: xhkSpecPdf
  },
  'PJB100M': {
    image: pjb100mImage
  },
  'FT-H98': {
    image: fiberglassTapeImage
  },
  'PJB300': {
    image: pjb300Image
  },
  'PJB300-L': {
    image: pjb300LImage
  },
  'PS-SS': {
    image: psSSImage
  },
  'AT-L164': {
    image: aluminumFoilImage
  }
}

export default function ProductPage() {
  const { modelName } = useParams()
  const product = productDetails[modelName]
  
  return (
    <div className="py-8">
      <div className="flex gap-8">
        <div className="flex-1">
          <img 
            src={product.image} 
            alt={modelName}
            className="w-full h-[26rem] object-contain border-2 border-brand"
          />
        </div>
        <div className="flex-1 pt-8">
          <img 
            src={xarexLogo} 
            alt="Xarex Logo" 
            className="h-8 object-contain mb-8"
          />
          <h1 className="text-4xl font-bold mb-6">{modelName}</h1>
          {product.description?.map((paragraph, index) => (
            <p key={index} className="text-lg text-gray-900 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      {product.specPdf && (
        <div className="flex gap-4 mt-8">
          <a 
            href={product.specPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand text-white px-6 py-2 rounded-md hover:underline transition-colors"
          >
            Specification
          </a>
          <a 
            href={product.specPdf}
            download
            className="bg-brand text-white px-6 py-2 rounded-md hover:underline transition-colors"
          >
            Download
          </a>
        </div>
      )}
    </div>
  )
} 