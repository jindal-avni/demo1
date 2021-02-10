import React from 'react';
import {Product} from './Product';

export const ProductList = props => (
    <div>
        {props.productslist.map((product)=>{
                //console.log(props.productslist);
                return <Product name={product.pname} price={product.price}/>                        
              })}
    </div>
);
