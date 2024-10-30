import React, { useContext } from 'react'
import './ItemsOfCart.css'
import remove_icon from '../Assests/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ItemsOfCart = () => {
    const {all_product,cartItem,removeFromCart,getTotalAmount} = useContext(ShopContext)
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItem[e.id]>0){
                return <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className="carticon-product-icon" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitems-quantity">{cartItem[e.id]}</button>
                    <p>${e.new_price*cartItem[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
                
            </div>
            }
            return null
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <div className="cartitems-total-item">
                        <p>Total</p>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <button>Checkout</button>
                </div>
                
            </div>
            <div className="cartitems-promocode">
                    <p>If you have a promocode enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ItemsOfCart