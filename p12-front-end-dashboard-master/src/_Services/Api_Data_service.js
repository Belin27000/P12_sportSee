import axios from 'axios'
import { ModelBarChart, ModelLineChart, ModelRadarChart, ModelRadialChart } from '@/Pages/index.js';

const GetMaindata = async (id) => {
    // console.log(id);
    const url = 'http://localhost:3000/user/' + id
    try {
        const response = await axios(url)

        // console.log(response.data.data);
        return new ModelRadialChart(response.data.data)
    } catch (error) {
        // console.log(error)
        // console.log("tu l'a");
    }


}
const GetPerfData = async (id) => {

    const baseUrl = 'http://localhost:3000/user/' + id;
    const perfUrl = baseUrl + '/performance'
    try {
        const response = await axios(perfUrl)
        return new ModelRadarChart(response.data.data)
    } catch (error) {

    }



}

//http://localhost:3000/user/${userId}/activity 
//http://localhost:3000/user/${userId}/average-sessions 
//http://localhost:3000/user/${userId}/performance

const ApiDataService = {
    GetMaindata,
    GetPerfData
}
export default ApiDataService