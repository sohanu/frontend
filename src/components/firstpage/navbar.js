import React, { useEffect, useState } from 'react';
import './navbar.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cartlist } from '../redux/action/cartaction';

const FirstPage = (props) => {
    
const dispatch=useDispatch();
const cartList = useSelector((state) => state.addCart);
const { cart } = cartList;

    useEffect(() => {
        dispatch(cartlist());

    }, [dispatch])


    return (
        <div className="navbar-box">
            <div className="navbar-head">
                <div className="navbar-head1">food ordering portal</div>
                <div className="navbar-cart">
                    <Link to="/cart"><span><i class="fa fa-shopping-cart"></i></span></Link>
                    <span>{cart.length}</span>
                </div>
            </div>

        </div>
    )
}
export default FirstPage;