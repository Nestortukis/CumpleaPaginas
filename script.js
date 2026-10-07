// 💙 PERSONALIZA AQUÍ LAS 24 RAZONES
const reasons = [
"Porque con un mensajito tuyo me alegras el día",
"Porque me encanta tu forma de amar.",
"Porque tienes una forma única de ver las cosas.",
"Porque admiro la persona que eres.",
"Porque haces especiales cada momento que estoy contigo.",
"Porque me encanta verte feliz.",
"Porque admiro tu forma de amar a Dios y el ministerio.",
"Porque tienes un corazón enorme.",
"Porque contigo puedo ser yo.",
"Porque eres hermosa.",
"Porque eres el amor de mi vida.",
"Porque tu vida es una bendición muy grande.",
"Porque me cuidas y te preocupas por mi",
"Porque eres super fuerte y valiente.",
"Porque eres mi amorcito y mi princesa.",
"Porque algún día habra boda.",
"Porque me haces sentir afortunado.",
"Porque quiero verte cumplir tus sueños.",
"Porque todavía nos quedan muchas historias.",
"Porque me inspiras a seguir adelante.",
"Porque eres tu.",
"Porque eres un tesoro muy especial.",
"Porque me haces feliz.",
"Porque te amo con todo mi corazón 💙"
];

const enter = document.getElementById("enter");
const main = document.getElementById("main");

enter.addEventListener("click",()=>{
 main.classList.remove("hidden");
 document.getElementById("intro").scrollIntoView({behavior:"smooth"});
});

document.querySelectorAll(".next").forEach(btn=>{
 btn.addEventListener("click",()=>{
   const target=document.getElementById(btn.dataset.target);
   if(target) target.scrollIntoView({behavior:"smooth",block:"start"});
 });
});

// Flores
const modal=document.getElementById("modal");
document.querySelectorAll(".flower").forEach(f=>{
 f.addEventListener("click",()=>{
   document.getElementById("modalText").textContent=f.dataset.msg;
   document.getElementById("modalIcon").textContent=f.querySelector("b").textContent;
   modal.classList.remove("hidden");
 });
});
document.getElementById("close").onclick=()=>modal.classList.add("hidden");
modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.add("hidden")});

// Fotos
const photoModal=document.getElementById("photoModal");
const bigPhoto=document.getElementById("bigPhoto");
document.querySelectorAll(".polaroid").forEach(card=>{
 card.addEventListener("click",()=>{
   bigPhoto.src=card.querySelector("img").src;
   photoModal.classList.remove("hidden");
 });
});
document.getElementById("closePhoto").onclick=()=>photoModal.classList.add("hidden");
photoModal.addEventListener("click",e=>{if(e.target===photoModal)photoModal.classList.add("hidden")});

// 24 razones
const grid=document.getElementById("reasonGrid");
let opened=0;
reasons.forEach((text,i)=>{
 const b=document.createElement("button");
 b.className="reason";
 b.innerHTML=`${i+1}`;
 b.onclick=()=>{
   if(!b.classList.contains("open")){
     b.classList.add("open");
     b.textContent=text;
     opened++;
     document.getElementById("count").textContent=opened;
     if(opened===24) createStars(35);
   }
 };
 grid.appendChild(b);
});

// Sorpresa final
document.getElementById("surprise").onclick=()=>{
 document.getElementById("final").classList.remove("hidden");
 createStars(80);
};

// Estrellitas
function createStars(amount){
 for(let i=0;i<amount;i++){
   const s=document.createElement("span");
   s.textContent=["✦","✧","💙","🌸","✨"][Math.floor(Math.random()*5)];
   s.style.position="fixed";
   s.style.left=Math.random()*100+"vw";
   s.style.top="-30px";
   s.style.zIndex="50";
   s.style.fontSize=(12+Math.random()*20)+"px";
   s.style.animation=`fall ${2+Math.random()*3}s linear forwards`;
   document.body.appendChild(s);
   setTimeout(()=>s.remove(),5500);
 }
}
const style=document.createElement("style");
style.textContent="@keyframes fall{to{transform:translateY(110vh) rotate(500deg);opacity:0}}";
document.head.appendChild(style);

document.addEventListener("keydown",e=>{
 if(e.key==="Escape"){modal.classList.add("hidden");photoModal.classList.add("hidden")}
});
