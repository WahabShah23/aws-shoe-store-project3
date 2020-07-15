import React from 'react';
import { Link } from 'react-router-dom';
// import shoes  from '../../../_models/shoes';
import styles from './ProductsList.module.css';

const shoes = require('../../../_models/shoes');

export default function ProductsList() {
    return (
        <ul className={styles.ul}>
            {  console.log(shoes) }
            { Object.entries(shoes.shoes).map(([slug, {name, img}]) => (
                <li key={slug}>
                    <Link to={ `/products/${slug}` }>
                        <h2>{name}</h2>
                        <img src={img} alt={name}/>
                    </Link>
                </li>
            ) ) }
        </ul>
    )
}
