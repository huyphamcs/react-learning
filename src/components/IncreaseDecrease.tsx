import { useState } from "react";
import Button from "./Button";



const IncreaseDecrease = ()=>{
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count+1);
    };
    const handleDecrease = () => {
        setCount(count-1);
    };
    const handleReset = () => {
        setCount(0)
    }
    return(
        <div>
            <p
            style={{
                fontSize:100,
                fontWeight: '600'
            }}>{count}</p>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 1000
            }}>
                
                <Button name="Decrease" onClick={handleDecrease}></Button>
                <Button name="Reset" onClick={handleReset}></Button>
                <Button name="Increase" onClick={handleIncrease}></Button>
                {/* <Button name="Hello"></Button> */}

            </div>
        </div>
    );
}
export default IncreaseDecrease