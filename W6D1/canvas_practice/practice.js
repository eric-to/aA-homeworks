document.addEventListener("DOMContentLoaded", function() {
  // Phase 1
  const practiceCanvas = document.getElementById("mycanvas");
  practiceCanvas.height = 500;
  practiceCanvas.width = 500;

  // Phase 2
  const ctx = practiceCanvas.getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, 500, 500);

  // Phase 3
  ctx.beginPath();
  ctx.arc(200, 200, 40, 0, 2*Math.PI, true);
  ctx.strokeStyle = "blue";
  ctx.lineWidth = 5;
  ctx.stroke();
  ctx.fillStyle = "green";
  ctx.fill();
});
