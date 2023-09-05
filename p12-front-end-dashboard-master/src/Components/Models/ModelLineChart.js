class ModelLineChart {
    constructor(data) {
        this.dataModel = data.sessions.map((item) => {
            return {
                day: this.fnWeekDay(item.day),
                sessionLength: item.sessionLength,
            }
        })
    }
    fnWeekDay(dayNbr) {
        const weekDay = [
            'L',
            'M',
            'M',
            'J',
            'V',
            'S',
            'D'
        ]
        return weekDay[dayNbr - 1]
    }
}

export { ModelLineChart };