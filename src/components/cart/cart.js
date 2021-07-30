import React, { useEffect, useState } from 'react';
import './cart.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { cartlist, clearall, removeproductcart } from '../redux/action/cartaction';
import { Link } from 'react-router-dom';


const CartPage = () => {

    const dispatch = useDispatch();

    const cartList = useSelector((state) => state.addCart);

    const { cart } = cartList;
    useEffect(() => {
        dispatch(cartlist());
    }, [dispatch])


    return (
        <div className="product">
            {cart.map((items) => {
                return (
                    <div className="product-box">
                        <div className="product-des">
                            <div>
                                <p>
                                    {items.name}
                                </p>
                            </div>

                            <div>
                                {items.description}
                            </div>
                            <div style={{ fontWeight: "1000" }}>

                                Price: Rs.{items.price}
                            </div>
                            <div>
                                <button onClick={() => {
                                    dispatch(removeproductcart(items.name));
                                }}>
                                    Remove
                                </button>
                            </div>
                        </div>
                        <div className="product-img">
                            <img src={items.image} />
                        </div>
                    </div>
                )
            })}
           <Link to="/"> <button className="order" onClick={()=>{
                dispatch(clearall())}
            }>
                Place Order
            </button></Link>
        </div>
    )
}
export default CartPage;