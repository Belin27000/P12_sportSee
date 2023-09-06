class ModelBarChart {
    constructor(data) {
        this.dataModel = data.sessions.map((item) => {
            return {
                day: item.day,
                kilogram: item.kilogram,
                calories: item.calories,
            }
        })
    }

}

export default ModelBarChart;