// 05-05-22
function getGrade (s1, s2, s3) {
  let average = (s1 + s2 + s3)/3
  if (average <= 100 && average >= 90) {
    return 'A'
  }
  if (average < 90 && average >= 80) {
    return 'B'
  }
  if (average < 80 && average >= 70) {
    return 'C'
  }
  if (average < 70 && average >= 60) {
    return 'D'
  }
 if (average < 60 && average >= 0) {
    return 'F'
 }
}