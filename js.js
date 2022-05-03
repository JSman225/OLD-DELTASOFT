var open = false;
var temp = false;
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
function myFunction(x) {
  x.classList.toggle("change");
if (!open){
//open
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
document.getElementById("menu-wrapper").style.visibility = "visible";
document.getElementById("menu-wrapper").style.opacity = "1";
if (temp){
document.getElementById("header").style.opacity = "0";
document.getElementById("header1").style.height = "15%";
}
open = true;
}
else if (open){
//close
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);

document.getElementById("menu-wrapper").style.opacity = "0";
document.getElementById("menu-wrapper").style.visibility = "hidden";
if (temp){
document.getElementById("header").style.opacity = ".85";
document.getElementById("header1").style.height = "10.2%"
}
open = false;
}
}
function changeCss () {

  this.scrollY > 5 ? document.getElementById("header").style.opacity = ".85" : document.getElementById("header").style.opacity = "0";
  this.scrollY > 5 ? temp = true : temp = false;
  this.scrollY > 5 ? document.getElementById("header1").style.height = "10.2%" : document.getElementById("header1").style.height = "15%";

}
window.addEventListener("scroll", changeCss , false);
function reveal() {
  var reveals = document.querySelectorAll(".mini-services-opacity");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
var slide = "5vw";
function line1(){
document.getElementById('mini-services-menu-underline').style.left = '5vw';
}
function line2(){
document.getElementById('mini-services-menu-underline').style.left = '30vw';
}
function line3(){
document.getElementById('mini-services-menu-underline').style.left = '55vw';
}
function line4(){
document.getElementById('mini-services-menu-underline').style.left = '80vw';
}
function reset(){
document.getElementById('mini-services-menu-underline').style.left = slide;
}
function slide1(){
document.getElementById('mini-slider').style.left = "0px";
slide = "5vw";
};
function slide2(){
document.getElementById('mini-slider').style.left = "-100vw";
slide = '30vw';
};
function slide3(){
document.getElementById('mini-slider').style.left = "-200vw";
slide = 3;
};
function slide4(){
document.getElementById('mini-slider').style.left = "-300vw";
slide = '80vw';
};


const user = netlifyIdentity.currentUser();
// Bind to events
netlifyIdentity.on('init', user => {
console.log(user.token.access_token);
});
netlifyIdentity.on('login', user => console.log('login', user));
netlifyIdentity.on('logout', () => console.log('Logged out'));
