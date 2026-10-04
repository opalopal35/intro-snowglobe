const globe = document.querySelector("#globe");
const button = document.querySelector("#shake");
const message = document.querySelector("#message");

const messages = [
  "junior in high school :')",
  "i've never used css or js before and this seems pretty fun",
  "i like cats aka cars hehe",
  "i enjoy peak music (wte, ghibli music, yoasobi)",
  `i have a bunny you should click <button class = "inline-btn" onclick = "openPicture('bunny.jpg')">this</button> 
  for a picture :)`,
  "i'm fluent in java, hopefully that transfers...",
  "chem is my favorite class bc i can play with chemicals (safely)",
  "i have an older brother"
];


function openPicture(src){
    window.open(src, "_blank");
}


button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

  const pick = getNextMessage();
  document.getElementById("message").innerHTML = pick;
});

let queue = [...messages];

function getNextMessage(){
    if (queue.length === 0){
        queue = [...messages];
        shuffle(queue);
    }
    return queue.pop();
}

function shuffle (arr) {
    for (let i = arr.length - 1; i>0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const canvas = document.getElementById("snow-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const flakes = [];

for (let i = 0; i < 150; i++){
    flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 3 + 1,
        d: Math.random() + 1
    });
}

function drawFlakes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.beginPath();

    flakes.forEach(f => {
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
    });
    ctx.fill();
    updateFlakes();
}

function updateFlakes(){
    flakes.forEach(f=>{
        f.y +=f.d;
        if(f.y > canvas.height) {
            f.y=0;
            f.x = Math.random() * canvas.width;
        }
    });
}

setInterval(drawFlakes, 30);