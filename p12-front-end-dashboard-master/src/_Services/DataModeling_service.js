class DataModeling_service {
    constructor(Alldata) {
        this.userMainData = Alldata.USER_MAIN_DATA;
        this.userActivity = Alldata.USER_ACTIVITY;
        this.userAverageSessions = Alldata.USER_AVERAGE_SESSIONS;
        this.userPerformance = Alldata.USER_PERFORMANCE;
    }
    getUserMainDataById(userId) {
        let mainDataUser = this.userMainData.find(user => user.id === userId);

        return mainDataUser;
    }

    getUserActivityById(userId) {
        let userActivity = this.userActivity.find(user => user.userId === userId);
        return userActivity;
    }

    getUserAverageSessionsById(userId) {
        let userSessions = this.userAverageSessions.find(user => user.userId === userId);
        return userSessions;
    }

    getUserPerformanceById(userId) {
        let userPerf = this.userPerformance.find(user => user.userId === userId);
        return userPerf;
    }
}

export default DataModeling_service;