import React, { useEffect, useState } from 'react';
// import calories from '@/Assets/calories-icon.png'
// import protein from '@/Assets/protein-icon.png'
// import glucides from '@/Assets/carbs-icon.png'
// import lipides from '@/Assets/fat-icon.png'
import '@/Components/energy.css'


const Energy = ({ Energy }) => {
    return (
        <div className='Energy'>
            {
                Energy.map((keyData) => {
                    return (
                        <div className='nutriment' key={keyData.name}>
                            <div className='nutriment-logo'>
                                <img src={keyData.imageData} alt='nutriment-Logo' />
                            </div>
                            <div className='energyInfos'>
                                <h2>{keyData.value}</h2>
                                <p>{keyData.name}</p>
                            </div>

                        </div>


                    )
                })

            }
        </div>

    );
};

export default Energy;