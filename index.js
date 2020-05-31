window.addEventListener('load', () => {
    const musics = document.querySelectorAll(".music");
    const pads = document.querySelectorAll(".pads div");
    const balls = document.querySelector(".visual");
    const colors = [
        "cornflowerblue",
        "darkgreen",
        "firebrick",
        "lightseagreen",
        "magenta",
        "orangered"
    ]
    // plays music
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            musics[index].currentTime = 0;
            musics[index].play();
            createBalls(index);
        });
    });

    // animation
    const createBalls = (index) => {
        const ball = document.createElement("div");
        balls.appendChild(ball);
        ball.style.backgroundColor = colors[index];
        ball.style.animation = "jump 1s ease";
        ball.addEventListener("animationend", function () {
            balls.removeChild(this);
        })
    }
});