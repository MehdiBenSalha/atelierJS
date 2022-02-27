let p1=document.getElementById("premier");
let p2=document.getElementById("deuxieme");
let p3=document.getElementById("troisieme");
let tab=["red","yellow","blue","green","pink","orange","brown","purple","white"]

p1.addEventListener('click',()=>
{let x=Math.random()*9;
x=Math.floor(x);
p1.style.color=tab[x];})

p2.addEventListener('click',()=>
{let x=Math.random()*9;
x=Math.floor(x);
p2.style.color=tab[x];})

p3.addEventListener('click',()=>
{let x=Math.random()*9;
x=Math.floor(x);
p3.style.color=tab[x];})