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


