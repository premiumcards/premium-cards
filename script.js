/* =========================
   PREMIUM CARDS
   STYLE.CSS
=========================*/

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

html{
scroll-behavior:smooth;
}

body{

background:#05060d;

color:#fff;

overflow-x:hidden;

}

/*=========================
BACKGROUND BLUR
=========================*/

.blur{

position:fixed;

border-radius:50%;

filter:blur(130px);

z-index:-1;

}

.blur.one{

width:350px;

height:350px;

background:#6b2cff;

top:-120px;

left:-100px;

}

.blur.two{

width:400px;

height:400px;

background:#00b4ff;

bottom:-150px;

right:-150px;

}

.blur.three{

width:300px;

height:300px;

background:#b026ff;

top:45%;

left:40%;

}

/*=========================
NAVBAR
=========================*/

header{

position:fixed;

top:0;

left:0;

width:100%;

z-index:999;

backdrop-filter:blur(20px);

background:rgba(20,20,30,.35);

border-bottom:1px solid rgba(255,255,255,.08);

}

nav{

width:90%;

max-width:1350px;

margin:auto;

height:85px;

display:flex;

justify-content:space-between;

align-items:center;

}

.logo{

display:flex;

align-items:center;

gap:12px;

font-size:28px;

font-weight:700;

}

.logo i{

color:#7d5cff;

font-size:30px;

}

nav ul{

display:flex;

list-style:none;

gap:35px;

}

nav ul li a{

color:white;

text-decoration:none;

font-size:15px;

transition:.35s;

}

nav ul li a:hover{

color:#7d5cff;

}

.right{

display:flex;

gap:15px;

}

.login{

padding:12px 24px;

background:transparent;

border:1px solid rgba(255,255,255,.2);

color:white;

border-radius:12px;

cursor:pointer;

transition:.3s;

}

.signup{

padding:12px 28px;

border:none;

cursor:pointer;

font-weight:600;

border-radius:12px;

background:linear-gradient(135deg,#6d32ff,#0095ff);

color:white;

box-shadow:0 0 25px rgba(111,80,255,.4);

transition:.3s;

}

.signup:hover{

transform:translateY(-4px);

box-shadow:0 0 35px #7f4cff;

}

/*=========================
HERO
=========================*/

.hero{

padding-top:150px;

width:90%;

max-width:1350px;

margin:auto;

display:flex;

justify-content:space-between;

align-items:center;

gap:60px;

min-height:100vh;

}

.hero-left{

flex:1;

}

.hero-left h5{

color:#8b6cff;

letter-spacing:2px;

margin-bottom:15px;

}

.hero-left h1{

font-size:65px;

font-weight:800;

line-height:1.1;

margin-bottom:25px;

}

.hero-left p{

font-size:18px;

color:#cfcfcf;

line-height:1.8;

margin-bottom:35px;

}

.hero-btn{

display:flex;

gap:18px;

}

.primary{

padding:16px 35px;

border:none;

background:linear-gradient(135deg,#6a3cff,#00a9ff);

border-radius:14px;

color:white;

font-size:16px;

cursor:pointer;

font-weight:600;

box-shadow:0 0 30px rgba(108,70,255,.5);

}

.secondary{

padding:16px 35px;

border-radius:14px;

background:transparent;

border:1px solid rgba(255,255,255,.18);

color:white;

cursor:pointer;

}

.stats{

display:flex;

gap:45px;

margin-top:50px;

}

.stats h2{

font-size:34px;

color:#7d5cff;

}

.stats span{

color:#b8b8b8;

}

/*=========================
GLASS CARD
=========================*/

.hero-right{

flex:1;

display:flex;

justify-content:center;

}

.glass-card{

width:420px;

height:260px;

border-radius:30px;

background:rgba(255,255,255,.06);

backdrop-filter:blur(20px);

border:1px solid rgba(255,255,255,.08);

padding:35px;

position:relative;

overflow:hidden;

box-shadow:0 0 45px rgba(109,70,255,.25);

}

.glass-card::before{

content:"";

position:absolute;

width:300px;

height:300px;

background:linear-gradient(135deg,#7a47ff,#0094ff);

border-radius:50%;

top:-160px;

right:-120px;

opacity:.28;

}

.chip{

width:65px;

height:50px;

border-radius:10px;

background:gold;

margin-bottom:25px;

}

.glass-card h4{

font-weight:500;

margin-bottom:15px;

}

.glass-card h2{

letter-spacing:3px;

margin-bottom:35px;

}

.card-bottom{

display:flex;

justify-content:space-between;

align-items:center;

font-size:14px;

}
/*=========================
SEARCH
=========================*/

.search{
width:90%;
max-width:1300px;
margin:80px auto;
display:flex;
justify-content:center;
gap:15px;
}

.search input{

width:500px;
padding:18px;
border-radius:14px;
border:1px solid rgba(255,255,255,.12);
background:#111522;
color:#fff;
font-size:16px;
outline:none;

}

.search button{

padding:18px 35px;
border:none;
border-radius:14px;
cursor:pointer;
font-weight:600;
background:linear-gradient(135deg,#6a3cff,#00b0ff);
color:#fff;

}

/*=========================
CARD GRID
=========================*/

.cards{

width:90%;
max-width:1350px;
margin:auto;
padding-bottom:100px;

}

.cards h2{

font-size:42px;
margin-bottom:45px;
text-align:center;

}

.grid{

display:grid;
grid-template-columns:repeat(auto-fit,minmax(330px,1fr));
gap:35px;

}

.card{

background:rgba(255,255,255,.05);
border:1px solid rgba(255,255,255,.08);
backdrop-filter:blur(18px);
border-radius:25px;
overflow:hidden;
transition:.35s;
position:relative;

}

.card:hover{

transform:translateY(-15px);
box-shadow:0 0 40px rgba(112,70,255,.45);

}

.card img{

width:100%;
height:230px;
object-fit:cover;

}

.badge{

position:absolute;
top:18px;
left:18px;
padding:8px 18px;
background:#7d4cff;
border-radius:40px;
font-size:13px;
font-weight:600;

}

.card h3{

padding:25px 25px 10px;
font-size:25px;

}

.card p{

padding:0 25px;
color:#c7c7c7;

}

.card h4{

padding:25px;
font-size:34px;
color:#8d69ff;

}

.buy{

margin:0 25px 25px;
width:calc(100% - 50px);
padding:16px;
border:none;
border-radius:14px;
cursor:pointer;
font-size:16px;
font-weight:700;
color:white;
background:linear-gradient(135deg,#6a3cff,#00b0ff);
transition:.3s;

}

.buy:hover{

box-shadow:0 0 30px #7a4cff;
transform:scale(1.03);

}

/*=========================
FEATURES
=========================*/

.features{

width:90%;
max-width:1350px;
margin:120px auto;

}

.title{

text-align:center;
margin-bottom:70px;

}

.title h2{

font-size:45px;

}

.title p{

color:#b8b8b8;
margin-top:10px;

}

.feature-grid{

display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:30px;

}

.feature-box{

background:#111522;
border:1px solid rgba(255,255,255,.08);
padding:40px;
border-radius:22px;
transition:.35s;
text-align:center;

}

.feature-box:hover{

transform:translateY(-10px);

}

.feature-box i{

font-size:45px;
margin-bottom:20px;
color:#7a52ff;

}

.feature-box h3{

margin-bottom:15px;

}

.feature-box p{

color:#bdbdbd;

}

/*=========================
PAYMENT MODAL
=========================*/

.payment-modal{

position:fixed;
inset:0;
background:rgba(0,0,0,.75);
display:none;
justify-content:center;
align-items:center;
z-index:9999;

}

.modal-box{

width:500px;
max-width:95%;
background:#111522;
border-radius:25px;
padding:35px;
border:1px solid rgba(255,255,255,.1);
position:relative;

}

.close-modal{

position:absolute;
right:20px;
top:20px;
background:none;
border:none;
color:white;
font-size:28px;
cursor:pointer;

}

.amount{

font-size:42px;
font-weight:700;
margin:20px 0;
color:#7d5cff;

}

.coupon{

display:flex;
gap:10px;
margin:25px 0;

}

.coupon input{

flex:1;
padding:15px;
border:none;
border-radius:10px;
background:#191d2d;
color:white;

}

.coupon button{

padding:15px 25px;
border:none;
border-radius:10px;
background:#7d5cff;
color:white;
cursor:pointer;

}

.qr-box{

display:flex;
justify-content:center;
margin:30px 0;

}

.qr-box img{

width:230px;
border-radius:15px;

}

.upi-box{

display:flex;
gap:10px;

}

.upi-box input{

flex:1;
padding:15px;
background:#191d2d;
border:none;
color:white;
border-radius:10px;

}

.upi-box button{

padding:15px 20px;
border:none;
border-radius:10px;
background:#7d5cff;
color:white;
cursor:pointer;

}

.verify{

width:100%;
margin-top:30px;
padding:18px;
border:none;
border-radius:14px;
background:linear-gradient(135deg,#6d34ff,#0095ff);
color:white;
font-size:18px;
font-weight:700;
cursor:pointer;

}

/*=========================
FOOTER
=========================*/

footer{

padding:70px 20px;
text-align:center;
border-top:1px solid rgba(255,255,255,.08);
margin-top:100px;

}

.footer-logo{

font-size:28px;
font-weight:700;
margin-bottom:20px;

}

.footer-links{

display:flex;
justify-content:center;
gap:25px;
flex-wrap:wrap;
margin-bottom:20px;

}

.footer-links a{

text-decoration:none;
color:#bdbdbd;

}

.footer-links a:hover{

color:#7d5cff;

}

/*=========================
RESPONSIVE
=========================*/

@media(max-width:992px){

.hero{
flex-direction:column;
text-align:center;
}

.hero-btn,
.stats{
justify-content:center;
}

nav ul{
display:none;
}

}

@media(max-width:768px){

.hero-left h1{
font-size:42px;
}

.glass-card{
width:100%;
}

.search{
flex-direction:column;
}

.search input{
width:100%;
}

}
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
