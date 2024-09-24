import React, { useContext } from 'react'
import Title from './Title'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import QuantityBtn from './QuantityBtn'

export default function Checkout() {
    let { cartItems } = useContext(CartContext)
    let cartEmpty = cartItems.length <= 0 ? true : false
    let grandTotal = cartItems.reduce((total, product) => {
        return total += product.price * product.quantity
    }, 0)

    const freeShippingPrice = 99;
    return (
        <div>
            <Title mainTitle="shopping cart"></Title>
            {
                cartEmpty &&
                <div>
                    <p>It is empty in shopping cart.</p>
                    <Link to="/">Go to product list</Link>
                </div>
            }

            {
                !cartEmpty &&
                <div>
                    <div id="cartSection">
                        {
                            cartItems.map(product => (
                                <div key={product.id}>
                                    {product.name}
                                    {product.description}
                                    {product.price}
                                    {product.quantity}
                                    <QuantityBtn productInfo={product}></QuantityBtn>
                                </div>
                            ))
                        }
                    </div>
                    <div id="checkoutSection">
                        <div>Grand Total</div>
                        <div>${grandTotal}</div>

                        {
                            grandTotal >= freeShippingPrice ?
                                <div>Free Shipping</div> :
                                <div>Free Shipping On Orders Over ${freeShippingPrice} <br />${freeShippingPrice - grandTotal} left</div>
                        }
                    </div>
                </div>}
        </div>
    )
}
