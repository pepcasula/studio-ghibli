import React, { useState, useEffect } from 'react';
import GhibliList from '../components/GhibliList';


const GhibliContainer = () => {

    const [ghiblis, setGhiblis] = useState([]);

    useEffect(() => {
        getGhiblis();
    }, []);
    
    const getGhiblis = function() {
        const request = fetch('https://ghibliapi.herokuapp.com/films')
        .then (response => response.json())
        .then(data => setGhiblis(data))
    };

    return (

        <div>
            <GhibliList ghiblis={ghiblis} /> 
        </div>
    );

};

export default GhibliContainer;