import React, { useEffect, useRef, useState } from 'react';
import DataModeling_service from '@/_Services/Mock_Data_service.js'
import '@/Pages/Acceuil/home.css'
import AllData from '@/Assets/Data/db.json'
import { useParams } from 'react-router-dom';
import { Activity, AverageSessions, Score, Energy, Intensity } from '@/Pages/index.js';
import Switch from '../../Components/Switch/Switch.js';
import ApiDataService from '@/_Services/Api_Data_service.js'



const Home = () => {
    let { id } = useParams()
    const flag = useRef(false)
    const [userApi, setUserApi] = useState(null)
    const [perfUserApi, setPerfUserApi] = useState(null)
    const [activityUserApi, setActivityUserApi] = useState(null)
    const [sessionUserApi, setSessionUserApi] = useState(null)
    const [isToggled, setIsToggled] = useState(false)
    const [loading, setLoading] = useState(true)
    const [apiError, setApiError] = useState(false);


    const userData = AllData
    const userModel = new DataModeling_service(userData)
    const user = userModel.getUserMainDataById(id)
    const userActivity = userModel.getUserActivityById(id)
    const averageSessions = userModel.getUserAverageSessionsById(id)
    const userPerf = userModel.getUserPerformanceById(id)

    useEffect(() => {
        if (flag.current === false) {
            fecthData();
        }
        return () => flag.current = true
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const fecthData = async () => {
        const mainDataResponse = await ApiDataService.GetMaindata(id)
        // console.log(mainDataResponse);
        if (mainDataResponse) {
            setUserApi(mainDataResponse)
            const perfUserResponse = await ApiDataService.GetPerfData(id)
            setPerfUserApi(perfUserResponse)

            const activityUserResponse = await ApiDataService.GetUserActivity(id)
            setActivityUserApi(activityUserResponse)

            const sessionUserResponse = await ApiDataService.GetUserSession(id)
            setSessionUserApi(sessionUserResponse)
            setLoading(false)
        } else {
            setApiError(true);
            if (!isToggled) {
                setUserApi(user); // Utilisez les données du mock pour userApi
                setPerfUserApi(userPerf); // Utilisez les données du mock pour perfUserApi
                setActivityUserApi(userActivity); // Utilisez les données du mock pour activityUserApi
                setSessionUserApi(averageSessions); // Utilisez les données du mock pour sessionUserApi
                setLoading(false);
                setIsToggled(true)
            } else {
                setTimeout(() => {
                    alert('Les données API n\'ont pas pu être chargées. Vous visualisez les données du Mock')
                    setLoading(false)

                }, 3000)
            }
        }
    }
    const handleToggleClick = () => {
        if (!apiError) {
            setIsToggled(!isToggled);
        } else {
            alert('Les données API n\'ont pas pu être chargées. Vous visualisez les données du Mock')
        }
    };


    if (loading) return (
        <h3>Chargement des données en cours...</h3>
    )
    return (
        <div className='Home'>
            <header>
                <div className='NameProfil'>
                    <h1>Bonjour <span className='userName'>{user.firstName}</span></h1>
                    <Switch isToggled={isToggled} onToggle={handleToggleClick} />
                    {/* <Switch isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)} /> */}
                </div>
                <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </header>

            <section className='AllDataProfil'>
                <section className='Activity'>
                    <Activity sessions={isToggled ? userActivity : activityUserApi} />
                    <article>
                        <AverageSessions averageSessions={isToggled ? averageSessions : sessionUserApi} />
                        <Intensity kind={isToggled ? userPerf : perfUserApi} />
                        <Score user={isToggled ? user : userApi} />
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