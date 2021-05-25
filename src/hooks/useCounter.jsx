import {useState} from 'react';

const useCounter = (initState = 10 ) => {
    
     const [state, setState] = useState(initState)

     const decrement = () => {setState(state - 1 )}
     const increment = () => {setState(state + 1 )}
     const reset = () => { setState(initState) }

     return {
         decrement, 
         increment, 
         state,
         reset
     }
 };

export default useCounter;