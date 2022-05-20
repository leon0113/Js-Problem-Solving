/*
 chairWood = 3cft/chair
tableWood = 10 cft/table
bedWood = 50 cft/bed
 */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    // wood calculation
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBedWood;

    // Total wood calculation  
    const total = chairWoodQuantity + tableWood + bedWood;
    return total;
}
const inputQuantity = woodCalculator(3, 5, 2);
console.log(inputQuantity);