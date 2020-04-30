/**
 * рисование
 */
// ctx.fillStyle = 'red';
// ctx.fillRect(50, 40, 100, 200);
// ctx.strokeStyle = 'RGBA(0, 255, 0, 1)';
// ctx.lineWidth = 5;
// ctx.strokeRect(50, 40, 100, 200);
// ctx.beginPath();
// ctx.arc(150, 150, 100, 0, 3 / 2 * this.Math.PI);
// ctx.fill();

/**
 * Рисование элипсов
 */
// ctx.beginPath();
// ctx.ellipse(150, 150, 100, 50, Math.PI / 4, 0, 3 / 2 * this.Math.PI);
// ctx.fill();

/**
 * Рисование линий
 */
// ctx.beginPath();
// ctx.moveTo(30, 40);
// ctx.lineTo(100, 100);
// ctx.lineTo(0, 100);
// ctx.lineTo(50, 150);
// ctx.stroke();

// }
window.onload = function() {
    let cnv = document.getElementById('mycanvas');
    cnv.width = cnv.offsetWidth;
    cnv.height = cnv.offsetHeight;
    let ctx = cnv.getContext('2d');
    cnv.addEventListener('click', function(e) {
        onDrowPoint(e, ctx);
    })
}

function onDrowPoint(e, ctx) {
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 3, 0, 2 * Math.PI);
    ctx.fill();
}