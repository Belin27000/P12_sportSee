import { ModelBarChart } from "@/Components/Models/ModelBarChart.js";
import { ModelLineChart } from "@/Components/Models/ModelLineChart.js";
import { ModelRadarChart } from "@/Components/Models/ModelRadarChart.js";
import { ModelRadialChart } from "@/Components/Models/ModelRadialChart.js";

class DataModeling_service {
    constructor(Alldata) {
        this.userMainData = Alldata.USER_MAIN_DATA;
        this.userActivity = Alldata.USER_ACTIVITY;
        this.userAverageSessions = Alldata.USER_AVERAGE_SESSIONS;
        this.userPerformance = Alldata.USER_PERFORMANCE;
    }
    getUserMainDataById(userId) {
        const allMainData = this.userMainData.find(user => user.id === parseInt(userId))

        const data = new ModelRadialChart(allMainData)
        // console.log(data);
        return data
    }

    getUserActivityById(userId) {
        //recupère les data de l'utilisateur et les envoi dans le model pour mise en forme avant affichage dans le BarChart
        const data = this.userActivity.find(user => user.userId === parseInt(userId));
        return new ModelBarChart(data)
    }

    getUserAverageSessionsById(userId) {
        const data = this.userAverageSessions.find(user => user.userId === parseInt(userId));
        return new ModelLineChart(data)
    }

    getUserPerformanceById(userId) {
        const data = this.userPerformance.find(user => user.userId === parseInt(userId));
        // const userPerfArray = userPerf.data

        // const cleanUserPerfArray = userPerfArray.map(item => ({
        //     "data": item.value,
        //     "kind": userPerf.kind[item.kind]
        // }))

        // return cleanUserPerfArray
        const viewData = new ModelRadarChart(data)
        // console.log(viewData);
        // console.log(viewData);
        return (viewData)
    }
}

export default DataModeling_service;