import React from 'react'
import BannerWithProductImages from '../components/BannerWithProductImages'
import ProductMiniCard from '../components/ProductMiniCard'
import selfHeatingCableImage from '/static/self-heating-cable-stock-image.webp'
import spliceStockImage from '/static/splice-stock-image.jpg'
import accessoriesStockImage from '/static/accessories-stock-image.jpg'
import xhuImage from '/static/XHU.png'
import xhkImage from '/static/XHK.png'
import pjb100mImage from '/static/PJB100M.png'
import fiberglassTapeImage from '/static/fiberglass-tape-stock-image.avif'
import pjb300Image from '/static/PJB300.png'
import pjb300LImage from '/static/PJB300-L.png'
import psSSImage from '/static/PS-SS.jpg'
import aluminumFoilImage from '/static/aluminum-foil-stock-image.jpg'

export default function HomePage() {
  return (
    <div className="py-8">
      <BannerWithProductImages 
        title="Industrial Self-Regulating Heating Cable"
        description="Our high-performance industrial self-regulating heating cables provide a safe and efficient heating solution for various industrial environments. These cables automatically adjust their heat output in response to ambient temperature changes, ensuring energy savings and preventing overheating."
        imageUrl={selfHeatingCableImage}
      />

      <BannerWithProductImages 
        title="System Components"
        description="Xarex offers a comprehensive range of system components designed for power connections, splice or tee connections, and end terminations. These components ensure the proper functioning of our products and compliance with warranty and approval requirements."
        imageUrl={spliceStockImage}
      />

      <BannerWithProductImages 
        title="Installation Accessories"
        description="Xarex offers a wide range of installation accessories to ensure the efficient and secure installation of our industrial self-regulating heating cables. Our comprehensive selection allows you to conveniently purchase everything you need from one place."
        imageUrl={accessoriesStockImage}
      />

      <h2 className="text-3xl font-bold mb-8 mt-16 text-center"> Best Sellers </h2>

      <div className="flex gap-4 mb-8">
        <ProductMiniCard
          category="Self-Regulating Heating Cable"
          model="XHU"
          details="Up to 200˚C"
          imageUrl={xhuImage}
        />
        <ProductMiniCard
          category="Self-Regulating Heating Cable"
          model="XHK"
          details="Up to 250˚C"
          imageUrl={xhkImage}
        />
        <ProductMiniCard
          category="System Components"
          model="PJB100M"
          details="Power Connection Kit with Mutiple Entries"
          imageUrl={pjb100mImage}
        />
        <ProductMiniCard
          category="Installation Accessories"
          model="FT-H98"
          details="Fiberglass Fixing Tape For High temperature"
          imageUrl={fiberglassTapeImage}
        />
      </div>

      <h2 className="text-3xl font-bold mb-8 mt-16 text-center"> New Products </h2>

      <div className="flex gap-4 mb-8">
        <ProductMiniCard
          category="System Components"
          model="PJB300"
          details="End Seal and In-line Splice"
          imageUrl={pjb300Image}
        />
        <ProductMiniCard
          category="System Components"
          model="PJB300-L"
          details="Lighted End Seal"
          imageUrl={pjb300LImage}
        />
        <ProductMiniCard
          category="Installation Accessories"
          model="PS-SS"
          details="SS304 Pipe Strap"
          imageUrl={psSSImage}
        />
        <ProductMiniCard
          category="Installation Accessories"
          model="AT-L164"
          details="Aluminum Foil Fixing Tape"
          imageUrl={aluminumFoilImage}
        />
      </div>
    </div>
  )
} 