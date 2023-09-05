class ModelBarChart {
    constructor(data) {
        // console.log(data.sessions);
        this.dataModel = data.sessions.map((item) => {
            return {
                day: item.day,
                kilogram: item.kilogram,
                calories: item.calories,
            }
        })
    }

}

export { ModelBarChart };