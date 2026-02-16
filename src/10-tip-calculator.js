/**
 * 🍽️ TipEasy - Restaurant Tip Calculator
 *
 * You're building TipEasy, an app that helps diners calculate the right
 * tip based on how they'd rate their dining experience. No more awkward
 * mental math at the table!
 *
 * Service Rating → Tip Percentage:
 *   - 1 (terrible)  → 5%
 *   - 2 (poor)      → 10%
 *   - 3 (okay)      → 15%
 *   - 4 (good)      → 20%
 *   - 5 (excellent) → 25%
 *
 * Return an object with:
 *   - tipPercentage: the percentage as a number (e.g., 15)
 *   - tipAmount: the calculated tip rounded to 2 decimal places
 *   - totalAmount: bill + tip rounded to 2 decimal places
 *
 * Rules:
 *   - If billAmount is 0 or negative, return null
 *   - If serviceRating is not an integer from 1 to 5, return null
 *
 * Example:
 *   calculateTip(50, 4)
 *   → { tipPercentage: 20, tipAmount: 10.00, totalAmount: 60.00 }
 *
 * @param {number} billAmount - The bill amount in dollars
 * @param {number} serviceRating - Service rating from 1 to 5
 * @returns {{ tipPercentage: number, tipAmount: number, totalAmount: number } | null}
 */
export function calculateTip(billAmount, serviceRating) {
  // Your code here
  let tip;
  
  const tipBracket =[0,5,10,15,20,25];
  if(billAmount<=0){
    tip = 0;
  }else if(isNaN(serviceRating)||serviceRating>5||serviceRating<=0||!Number.isInteger(serviceRating)){
    tip = 0;
  }else{
    tip = tipBracket[serviceRating];
  }
  const tipAmt=billAmount * tip / 100;
  const total =billAmount * (100+tip) / 100;
  const tipDetails = {
    tipPercentage:tip,
    tipAmount:tipAmt ,
    totalAmount: total
  }
  if(tip==0){return null;}else{
  return tipDetails;}
  
}
