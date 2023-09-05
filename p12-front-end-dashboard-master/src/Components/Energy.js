import React, { useEffect, useState } from 'react';
import calories from '@/Assets/calories-icon.png'
import protein from '@/Assets/protein-icon.png'
import glucides from '@/Assets/carbs-icon.png'
import lipides from '@/Assets/fat-icon.png'
import '@/Components/energy.css'


const Energy = ({ Energy, type }) => {

    const [energyType, setEnergyType] = useState({})
    const [energyValue, setEnergyValue] = useState("")


    useEffect(() => {
        if (type === 'calories') {
            setEnergyType(calories)
            setEnergyValue(Energy[0].calories + "Kcal")
        } else if (type === 'proteines') {
            setEnergyType(protein)
            setEnergyValue(Energy[0].protein + "g")

        } else if (type === 'glucides') {
            setEnergyType(glucides)
            setEnergyValue(Energy[0].carbohydrate + "g")
        } else if (type === 'lipides') {
            setEnergyType(lipides)
            setEnergyValue(Energy[0].lipid + "g")
        }
    }, [])

    return (
        <>
            <div className='Energy'>
                <img src={energyType} alt='SideBar Yoga logo' />
                <div className='energyInfos'>
                    <p className='evalue'>{energyValue}</p>
                    <p className='type'>{type}</p>
                </div>
            </div>
        </>
    );
};

export default Energy;