import Calories from '@/Assets/Images/calories-icon.png';
import Glucides from '@/Assets/Images/fat-icon.png';
import Protéines from '@/Assets/Images/protein-icon.png';
import Lipides from '@/Assets/Images/carbs-icon.png';
class ModelRadialChartData {

    constructor(data) {
        const kCalFormat = new Intl.NumberFormat("en-IN", {
            maximumSignificantDigits: 3,
        }).format(data.keyData.calorieCount)

        this.firstName = data.userInfos.firstName
        this.lastName = data.userInfos.lastName
        this.age = data.userInfos.age
        this.todayScore = data.todayScore ? data.todayScore * 100 : data.score * 100
        this.keyData = [
            { imageData: Calories, name: 'Calories', value: kCalFormat + 'kCal' },
            { imageData: Glucides, name: 'Glucides', value: data.keyData.carbohydrateCount + 'g' },
            { imageData: Lipides, name: 'Lipides', value: data.keyData.lipidCount + 'g' },
            { imageData: Protéines, name: 'Protéines', value: data.keyData.proteinCount + 'g' }
        ]
    }
}
export default ModelRadialChartData