var tl = new TimelineMax({repeat:-1});

window.onload = function(){

  function addHandler() {
      document.addEventListener('mousemove', timeLineSeek);
  }

  function removeHandler() {
    document.removeEventListener('mousemove', timeLineSeek);
  }

  function pausetl(){
  	tl.pause();
  }

  function resumetl(){
  	tl.resume();
  }

  function resumePause(){
    var remainingTime = tl.duration()-tl.time();
    setTimeout(function(){
      removeHandler();
      framePreview = true;
      tl.resume();
      remainingTime = tl.duration()-tl.time();
      setTimeout(function(){
        framePreview = false;
        tl.pause();
          addHandler();
          resumePause();
      }, remainingTime*1000);
     }, 10000);
  }

var framePreview = true;
var W = 600;
var H = 400;
var stage = document.getElementById("content_dc");
var lab = 'start';
var tlBg = new TimelineMax({repeat:-1, paused:false})
var tl = new TimelineMax({repeat:-1, paused:(framePreview) ? true : false});
var timeLineSeek = e => {tl.seek(((e.pageX > W) ? W : e.pageX)/W* 1)};

TweenLite.ticker.fps(60);

tlBg
.addLabel(lab,0.0)
.to(stage, 0, {visibility:"visible"})
.to(img2, 0, {opacity:1},''+lab+'+=0')
.to(slider, 0, {opacity:1},''+lab+'+=0')
.to(img1_outer, 0, {opacity:1},''+lab+'+=0')
.to(img1, 0, {opacity:1},''+lab+'+=0')
.to(text2, 0, {opacity:1},''+lab+'+=0')
.to(logo_small, 0, {opacity:1},''+lab+'+=0')

lab = 'slider';
tl
.addLabel(lab,0.0)
.to(text3, 0, {scale:0.2, x:"-=0", y:"-=0", opacity: 0},''+lab+'+=0')
.to(slider, 1, {x:'+=600',ease:Linear.easeNone},''+lab+'+=0')
.to(img1_outer, 1, {x:'+=600',ease:Linear.easeNone},''+lab+'+=0')
.to(img1, 1, {x:'-=600',ease:Linear.easeNone},''+lab+'+=0')

lab = 'end';
tl
.addLabel(lab,1)
.to(text2, 1, {scale:0.2, x:"-=100", y:"-=40", opacity: 0, ease:Power1.easeOut},''+lab+'+=0')
.to(text3, .5, {scale:1.1, x:"+=0", y:"+=0", opacity: 1, ease:Power1.easeOut},''+lab+'+=0')
.to(text3, .15, {scale:1, x:"+=0", y:"+=0", opacity: 1, ease:Power1.easeIn},''+lab+'+=.6')
.to(white, 1, {opacity: 1, ease:Power1.easeOut},''+lab+'+=4')
.to(logo, .5, {opacity: 1, ease:Power1.easeOut},''+lab+'+=4.4')
.to(slider, 0, {x:'-=600'},''+lab+'+=6')
.to(img1_outer, 0, {x:'-=600'},''+lab+'+=6')
.to(img1, 0, {x:'+=600'},''+lab+'+=6')
.to(text2, 0, {scale:1, x:"+=100", y:"+=40", opacity: 1},''+lab+'+=6')
.to(text3, 0, {opacity: 0},''+lab+'+=6')
.to(white, .5, {opacity: 0, ease:Power1.easeOut},''+lab+'+=7.5')
.to(logo, .5, {opacity: 0, ease:Power1.easeOut},''+lab+'+=7.5')

addHandler();
resumePause();
console.log(tl.duration());

}
