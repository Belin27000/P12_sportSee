import React from 'react';
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