import React from 'react';
import useCounter from '../hooks/useCounter';
 
const CounterWithCustomHook = props => {

    const {state:value, decrement, increment, reset } = useCounter(2)

    return (
        <>
           <h1> Counter with Hook : {value}</h1> 
           <hr/>
           <button onClick={ increment } className="bg-green-400"> +1  SUBIR </button>    
           <button onClick={ decrement } className="bg-red-400"> -1  bajaja</button>    
           <button onClick={ reset } className="bg-blue-400">  RESET </button>    
        </>
    );
};

 

export default CounterWithCustomHook;