const canvas = document.querySelector(".myCanvas");
const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0, 0, width, height);

// First drawing
ctx.fillStyle = "rgb(225,0,0)";
ctx.fillRect(50, 50, 100, 150);

ctx.fillStyle = "rgb(0,225,0)";
ctx.fillRect(75, 75, 100, 100);

ctx.fillStyle = "rgba(225,0,225, 0.75)";
ctx.fillRect(25, 100, 175, 50);

// Second drawing
ctx.fillStyle = "rgb(225,0,0)";
ctx.fillRect(400, 350, 100, 150);

ctx.fillStyle = "rgb(0,225,0)";
ctx.fillRect(425, 375, 100, 100);

ctx.fillStyle = "rgba(225,0,225, 0.75)";
ctx.fillRect(375, 400, 175, 50);

// Third drawing
ctx.fillStyle = "rgb(225,0,0)";
ctx.fillRect(750, 675, 100, 150);

ctx.fillStyle = "rgb(0,225,0)";
ctx.fillRect(775, 700, 100, 100);

ctx.fillStyle = "rgba(225,0,225, 0.75)";
ctx.fillRect(725, 725, 175, 50);

// Stroke started from here
ctx.strokeStyle = "rgb(255, 255, 255)";
ctx.lineWidth = 5;
ctx.strokeRect(25, 25, 175, 200);

ctx.strokeStyle = "rgb(255, 255, 255)";
ctx.lineWidth = 3;
ctx.strokeRect(725, 650, 175, 200);
