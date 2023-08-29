import React from 'react';
import DataModeling_service from '@/_Services/DataModeling_service.js'
import AllData from '@/Assets/Api/db.json'
import '@/Pages/Acceuil/home.css'
import { useParams } from 'react-router-dom';
import Activity from '@/Components/Activity.js';
import AverageSessions from '@/Components/AverageSessions.js';
import Intensity from '@/Components/Intensity.js';
import Score from '@/Components/Score.js';
import Energy from '@/Components/Energy.js';

const Home = () => {
    let { id } = useParams()
    // console.log(id);
    const userData = AllData
    const userModel = new DataModeling_service(userData)

    const user = userModel.getUserMainDataById(id)
    const userActivity = userModel.getUserActivityById(id)
    const averageSessions = userModel.getUserAverageSessionsById(id)
    // console.log(averageSessions)
    // const userSession = userModel.getUserActivityById(id)
    const userPerf = userModel.getUserPerformanceById(id)
    console.log(user);
    // console.log(user.mainData[0]);
    // console.log(userActivity);
    // console.log(userSession);
    // console.log(userPerf);
    return (
        <div className='Home'>
            <header>
                <h1>Bonjour <span className='userName'>{user.mainData[0].userFirstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <section className='AllDataProfil'>
                <section className='Activity'>
                    <Activity sessions={userActivity} />
                    <article>
                        <AverageSessions averageSessions={averageSessions.sessions} />
                        <Intensity kind={userPerf} />
                        <Score user={user} />
                    </article>
                </section>
                <aside className='Performance'>
                    <Energy Energy={user.energyData} type="Calories" />
                </aside>
            </section>

        </div>
    );
};

export default Home;