function mazeRunner(maze, directions) {
  var startX = 0; startY = 0;
  var boardX = 0; boardY = 0;
  for (y = 0; y < maze.length; y++) {
    boardY = maze[y]
    for (x = 0; x < boardY.length; x++) {
      boardX = boardY[x]
      if (boardX === 2){startX = x; startY = y}
    }
  }

  for (x = 0; x < directions.length; x++) {
    switch(directions[x]) {
      case "N": startY -= 1; break;
      case "E": startX += 1; break;
      case "S": startY += 1; break;
      case "W": startX -= 1; break;
    }
    if (startY < 0 || startY > maze.length-1 || startX < 0 || startX > maze.length-1 || maze[startY][startX] === 1){return "Dead"};
    if (maze[startY][startX] === 3){return "Finish"};
  }
  return "Lost";
}
