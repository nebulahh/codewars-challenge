function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const months = {
    January: 1,
    Febuary: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
  }

  let arr1 = currentDate.split(' ')
  let arr2 = expirationDate.split(' ')

  const b = new Date(arr1[2], months[arr1[0]], arr1[1].replace(',', ' ')) 
  const c = new Date(arr2[2], months[arr2[0]], arr2[1].replace(',', ' ')) 
  const cuD = b.getTime()
  const exD = c.getTime()
  
  return enteredCode === correctCode && cuD <= exD ? true : false
}
