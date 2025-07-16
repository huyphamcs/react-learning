import { useState } from "react";

const UpdateObjects = () => {
    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang"
    })
    interface Car{
        year: number,
        make: string,
        model: string
    }

    const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setCar(prevCar => ({
            ...prevCar,
            year: parseInt(e.target.value)
        }));
    };

    const handleMakeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCar(prevCar => ({
            ...prevCar,
            make: e.target.value
        }));
    }

    const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCar(prevCar => ({
            ...prevCar,
            model: e.target.value
        }));
    }

    const styles = {
        height: 200,
        fontSize: 45
    }

    return(
        <div>
            <h1>Year: {car.year}; Make: {car.make}; Model: {car.model}</h1>
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: 300
            }}>
                <input type="number" value={car.year} style={styles} onChange={handleYearChange}/>
                <input type="text" value={car.make} style={styles} onChange={handleMakeChange}/>
                <input type="text" value={car.model} style={styles} onChange={handleModelChange}/>
            
            </div>
            
        </div>
    );
};

export default UpdateObjects;