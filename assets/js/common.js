// toggle btn js 
let toggleBtn = document.querySelector(".toggle__btn svg");
let navlist = document.querySelector(".nav__list");

toggleBtn.addEventListener("click",()=>{
    toggleBtn.classList.toggle("cross");
    navlist.classList.toggle("show");
});

// header js start
let header = document.querySelector(".header");
let oldValue = 0;
window.addEventListener("scroll",()=>{
    if(window.scrollY > oldValue){
        oldValue=window.scrollY;
        // header.classList.remove("show");
        header.setAttribute("style" ,"top: -100%;transition:0.5s;background-color:#0b0e1e;padding:30px 0;");
    }else{
        oldValue=window.scrollY;
        // header.classList.add("show");
        header.setAttribute("style" ,"top: 0px;transition:0.5s;background-color:#0b0e1e;padding:30px 0;");
    }
    if (window.innerWidth > 991) { 
        
        if(window.scrollY == 0){
            header.setAttribute("style" ,"top: 67px;transition:0.5s;background-color:transparent;padding:0;");
        }
    }
});
// header js end

// /* Canvs */
// const canvas = document.getElementById("canvas");
// var particles = [];
// var offset = 0;
// // Onclick Multilple Design
// // var geometry = null;
// var cursor = {
//   x: innerWidth/2,
//   y: innerHeight/2
// }

// function setDimentions() {
//   canvas.width = innerWidth;
//   canvas.height = innerHeight;
// }
// setDimentions();

// addEventListener("resize", () => setDimentions());
// addEventListener("mousemove", (e) => {
//   cursor.x = e.clientX;
//   cursor.y = e.clientY;
// });
// // Onclick Multilple Design
//     // addEventListener("click", () => {
//     //   geometry = Math.floor(Math.random() * 20);
//     // });
// addEventListener("touchmove", (e) => {
//     e.preventDefault();
//     cursor.x = e.touches[0].clientX;
//     cursor.y = e.touches[0].clientY;
//   },
//   { passive: false }
// );

// function particle(x, y, width, color, speed) {
//   this.x = x;
//   this.y = y;
//   this.width = width;
//   this.color = color;
//   this.speed = speed;
//   this.angle = Math.random() * Math.PI * 2;
//   this.t = Math.random() * 20 0;
//   this.rotate = () => {
//     const initialPoint = {
//       x: this.x,
//       y: this.y
//     };

//     // Onclick Multilple Design
//     // this.speed = speed + (geometry ? x/geometry : 0);

//     this.angle += this.speed;
//     this.x = cursor.x + Math.cos(this.angle) * this.t;
//     this.y = cursor.y + Math.sin(this.angle) * this.t;
//     ctx.beginPath();
//     ctx.moveTo(initialPoint.x, initialPoint.y);
//     ctx.lineTo(this.x, this.y);
//     ctx.lineWidth = this.width;
//     ctx.strokeStyle = this.color;
//     ctx.stroke();
//   }
// }

// function generateColor() {
//   let hexSet = "01234567fsdfdF";
//   let finalHexString = "#";
//   for (let i = 0; i < 6; i++) {
//     finalHexString += hexSet[Math.ceil(Math.random() * 15)];
//   }
//   return finalHexString;
// }

// function generateParticles(n) {
//   for(var i = 0; i <10; i++) {
//     particles[i] = new particle(canvas.width/2, canvas.height/2, 200, generateColor(), 0.02);
//   }
// }
// generateParticles(0);

// function animate() {
//   ctx = canvas.getContext('2d');
//   ctx.save();
//   offset++;
//   ctx.fillStyle = "rgba(0,0,0,0.05)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);
//   particles.forEach((particle) => particle.rotate());
//   requestAnimationFrame(animate);
// }
// requestAnimationFrame(animate);


    
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

    Array.prototype.forEach.call(elementsToShow, function(element){
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}