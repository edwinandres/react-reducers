import React from 'react'

const ProductItem = ({data, addToCart}) => {
    let {id, name, price} = data;

    console.log("hla")
    return (
        <div style={{border:"thin solid gray"}}>
            <h4>{name}</h4>
            <h5>{price}</h5>
            <button type="button" onClick={()=>addToCart(id)} value='Agregar'>Add</button>
        </div>
    )
}

export default ProductItem
