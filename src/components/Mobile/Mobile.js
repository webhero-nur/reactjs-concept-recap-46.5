import React, { useState } from 'react';
import './Mobile.css'

const Mobile = () => {

    const [batteryLevel, setBatteryLevel] = useState(100);

    const batteryDown = () => {
        if (batteryLevel > 0) {
            const newLevel = batteryLevel - 10;
            setBatteryLevel(newLevel);
        }
        else {
            alert('battery dead. put it on charge')
        }
    }

    return (
        <div className='mobile'>
            <h2>Battery Level: {batteryLevel}</h2>
            <button onClick={batteryDown}>battery down</button>
        </div>
    );
};

export default Mobile;