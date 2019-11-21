import React, { Component } from 'react';


function ShopProduct (props) {
  return (
    <div style={{width: 200, border: 'solid'}}>
      <p>Name: {props.name}</p>
      <p>Category: {props.category}</p>
    </div>
  )
}

export default ShopProduct;

