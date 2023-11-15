import { useState } from "react"


export const useCounter = (inputValue = 10) => {

    const [counter, setcounter] = useState(inputValue);

    const increment = (value  ) => setcounter(counter + value);
    const decrement = (value ) => counter >=1 && setcounter(counter - value);
    const reset = () => setcounter(inputValue);

    return {
        counter,
        increment,
        decrement,      
        reset
    };

}
