/**
 * 🗺️ WanderLust Travel Planner
 *
 * WanderLust is a travel planning app that suggests fun activities
 * based on the month and the current temperature. Users enter the
 * month number and temperature, and the app recommends what to do!
 *
 * Step 1 — Determine the season from the month:
 *   - December, January, February  (12, 1, 2)   → "Winter"
 *   - March, April, May            (3, 4, 5)     → "Spring"
 *   - June, July, August           (6, 7, 8)     → "Summer"
 *   - September, October, November (9, 10, 11)   → "Autumn"
 *
 * Step 2 — Suggest an activity based on season AND temperature (°C):
 *   - Winter + temp < 0     → "skiing"
 *   - Winter + temp >= 0    → "ice skating"
 *   - Spring + temp > 20    → "hiking"
 *   - Spring + temp <= 20   → "museum visit"
 *   - Summer + temp > 35    → "swimming"
 *   - Summer + temp <= 35   → "cycling"
 *   - Autumn + temp > 15    → "nature walk"
 *   - Autumn + temp <= 15   → "reading at a cafe"
 *
 * Return an object: { season: string, activity: string }
 *
 * Rules:
 *   - If month is not 1–12, return null
 *
 * @param {number} month - Month of the year (1-12)
 * @param {number} temperature - Current temperature in Celsius
 * @returns {{ season: string, activity: string } | null}
 */
export function getSeasonActivity(month, temperature) {
  // Your code here
  let recommendation;
  let mausam;
  const temp= temperature;
  const seasons =["Winter","Spring","Summer","Autumn"];
  const activities = ["skiing","ice skating", "hiking", "museum visit", "swimming", "cycling", "nature walk", "reading at a cafe"];
  if(month>12||month<1){
    recommendation=null;
    return null;
  }
  else{
    if(month<3||month==12){
      mausam = seasons[0];
      if(temp<0){
        recommendation=activities[0];}
      else{
        recommendation=activities[1];
      }
    }
    else if(month>=3&&month<=5){
      mausam = seasons[1];
      if(temp>20){
        recommendation=activities[2];}
      else{
        recommendation=activities[3];
      }      
    }
    else if(month>=6&&month<=8){
      mausam = seasons[2];
      if(temp>35){
        recommendation=activities[4];}
      else{
        recommendation=activities[5];
      }      
    }    
    else if(month>=9&&month<=11){
      mausam = seasons[3];
      if(temp>15){
        recommendation=activities[6];}
      else{
        recommendation=activities[7];
      }      
    }
    const suggestion = {
      season: mausam,
       activity: recommendation
    };
    return suggestion; 
  }

}
