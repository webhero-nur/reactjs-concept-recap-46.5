import React, { useEffect, useState } from 'react';
import './Mobile.css'

const Mobile = () => {

    const [batteryLevel, setBatteryLevel] = useState(100);

    const batteryDown = () => {
        const newLevel = batteryLevel - 10;
        setBatteryLevel(newLevel);
    }

    return (
        <div className='mobile'>
            <h2>Battery Level: {batteryLevel}</h2>
            <button onClick={batteryDown}>battery down</button>
        </div>
    );
};

export default Mobile;