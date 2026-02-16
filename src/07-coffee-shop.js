/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here
  const sizeAll = ["small", "medium", "large"];
  const typeAll = ["regular", "latte", "cappuccino", "mocha"];
  const basePrice = [3.0,4.0,5.0];
  const addOn = [0.0,1.0,1.5,2.0];
    let price=0;
  if (!(sizeAll.includes(size)&& typeAll.includes(type))){price = -1;}else
  {
    price =basePrice[ sizeAll.indexOf(size) ]  ;
    if(extras.whippedCream){
        price = price + 0.5;
        //console.log("Has whipped cream");
    }
    if(extras.extraShot){
        price = price + 0.75;
        //console.log("Has extra shot");
    }
    //Add addon for type
    price = price +addOn[ typeAll.indexOf(type) ]  ;
  }
  return price;
}
