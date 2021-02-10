import React from 'react';

export const Product = props => (
    
    <div className="productCard">
        <h1>{props.name}</h1>
        <p>{props.price}</p>
    </div>
    
  );
  