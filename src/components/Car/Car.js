import React from 'react';
import { useState } from 'react';
import ReactModal from 'react-modal';

import './car.css'

const Car = (props) => {
    const {car, car_color, car_model, car_model_year, car_vin, price} = props.car;
    const [modalIsOpen,setModalIsOpen] = useState(false);

    
    return (
        <div className="car">
            <h2>{car}</h2>
            <p>Price: {price}</p>
            <button onClick={()=>setModalIsOpen(true)}>See Details</button>
            <ReactModal 
            isOpen={modalIsOpen}
            shouldCloseOnOverlayClick={false}
            onRequestClose={()=>setModalIsOpen(false)}
            >
                <div className="modal-container">
                    <span className='close' onClick={()=>setModalIsOpen(false)}>&times;</span>
                    <h2>Car Details:</h2>
                    <p>{car}</p>
                    <p>Model: {car_model}</p>
                    <p>Price: {price}</p>
                    <p>Color: {car_color}</p>
                    <p>First Market: {car_model_year}</p>
                    <p>VIN: {car_vin}</p>
                </div>
            </ReactModal>
        </div>
    );
};

export default Car;