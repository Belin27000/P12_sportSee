class DataModeling_service {
    constructor(Alldata) {
        this.userMainData = Alldata.USER_MAIN_DATA;
        this.userActivity = Alldata.USER_ACTIVITY;
        this.userAverageSessions = Alldata.USER_AVERAGE_SESSIONS;
        this.userPerformance = Alldata.USER_PERFORMANCE;
    }
    getUserMainDataById(userId) {
        // let mainDataUser = this.userMainData.find(user => user.id === userId);
        // console.log(this.userMainData);
        const allMainData = this.userMainData.find(user => user.id === parseInt(userId))
        // console.log(allMainData);
        const mainData = [{
            userFirstName: allMainData.userInfos.firstName,
            userLastName: allMainData.userInfos.lastName,
            todayscore: allMainData.todayScore * 100
        }]
        const energyData = [{
            calories: allMainData.keyData.calorieCount,
            protein: allMainData.keyData.proteinCount,
            carbohydrate: allMainData.keyData.carbohydrateCount,
            lipid: allMainData.keyData.lipidCount
        }]
        // console.log(energyData);
        return ({ mainData, energyData });
    }

    getUserActivityById(userId) {

        let userActivities = this.userActivity.find(user => user.userId === parseInt(userId));
        const userSessionActivities = userActivities.sessions
        let compteur = 1
        const cleanUserActivity = userSessionActivities.map(item => ({
            day: compteur++,
            kilogram: item.kilogram,
            calories: item.calories,
        }))
        return cleanUserActivity
    }

    getUserAverageSessionsById(userId) {
        // console.log(this.userAverageSessions);

        // let userSessions = this.userAverageSessions.find(user => user.userId === userId);
        return this.userAverageSessions.find(user => user.userId === parseInt(userId));
    }

    getUserPerformanceById(userId) {
        // console.log(this.userPerformance);
        // console.log(this.userPerformance.find(user => user.userId === parseInt(userId)));

        let userPerf = this.userPerformance.find(user => user.userId === parseInt(userId));
        const userPerfArray = userPerf.data

        const cleanUserPerfArray = userPerfArray.map(item => ({
            "data": item.value,
            "kind": userPerf.kind[item.kind]
        }))
        // console.log(cleanUserPerfArray);

        return cleanUserPerfArray
        // return this.userPerformance.find(user => user.userId === parseInt(userId));
        // return cleanUserPerfArray
    }
}

export default DataModeling_service;