import React, { useReducer, useState } from 'react'

const initialState = {contador:0}

const init = (initialState) => {
    return{
        contador: initialState.contador + 100
    }
}

const TYPES = {
    INCREMENT:"INCREMENT",
    INCREMENT_5:"INCREMENT_5",
    DECREMENT:"DECREMENT",
    DECREMENT_5:"DECREMENT_5",
    RESET:"RESET"
}

function reducer(state, action){
    switch (action.type) {
        case TYPES.INCREMENT:
            return{contador: state.contador + 1};
        case TYPES.DECREMENT:
            return{contador: state.contador - 1}  
        case TYPES.INCREMENT_5:
            return{contador: state.contador + action.payload};
        case TYPES.DECREMENT_5:
            return{contador: state.contador - action.payload}; 
        case TYPES.RESET:
            return initialState;      
        default:
            return state;
    }
    return state;
}

const Contador = () => {

    //const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, initialState, init)
     
    //const sumar = () => setCount(count+1)
    const sumar = () => dispatch({type: TYPES.INCREMENT})

    const sumar5 = () => dispatch({type: TYPES.INCREMENT_5 , payload: 5})

    //const restar = () => setCount(count-1)
    const restar = () => dispatch({type:TYPES.DECREMENT})
    const restar5 = () => dispatch({type: TYPES.DECREMENT_5, payload: 5})
    const reset = () => dispatch({type: TYPES.RESET})

    return (
        <div>
            <h1>Contador</h1>
            <nav>
                <button type="button" onClick={sumar5}>+ 5</button>
                <button onClick={sumar} type="button">+</button>
                <button type="button" onClick={reset}>0</button>
                <button onClick={restar} type="button">-</button>
                <button type="button" onClick={restar5}>- 5</button>
            </nav>
            <h3>{state.contador}</h3>
        </div>
    )
}

export default Contador
