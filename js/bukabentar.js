function fungsimau2(){
  fungsi=0;tes();
}

teksjudulakhir = judulakhir.innerHTML; judulakhir.innerHTML="";
tekskalimatakhir = kalimatakhir.innerHTML; kalimatakhir.innerHTML="";
tekspalingakhir = palingakhir.innerHTML; palingakhir.innerHTML="";

function fungsimau(){
  fungsi=0;tes();
  setTimeout(mulaitextsec,2500);
}
async function fungsigamau(){
await swalst.fire({title: '' + kataditolak.innerHTML, timer: 2000, imageUrl: '' + stikerditolak.src,});
}
async function fungsigamau2(){
  await swalst.fire({title: '' + kataditolak2.innerHTML, timer: 2000, imageUrl: '' + stikerditolak2.src,});
}
function mulaitextsec(){textsec3.style="opacity:0";setTimeout(lanjtextsec,400)}
function lanjtextsec(){textsec3.style="display:none";textsec3b.style="opacity:1";document.querySelector(".kolomrange").style="display:flex";setTimeout(smn,700);}

var range = document.querySelector("input");
var rangeval = document.querySelector(".inivalue");
rangeval.textContent = range.value + "%";
range.oninput = function(){rangeval.textContent = this.value + "%";persen=rangeval.textContent;pesanwhatsapp = pesanWA + persen + "!";}

var date = new Date();
var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var hours = date.getHours();
var minutes = date.getMinutes();

// Tambahkan awalan nol jika jam atau menit kurang dari 10
if (hours < 10) {hours = "0" + hours;}
if (minutes < 10) {minutes = "0" + minutes;}

var day = days[date.getDay()];
var dateNum = date.getDate();
var month = months[date.getMonth()];
var year = date.getFullYear();

console.log(hours + "." + minutes + " WIB - " + day + ", " + dateNum + " " + month + " " + year);

var element = document.querySelector("body");var watermark = document.createElement("div");

// Setel teks watermark dan propertinya
watermark.textContent = day + ", " + dateNum + " " + month + " " + year;
watermark.style = "color:white;opacity:.5;font-size:10px;position:fixed;bottom:25px;left:25px;z-index:150";
element.appendChild(watermark);

//////////////////////////////////////////////////

initeksnimasi = teksnimasi.innerHTML;teksnimasi.innerHTML="";
function katateksnimasi(){
new TypeIt("#teksnimasi", {
 strings: ["" + initeksnimasi], startDelay: 50, speed: 55, cursor: true,
 afterComplete: function(){
   teksnimasi.innerHTML = initeksnimasi;
     setTimeout(smn,200);
 },}).go();
}

fungsi=0;fungsiklik=0;skrg=1;
function tes(){
if(fungsi==0){
playaud();
initom.style="opacity:0;bottom:0;";
window.scrollBy({top: tinggi,behavior: 'smooth'});
fungsi = 1;
skrg++;
//if(skrg<=2){setTimeout(smn,700);}
if(skrg==2){setTimeout(muncultombol,1200);}
if(skrg==4){initeksnimasi=initeksnimasi + "<b>" + rangeval.textContent + "</b> 🤭❤️";setTimeout(katateksnimasi,1300);}
if(skrg==5){setTimeout(muncultombol2,1200);}
if(skrg>=6){initom.style="opacity:0;bottom:0;";}
}
}
function smn(){fungsi=0;initom.style="";}
initom.style="opacity:0;bottom:0;transition:none";

function muncultombol(){fungtom=1;Tombol.style="opacity:1;transform:scale(1)";}
function muncultombol2(){Tombol2.style="opacity:1;transform:scale(1)";}

function aksiakhir() {
if(fungsiklik==0){
fungsiklik=1;
setTimeout(katajudul,100)
}
}

function katajudul(){
new TypeIt("#judulakhir", {
 strings: ["" + teksjudulakhir], startDelay: 50, speed: 50, cursor: true,
 afterComplete: function(){
   judulakhir.innerHTML = teksjudulakhir;
     setTimeout(katakata,400);
 },}).go();
}
function katakata(){
new TypeIt("#kalimatakhir", {
 strings: ["" + tekskalimatakhir], startDelay: 50, speed: 48, cursor: true,
 afterComplete: function(){
   kalimatakhir.innerHTML = tekskalimatakhir;
     judulakhir.style="opacity:0;transform:scale(0);";
     setTimeout(teksmuncul,350);
     setInterval(berjatuhan,200);
     setTimeout(kataakhir,1000);
 },}).go();
}
function teksmuncul(){
judulakhir.innerHTML=teksjudulakhir2;
judulakhir.style="font-family:var(--gaya-font3);font-size:27px";
//setTimeout(jjteksnim,300);
stikerakhir.style="opacity:0;transform:scale(0)";
setTimeout(gantifotoakhir,400);
}
function jjteksnim(){judulakhir.style.animation="rto .8s infinite alternate";}
function gantifotoakhir(){stikerakhir.src=stikerakhir2.src;stikerakhir.style="";}
function kataakhir(){
new TypeIt("#palingakhir", {
 strings: ["" + tekspalingakhir], startDelay: 50, speed: 50, cursor: true,
 afterComplete: function(){
   palingakhir.innerHTML = tekspalingakhir;
     setTimeout(muncultombol3,500);
 },}).go();
}
function muncultombol3(){fungtom2=1;TombolWA.style="opacity:1;transform:scale(1)";}
function menuju(){if(fungtom2==1){window.location = "https://wa.me/6282173946846?text=" + pesanwhatsapp;}}

tinggi = iniakhir.offsetHeight;
function tentukantinggi(){tinggi = iniakhir.offsetHeight;}
setInterval(tentukantinggi,200);
console.log(tinggi);

fungsiAud=0;function playaud(){if(fungsiAud==0){fungsiAud=1;audio.play();}}
function keatas(){window.scrollTo(0, 0);}

//window.addEventListener("load", (event) => {
function mulaiyuk(){
window.scrollTo(0, 0);
setTimeout(keatas,500);

var overlay = document.querySelector(".overlay");
overlay.style.display = "none";
initom.style="";
first_stiker.style="opacity:1;transition:all 2s ease";
ScrollReveal({ reset: true });
ScrollReveal().reveal(".show-once", { reset: false});
ScrollReveal().reveal(".title", {duration: 2500,origin: "top",distance: "50px", easing: "cubic-bezier(0.5, 0, 0, 1)", rotate: { x: 20, z: -10 }});
ScrollReveal().reveal(".fade-in", {delay: 200, duration: 2500,move: 0});
ScrollReveal().reveal(".scaleUp", {duration: 2500, scale: 0.85});
ScrollReveal().reveal(".flip", {delay: 200, duration: 2000, rotate: { x: 20, z: 20}});
ScrollReveal().reveal(".slide-right", {duration: 1000,origin: "left",distance: "300px",easing: "ease-in-out"});
ScrollReveal().reveal(".slide-up", {duration: 1500, origin: "bottom", distance: "100px", easing: "cubic-bezier(.37,.01,.74,1)", opacity: 0, scale: 0.5});

document.addEventListener('scroll', function(e) {
   let documentHeight = document.body.scrollHeight;
   let currentScroll = window.scrollY + window.innerHeight;
   let modifier = 200; 
   if(currentScroll + modifier > documentHeight) {
       console.log('Sudah sampai bawah!');
       initom.style="opacity:0;bottom:0";
       setTimeout(aksiakhir,10);
   } else {
       //initom.style="";
   }
})
//})
}
setTimeout(mulaiyuk,3000);