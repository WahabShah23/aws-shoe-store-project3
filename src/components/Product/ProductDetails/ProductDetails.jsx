import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';


const shoes = require('../../../_models/shoes');


export default function ProductDetails() {
    const { slug } = useParams();


    const shoe = shoes.shoes[slug];

    if(!shoe) {
        return <h2>Not Found...</h2>
    }

    const { name, img } = shoe;

    return (
        <div className={styles.product_detail}>
            <h2>{ name }</h2>
            <img src={img} alt={name} />

        </div>
    )
}
