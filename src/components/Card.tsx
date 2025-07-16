
import logo from "../assets/images/waiedu-logo-cropped.png";

const Card = () => {
    return(
        <div style={{
            backgroundColor: 'gray',
            padding:20,
            borderRadius: 30,
            boxShadow: '2px 2px 2px gray',
            display: "inline-block"
            
        }}>
            <img src={logo} alt="Waiedu logo" />
            <h2>WAIEDU</h2>
            <p>STEM kit for students</p>
        </div>
    );
};
export default Card;