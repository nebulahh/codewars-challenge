function setAlarm(employed, vacation) {
  if(employed === true && vacation === false){
    return true;
  } else if(employed === false && vacation === true){
    return false;
  } else{
    return false;
  }
}
