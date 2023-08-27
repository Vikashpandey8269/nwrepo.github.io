const board = document.getElementById("whiteboard");
  const deleteBtn = document.getElementById("deleteButton");
  const undoButton = document.getElementById("undoButton");
  const context = board.getContext("2d");
  let drawing = false;
  let objects = [];
  let tempPath = null;

  board.addEventListener("mousedown", startDraw);
  board.addEventListener("mousemove", draw);
  board.addEventListener("mouseup", stopDrawing);
  board.addEventListener("mouseout", stopDrawing);

  deleteBtn.addEventListener("click", clearWhiteboard);
  undoButton.addEventListener("click", handleUndo);

  function startDraw(e) {
    drawing = true;
    tempPath = [{ x: e.clientX - board.offsetLeft, y: e.clientY - board.offsetTop }];
  }

  function draw(e) {
    if (!drawing) return;
    context.lineWidth = 3;
    context.lineCap = "round";
    context.strokeStyle = "blue";

    tempPath.push({ x: e.clientX - board.offsetLeft, y: e.clientY - board.offsetTop });

    context.clearRect(0, 0, board.width, board.height);
    redrawboard();
  }

  function stopDrawing() {
    if (!drawing) return;
    drawing = false;
    if (tempPath.length > 1) {
      addObjectToboard(tempPath);
    }
    tempPath = null;
  }

  function clearWhiteboard() {
    objects = [];
    redrawboard();
  }

  function handleUndo() {
    objects.pop(); // Remove the last drawn object
    redrawboard();
  }

  function redrawboard() {
    context.clearRect(0, 0, board.width, board.height);

    for (const obj of objects) {
      context.beginPath();
      context.moveTo(obj.path[0].x, obj.path[0].y);
      for (const point of obj.path) {
        context.lineTo(point.x, point.y);
      }
      context.stroke();
    }
  }

  function addObjectToboard(path) {
    objects.push({ path });
    redrawboard();
  }