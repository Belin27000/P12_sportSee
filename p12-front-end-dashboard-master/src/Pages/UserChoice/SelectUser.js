import React, { useEffect, useState } from 'react';
import AllData from '@/Assets/Data/db.json'
import { useNavigate } from 'react-router-dom';
import '@/Pages/UserChoice/selectUser.css'

const SelectUser = () => {
    const userData = AllData.USER_MAIN_DATA
    console.log(userData);

    let navigate = useNavigate()

    const [userChoice, setUserChoice] = useState('');

    const handleUserChoice = () => {
        console.log(userChoice);
        navigate('/home/' + userChoice)
    }
    const handleSelectedChange = (event) => {

        setUserChoice(event.target.value)
    }


    return (
        <div className='SelectUser'>
            <h2 className='SelectTitle' >Merci de selectionner un utilisateur</h2>
            <select className='SelectField' onChange={handleSelectedChange} value={userChoice}>
                <option value=''>Veuillez choisir un utilisateur</option>
                {
                    userData.map((value) => {
                        return (
                            <option key={value.id} value={value.id} id={value.id}>{value.userInfos.firstName} {value.userInfos.lastName}</option>
                        )
                    })
                }
            </select>
            <button className='SelectButton' type='button' onClick={handleUserChoice} value={userChoice}>Valider</button>
        </div>
    );
};

export default SelectUser;