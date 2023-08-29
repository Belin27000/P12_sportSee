import React, { useState } from 'react';

const Energy = ({ Energy, type }) => {
    // console.log(Energy, type);
    // const energyList = Energy
    // console.log(energyList);
    // console.log(energyList[0]);
    const [energyType, setEnergyType] = useState({})
    // console.log(type);
    if (type === 'lipid') {
        setEnergyType(type)
        // console.log(energyType)

    } else {
        console.log('Pas bien');
    }
    return (
        <div className='Energy'>

        </div>
    );
};

export default Energy;