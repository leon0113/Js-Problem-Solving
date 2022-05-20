function animalCount(miles) {
    const first10MileAnimalRate = 10;
    const second10MileAnimalRate = 50;
    const restMilesAnimalRate = 100;
    if (miles <= 10) {
        const count = miles * first10MileAnimalRate;
        return count;
    }
    else if (miles <= 20) {
        const first10 = 10 * first10MileAnimalRate;
        const restMiles = miles - 10;
        const second10 = restMiles * second10MileAnimalRate;
        const totalAnimals = first10 + second10;
        return totalAnimals;
    }
    else {
        const first10 = 10 * first10MileAnimalRate;
        const second10 = 10 * second10MileAnimalRate;
        const restMile = miles - 20;
        const restAnimal = restMile * restMilesAnimalRate;
        const totalAnimal = first10 + second10 + restAnimal;
        return totalAnimal;
    }
}
const animals = animalCount(30);
console.log(animals);