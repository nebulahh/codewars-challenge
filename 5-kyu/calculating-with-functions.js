function zero() {
  return arguments.length ? arguments[0](0) : 0;
}
function one() {
return arguments.length ? arguments[0](1) : 1;
}
function two() {
  return arguments.length ? arguments[0](2) : 2;
}
function three() { 
  return arguments.length ? arguments[0](3) : 3;
}
function four() {
  return arguments.length ? arguments[0](4) : 4;
}
function five() {
  return arguments.length ? arguments[0](5) : 5;
}
function six() {
  return arguments.length ? arguments[0](6) : 6;
}
function seven() {
  return arguments.length ? arguments[0](7) : 7;
}
function eight() {
  return arguments.length ? arguments[0](8) : 8;
}
function nine() {
  return arguments.length ? arguments[0](9) : 9;
}

function plus(b) {
  return function(a) { return Math.floor(a + b)};
}
function minus(b) {
  return function(a) { return Math.floor(a - b)};
}
function times(b) {
  return function(a) { return Math.floor(a * b)};
}
function dividedBy(b) {
  return function(a) { return Math.floor(a / b)};
}
