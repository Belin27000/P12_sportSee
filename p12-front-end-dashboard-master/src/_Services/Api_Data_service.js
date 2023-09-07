import axios from 'axios'
import { ModelBarChartData, ModelLineChartData, ModelRadarChartData, ModelRadialChartData } from '@/Pages/index.js';

const GetMaindata = async (id) => {
    const url = 'http://localhost:3000/user/' + id
    try {
        const response = await axios(url)

        return new ModelRadialChartData(response.data.data)
    } catch (error) {
        console.log(error)
    }

}
const GetPerfData = async (id) => {

    const baseUrl = 'http://localhost:3000/user/' + id;
    const perfUrl = baseUrl + '/performance'
    try {
        const response = await axios(perfUrl)
        return new ModelRadarChartData(response.data.data)
    } catch (error) {
        console.log(error);
    }
}

const GetUserActivity = async (id) => {
    const baseUrl = 'http://localhost:3000/user/' + id;
    const activityUrl = baseUrl + '/activity'
    try {
        const response = await axios(activityUrl)
        return new ModelBarChartData(response.data.data)
    } catch (error) {
        console.log(error);
    }

}

const GetUserSession = async (id) => {
    const baseUrl = 'http://localhost:3000/user/' + id;
    const sessionUrl = baseUrl + '/average-sessions '
    try {
        const response = await axios(sessionUrl)
        return new ModelLineChartData(response.data.data)
    } catch (error) {
        console.log(error);
    }
}


const ApiDataService = {
    GetMaindata,
    GetPerfData,
    GetUserActivity,
    GetUserSession
}
export default ApiDataService