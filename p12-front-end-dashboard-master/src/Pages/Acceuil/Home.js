import React from 'react';
import DataModeling_service from '@/_Services/DataModeling_service.js'
import AllData from '@/Assets/Api/db.json'
const Home = () => {
    const userData = { AllData }
    const userModel = new DataModeling_service(AllData)

    const user = userModel.getUserMainDataById(18)
    const userPerf = userModel.getUserPerformanceById(18)
    console.log(userPerf);
    return (
        <div className='Home'>
            <h1>Bonjour {user.userInfos.firstName}</h1>
        </div>
    );
};

export default Home;