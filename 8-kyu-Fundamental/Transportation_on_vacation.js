// 14-04-22
function rentalCarCost(d) {
    let carDailyCost = 40 * d;
    let discountCost = 0;
    
    if(d >= 3 && d < 7) {
     discountCost = carDailyCost - 20;
    } else if(d >= 7) {
     discountCost = carDailyCost - 50;
    } else {
      return carDailyCost
    }
    return discountCost; 
  }