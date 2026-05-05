/*
Author: Yel Mangok John <Yel-Mangok>
Problem: Delivery Cost Calculator

*/

/**
 * 
 * @param {number} distance 
 * @returns {number}
 */


function calculateDeliveryCost(distance) {
    const baseFee = 5;
    const costPerKm = 2;

    const totalCost = baseFee + (costPerKm * distance);
    return totalCost;
}

const distance = 10;
const totalCost = calculateDeliveryCost(distance);

console.log(`
\n**************************************
    TotalCost: $ ${totalCost}
****************************************    
    `); 