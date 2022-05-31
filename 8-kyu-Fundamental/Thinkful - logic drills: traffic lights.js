function updateLight(current) {
  if (current === 'yellow') {
    return 'red';
  } else if (current === 'green') {
    return 'yellow';
  } else if (current === 'red') {
    return 'green';
  }
}