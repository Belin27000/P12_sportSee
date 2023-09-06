import React, { useEffect, useState } from 'react';
import "@/Components/Switch/switch.css"

const Switch = ({ isToggled, onToggle }) => {

    const [loadDataType, setLoadDataType] = useState('')

    useEffect(() => {
        if (isToggled) {
            setLoadDataType("Mock")
        } else {
            setLoadDataType("API")
        }

    }, [isToggled])
    return (
        <div className='dataChoice'>
            <p className={isToggled ? 'colorText' : ''}>{loadDataType}</p>
            <label className='switch'>
                <input type='checkbox' checked={isToggled} onChange={onToggle} />
                <span className='slider rounded' />
            </label>
        </div>

    );
};

export default Switch;