import Calories from '@/Assets/calories-icon.png';
import Glucides from '@/Assets/fat-icon.png';
import Protéines from '@/Assets/protein-icon.png';
import Lipides from '@/Assets/carbs-icon.png';
class ModelRadialChart {

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
export { ModelRadialChart }