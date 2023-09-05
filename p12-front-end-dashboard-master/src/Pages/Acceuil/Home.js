import React from 'react';
import DataModeling_service from '@/_Services/DataModeling_service'
import AllData from '@/Assets/Api/db.json'
import '@/Pages/Acceuil/home.css'
import { useParams } from 'react-router-dom';
import Activity from '@/Components/Charts/BarChart/Activity';
import AverageSessions from '@/Components/Charts/LineChart/AverageSessions';
import Intensity from '@/Components/Charts/RadarChart/Intensity';
import Score from '@/Components/Charts/RadialChart/Score';
import Energy from '@/Components/Energy';

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
                <h1>Bonjour <span className='userName'>{user.mainData[0].userFirstName}</span></h1>
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
                    <Energy Energy={user.energyData} type="calories" />
                    <Energy Energy={user.energyData} type="proteines" />
                    <Energy Energy={user.energyData} type="glucides" />
                    <Energy Energy={user.energyData} type="lipides" />
                </aside>
            </section>

        </div>
    );
};

export default Home;