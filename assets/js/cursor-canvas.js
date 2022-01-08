const canvas = document.createElement('canvas');
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const ctx = canvas.getContext("2d");
let mouseX, mouseY, numberCounte = 0;
const maxCursorArea = 200;
const minCursorArea = 50;
let numberArr = [];

canvas.setAttribute('style', `position: fixed;top:0px;left:0px;z-index:-1;width:100%;height:100%;`);

for (let i = 0; i < 215; i++) {
    let h = (Math.random() * 30) + 20;
    let w = (Math.random() * 30) + 20;
    let y = (Math.random() * (canvas.height - (h * 2))) + h;
    let x = (Math.random() * (canvas.width - (w * 2))) + w;
    let dy = (Math.random() - 0.5) * 1;
    let dx = (Math.random() - 0.5) * 1;
    let addNumber = new AddNumber(x, y, h, w, dx, dy);
    numberArr.push(addNumber);
}

window.addEventListener('mousemove', (e) => {
    mouseX = e.x;
    mouseY = e.y;
});

function AddNumber(x, y, h, w, dx, dy) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.dx = dx;
    this.dy = dy;
    this.followSpeed = 5;
    this.textAlpha = 2;
    // this.shapeSize = 1;
    this.colursArry = [
        `rgba(120, 240, 255, 0.${this.textAlpha})`,
        `rgba(60, 130, 255, 0.${this.textAlpha})`,
        `rgba(0, 179, 235, 0.${this.textAlpha})`,
        `rgba(167, 35, 222, 0.${this.textAlpha})`,
        `rgba(255, 12, 111, 0.${this.textAlpha})`,
    ];
    this.color = this.colursArry[Math.floor(Math.random() * this.colursArry.length)];
    this.font = `${(Math.random() * 15) + 5}px ABC Diatype Trial`;

    this.draw = () => {
        ctx.font = this.font;
        ctx.fillStyle = this.color;
        ctx.fillText(Math.floor(Math.random() * 300), this.x, this.y);
    }
    this.update = () => {
        if ((this.y + this.h) > canvas.height || (this.y) < 0) {
            this.dy = -this.dy;
        }
        if ((this.x + this.w) > canvas.width || (this.x) < 0) {
            this.dx = -this.dx;
        }

        if (mouseX - this.x < maxCursorArea && mouseX - this.x > -maxCursorArea && mouseY - this.y < maxCursorArea && mouseY - this.y > -maxCursorArea) {
            if (this.color[this.color.length - 2] == this.textAlpha && this.color[this.color.length - 3] === ".") {
                this.color = Array.from(this.color);
                this.color[this.color.length - 2] = "9";
                this.color = this.color.join("");
            }
            if (mouseX > this.x) {
                if (this.dx < 0) {
                    this.x -= (this.dx * this.followSpeed);
                } else {
                    this.x += (this.dx * this.followSpeed);
                }
            }
            else {
                if (this.dx > -0) {
                    this.x -= (this.dx * this.followSpeed);
                } else {
                    this.x += (this.dx * this.followSpeed);
                }
            }

            if (mouseY > this.y) {
                if (this.dy < 0) {
                    this.y -= (this.dy * this.followSpeed);
                } else {
                    this.y += (this.dy * this.followSpeed);
                }
            }
            else {
                if (this.dy > -0) {
                    this.y -= (this.dy * 2);
                } else {
                    this.y += (this.dy * 2);
                }
            }

        }
        else {
            this.color = Array.from(this.color);
            this.color[this.color.length - 2] = this.textAlpha;
            this.color = this.color.join("");
            this.x += this.dx;
            this.y += this.dy;
        }
        this.draw();
    }

}


const animation = () => {
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    numberArr.forEach(elem => {
        elem.update();
    })

}

animation();
window.addEventListener('resize', () => {
    animation();
})
document.body.append(canvas);