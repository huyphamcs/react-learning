// import { useState } from "react";
interface ButtonName{
    name: string,
    onClick?: ()=>void
}

const Button = (props:ButtonName) => {
    // const [isHover, setIsHover] = useState(false);
    // const [count, setCount] = useState(0);
    return (
        <button onClick={props.onClick} style={{
            height: 200,
            width: 400,
        }}>
            <p style={{fontSize: 50}}>{props.name}</p>
        </button>
    );
}

export default Button;