class ModelRadarChart {
    constructor(data) {
        // console.log(data);
        this.USER_PERFORMANCE = {
            // kind: {},
            data: data.data.map(dataItem => ({
                value: dataItem.value,
                kind: this.getKindText(dataItem.kind)
            }))
        };
        return this.USER_PERFORMANCE.data
    }
    getKindText(kindId) {

        switch (kindId) {
            case 1:
                return "cardio";
            case 2:
                return "energy";
            case 3:
                return "endurance";
            case 4:
                return "strength";
            case 5:
                return "speed";
            case 6:
                return "intensity";
            default:
                return 'unknow';
        }
    }

}
export { ModelRadarChart }