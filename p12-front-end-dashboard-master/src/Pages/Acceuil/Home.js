import React from 'react';
import DataModeling_service from '@/_Services/Mock_Data_service.js'
import AllData from '@/Assets/Data/db.json'
import '@/Pages/Acceuil/home.css'
import { useParams } from 'react-router-dom';
import { Activity, AverageSessions, Score, Energy, Intensity } from '@/Pages/index.js';

const Home = () => {
    let { id } = useParams()
    const userData = AllData
    const userModel = new DataModeling_service(userData)

    const user = userModel.getUserMainDataById(id)
    const userActivity = userModel.getUserActivityById(id)
    const averageSessions = userModel.getUserAverageSessionsById(id)
    const userPerf = userModel.getUserPerformanceById(id)
    return (
        <div className='Home'>
            <header>
                <h1>Bonjour <span className='userName'>{user.firstName}</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>
            <section className='AllDataProfil'>
                <section className='Activity'>
                    <Activity sessions={userActivity} />
                    <article>
                        <AverageSessions averageSessions={averageSessions} />
                        <Intensity kind={userPerf} />
                        <Score user={user} />
                    </article>
                </section>
                <aside className='Performance'>
                    <Energy Energy={user.keyData} />
                </aside>
            </section>

        </div>
    );
};

export default Home;