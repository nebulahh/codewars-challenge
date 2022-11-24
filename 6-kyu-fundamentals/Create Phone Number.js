function createPhoneNumber(numbers){
  const front = numbers.slice(0, 3)
  front.push(')')
  front.unshift('(')
  const joinedStr = front.join('')
  
  const mid = numbers.slice(3, 6)
  mid.push('-')
    const joinedMid = mid.join('')
  
  const end = numbers.slice(6)
  const joinedEnd = end.join('')
  
  return `${joinedStr} ${joinedMid}${joinedEnd}`
}
