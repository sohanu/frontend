import React, { useEffect, useState } from 'react';
import './home.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
const HomePage = () => {
    const [product, setproduct] = useState([]);

    useEffect(() => {
        axios.get(
            `http://localhost:5001/api/items`
        ).then(response => response)
            .then(response => {
                setproduct(response.data.results);

            })
    }, [product])


    return (
        <div className="home">
            {product.map((items) => {
                return(
               <Link to={`product/${items.name}`} className="home-imgbox"> <div >
                    <img src={items.image}></img>
                    <p>{items.name}</p>
                </div></Link>)
            })}

        </div>
    )
}
export default HomePage;