import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BreadCrum from '../components/BreadCrumbs/BreadCrum'
import ProductDisplay from '../components/ProductDisplay/ProductDisplay'
import Description from '../components/DescriptionBox/Description'
import Relatedproducts from '../components/RelatedProducts/Relatedproducts'

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id=== Number(productId))
  
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <Relatedproducts/>
    </div>
  )
}

export default Product