function hello(name) {
  if (name) {
    return 'Hello, ' + name.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        ) + '!'
  } else {
    return 'Hello, World!'
  }
}
