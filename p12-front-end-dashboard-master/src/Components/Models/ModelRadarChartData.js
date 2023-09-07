class ModelRadarChartData {
    constructor(data) {
        this.allData = {
            // kind: {},
            data: data.data.map(dataItem => ({
                value: dataItem.value,
                kind: this.getKindText(dataItem.kind)
            }))
                .reverse()
        };
        return this.allData.data
    }
    getKindText(kindId) {

        switch (kindId) {
            case 1:
                return "cardio";
            case 2:
                return "Energie";
            case 3:
                return "Endurance";
            case 4:
                return "Force";
            case 5:
                return "Vitesse";
            case 6:
                return "Intensité";
            default:
                return 'unknow';
        }
    }

}
export default ModelRadarChartData