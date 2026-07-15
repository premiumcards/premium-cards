/*==================================
PREMIUM CARDS
script.js
==================================*/

// Elements

const buyButtons = document.querySelectorAll(".buy");

const paymentModal = document.getElementById("paymentModal");

const closeModal = document.querySelector(".close-modal");

const copyBtn = document.getElementById("copyUPI");

const upiInput = document.querySelector(".upi-box input");

const countdown = document.getElementById("countdown");

const searchInput = document.querySelector(".search input");

const cards = document.querySelectorAll(".card");

let timer;

//==========================
// BUY BUTTON
//==========================

buyButtons.forEach(button=>{

button.addEventListener("click",()=>{

paymentModal.style.display="flex";

startTimer();

});

});

//==========================
// CLOSE
//==========================

closeModal.addEventListener("click",()=>{

paymentModal.style.display="none";

clearInterval(timer);

});

window.addEventListener("click",(e)=>{

if(e.target===paymentModal){

paymentModal.style.display="none";

clearInterval(timer);

}

});

//==========================
// COPY UPI
//==========================

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(upiInput.value);

copyBtn.innerHTML="Copied ✓";

setTimeout(()=>{

copyBtn.innerHTML="Copy";

},2000);

});

//==========================
// TIMER
//==========================

function startTimer(){

clearInterval(timer);

let time=900;

timer=setInterval(()=>{

let min=Math.floor(time/60);

let sec=time%60;

countdown.innerHTML=

`${String(min).padStart(2,"0")}:${String(sec).padStart(2,"0")}`;

time--;

if(time<0){

clearInterval(timer);

countdown.innerHTML="Expired";

}

},1000);

}

//==========================
// SEARCH
//==========================

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

cards.forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

if(title.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

//==========================
// VERIFY BUTTON
//==========================

document.querySelector(".verify").addEventListener("click",()=>{

alert("Payment verification request submitted.");

});

//==========================
// HERO ANIMATION
//==========================

const hero=document.querySelector(".hero");

window.addEventListener("load",()=>{

hero.style.opacity="1";

hero.style.transform="translateY(0)";

});

//==========================
// SCROLL EFFECT
//==========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll(".card,.feature-box").forEach(el=>{

observer.observe(el);

});

//==========================
// RIPPLE BUTTON EFFECT
//==========================

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",function(e){

const circle=document.createElement("span");

const d=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=d+"px";

circle.style.height=d+"px";

circle.style.left=e.offsetX-d/2+"px";

circle.style.top=e.offsetY-d/2+"px";

circle.classList.add("ripple");

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});
