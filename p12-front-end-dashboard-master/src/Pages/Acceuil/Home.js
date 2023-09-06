import React, { useEffect, useState } from 'react';
import DataModeling_service from '@/_Services/Mock_Data_service.js'
import AllData from '@/Assets/Data/db.json'
import '@/Pages/Acceuil/home.css'
import { useParams } from 'react-router-dom';
import { Activity, AverageSessions, Score, Energy, Intensity } from '@/Pages/index.js';
import Switch from '../../Components/Switch/Switch.js';
import ApiDataService from '@/_Services/Api_Data_service.js'



const Home = () => {
    let { id } = useParams()
    const [userApi, setUserApi] = useState(null)
    const [perfUserApi, setPerfUserApi] = useState(null)
    const [isToggled, setIsToggled] = useState(false)
    const [loading, setLoading] = useState(true)


    const userData = AllData
    const userModel = new DataModeling_service(userData)
    const user = userModel.getUserMainDataById(id)
    const userActivity = userModel.getUserActivityById(id)
    const averageSessions = userModel.getUserAverageSessionsById(id)
    const userPerf = userModel.getUserPerformanceById(id)

    useEffect(() => {
        const fetchmainData = async () => {
            try {
                const response = await ApiDataService.GetMaindata(id)
                // console.log(response);
                setUserApi(response)

            } catch (error) {
                console.error("Une erreur s'est produite :", error)
            }
        }
        fetchmainData()

    }, [])

    useEffect(() => {
        const fetchPerfData = async () => {
            try {
                const response = await ApiDataService.GetPerfData(id)
                setPerfUserApi(response)
                setLoading(false)
            } catch (error) {
                console.error("Une erreur s'est produite :", error)
            }
        }
        fetchPerfData()
    }, [])


    if (loading) return (
        <h3>Chargement des données en cours</h3>
    )
    console.log(perfUserApi);
    console.log(userPerf);
    return (
        <div className='Home'>
            <header>
                <div className='NameProfil'>
                    <h1>Bonjour <span className='userName'>{user.firstName}</span></h1>
                    <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} />
                </div>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>

            <section className='AllDataProfil'>
                <section className='Activity'>
                    <Activity sessions={userActivity} />
                    <article>
                        <AverageSessions averageSessions={averageSessions} />
                        <Intensity kind={isToggled ? userPerf : perfUserApi} />
                        <Score user={user} />
                    </article>
                </section>
                <aside className='Performance'>
                    <Energy Energy={isToggled ? user.keyData : userApi.keyData} />
                </aside>
            </section>

        </div>
    );
};

export default Home;