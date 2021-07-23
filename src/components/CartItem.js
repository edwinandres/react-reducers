import React from 'react'

const CartItem = ({data, delFromCart}) => {

    let {id, name, price, quantity } = data;

    return (
        <div>
            <h4>{name}</h4>
            <h5>{price} x {quantity} = ${price * quantity}</h5>
            <button type="">Eliminar</button>
        </div>
    )
}

export default CartItem
