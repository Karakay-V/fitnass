const secondPopup = document.querySelector('.second_popup');

function showSecondPopupFunc () {
  secondPopup.classList.add('activeSecondPopup');
}

var totalImages = 74; // Wow, so many images for such a short clip
var images = [];
for(var i = 1; i < totalImages + 1; i++) {
    var filename = '0';
  if(i < 10) filename += '00';
  else if(i < 100) filename += '0';
  filename += i + '.jpg';
  var img = new Image;
  img.src = '../slides/secondTheme/' + filename;
  images.push(img);
  console.log(filename)
}
var canv = document.getElementById('background');
var context = canv.getContext('2d');


var currentLocation = 0;

var setImage = function (newLocation) {
  context.drawImage(images[newLocation], 0, 0, 1280, 720);
}
var wheelDistance = function(evt){
  if (!evt) evt = event;
  var w=evt.wheelDelta, d=evt.detail;
  if (d){
    if (w) return w/d/40*d>0?1:-1; // Opera
    else return -d/3;              // Firefox;         TODO: do not /3 for OS X
  } else return w/120;             // IE/Safari/Chrome TODO: /3 for Chrome OS X
};
var wheelDirection = function(evt){
  if (!evt) evt = event;
  return (evt.detail<0) ? 1 : (evt.wheelDelta>0) ? 1 : -1;
};

var MouseWheelHandler = function (e) {
  e.preventDefault(); // No scroll

  // The following equation will return either a 1 for scroll down
  // or -1 for a scroll up
  var distance = wheelDistance(e);
  var direction = wheelDirection(e);
  
  // This code mostly keeps us from going too far in either direction
  currentLocation -= Math.round(distance*3);
  if(currentLocation < 0) currentLocation = 0;
  if(currentLocation >= images.length)
  currentLocation = images.length - 1;
  // See below for the details of this function
  if(currentLocation === 73) {
    showSecondPopupFunc()
  };
  console.log("currentLocation", currentLocation, distance);
  setImage(currentLocation);
};
var canvasFillWin = function(e) {
  var h = 1080;
  var w = 1920;
  var ratio = h/w;
  var winW = $(window).width();
  var winH = $(window).height();
  var winRatio = winH / winW;
  
  if(winRatio > ratio) {
    $(canv)
      .width(winH / ratio)
      .height(winH)
      .css({
      	marginLeft: - winH / ratio / 2 + "px",
      	left: "50%",
      	top: "0",
      	marginTop: "0"
      });
  } else {
    $(canv)
      .width(winW)
      .height(winW * ratio)
      .css({
      	marginLeft: "0",
      	left: "0",
      	top: "50%",
      	marginTop: - winW * ratio / 2 + "px"
      });
  }
  
}
// IE9, Chrome, Safari, Opera
window.addEventListener("mousewheel", MouseWheelHandler, false);
// Firefox
window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
window.addEventListener("resize", canvasFillWin, false);
setImage(4);
canvasFillWin();