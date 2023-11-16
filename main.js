let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function main() {
    for (let x = 0; x <= canvas.width; x += 100) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(canvas.width / 2, canvas.height / 2);
        context.strokeStyle = "#ff0000"
        context.stroke();
        context.closePath();

        context.beginPath();
        context.moveTo(x, canvas.height);
        context.lineTo(canvas.width / 2, canvas.height / 2);
        context.strokeStyle = "#ff0000"
        context.stroke();
        context.closePath();
    }
}

main();

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    main();
})