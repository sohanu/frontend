import React, { useEffect, useState } from 'react';
import './product.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addproductcart } from '../redux/action/cartaction';
const ProductPage = () => {
    const [product, setproduct] = useState([]);
    let { name } = useParams();

    const dispatch=useDispatch();
    useEffect(() => {
        axios.get(
            `http://localhost:5001/api/items/${name}`
        ).then(response => response)
            .then(response => {
                setproduct(response.data.subItems);

            })
    }, [product])


    return (
        <div className="product">
            {product.map((items) => {
                return (
                    <div className="product-box">
                        <div className="product-des">
                            <div>
                                <p>
                                    {items.name}
                                </p>
                            </div>
                            <div>
                                
                            ₹ {items.price}
                            </div>
                            <div>
                                {items.description}
                            </div>
                            <div>
                                <button onClick={()=>{
                                    dispatch(addproductcart(items))
                                }}>
                                    Order Now
                                </button>
                            </div>
                        </div>
                        <div className="product-img">
                            <img src={items.image} />
                        </div>
                    </div>
                )
            })}

        </div>
    )
}
export default ProductPage;