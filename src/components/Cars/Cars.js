import React, { useEffect, useState } from 'react';
import Car from '../Car/Car';
import './cars.css'

const Cars = () => {
    const [cars, setCars] =useState([]);
    const [displayCar,setdisplayCar] = useState([]);
    useEffect(()=>{
        fetch('https://myfakeapi.com/api/cars/')
            .then(res=>res.json())
            .then(data=>{
                setCars(data.cars);
                setdisplayCar(data.cars)
            })
    },[]);
    
    const handleSearch = event => {
        const searchedText = event.target.value;
        const searchedCar = cars.filter(car => car.car.toLowerCase().includes(searchedText.toLowerCase()));
        setdisplayCar(searchedCar);
    }

    return (
        <>
            <input onChange={handleSearch} className='input-field' type="text" placeholder='Search car'/>
            <h1>Our Branded Cars</h1>
            <div className="car-container">
                {
                    displayCar.map(car => <Car key={car.car_vin} car={car}></Car>)
                }
                
            </div>
        </>
    );
};

export default Cars;