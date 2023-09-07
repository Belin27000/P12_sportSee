import { ModelBarChartData, ModelLineChartData, ModelRadarChartData, ModelRadialChartData } from '@/Pages/index.js';

class DataModeling_service {
    constructor(Alldata) {
        this.userMainData = Alldata.USER_MAIN_DATA;
        this.userActivity = Alldata.USER_ACTIVITY;
        this.userAverageSessions = Alldata.USER_AVERAGE_SESSIONS;
        this.userPerformance = Alldata.USER_PERFORMANCE;
    }

    getUserMainDataById(userId) {
        const allMainData = this.userMainData.find(user => user.id === parseInt(userId))

        const data = new ModelRadialChartData(allMainData)
        return data
    }

    getUserActivityById(userId) {
        //recupère les data de l'utilisateur et les envoi dans le model pour mise en forme avant affichage dans le BarChart
        const data = this.userActivity.find(user => user.userId === parseInt(userId));
        return new ModelBarChartData(data)
    }

    getUserAverageSessionsById(userId) {
        const data = this.userAverageSessions.find(user => user.userId === parseInt(userId));
        return new ModelLineChartData(data)
    }

    getUserPerformanceById(userId) {
        const data = this.userPerformance.find(user => user.userId === parseInt(userId));
        const viewData = new ModelRadarChartData(data)

        return (viewData)
    }
}

export default DataModeling_service;