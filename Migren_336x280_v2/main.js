var tl = new TimelineMax({repeat:-1});

window.onload = function(){

var framePreview =false;
var W = 338;
var H = 280;
var stage = document.getElementById("content_dc");
var tl = new TimelineMax({repeat:-1, paused:(framePreview) ? true : false});
var lab = 'start';

TweenLite.ticker.fps(60);

tl
.to(stage, 0, {visibility:"visible"})

tl
.addLabel(lab,0.0)
.to(img1, 0, {opacity:1},''+lab+'+=0')
.to(img1, 0, {y:'-=120px'},''+lab+'+=0')
.to(img2, 0, {y:'-=120px'},''+lab+'+=0')
.to(img1, 3, {y:'+=120px',ease: Power1.easeOut},''+lab+'+=0')
.to(img2, 3, {y:'+=120px',ease: Power1.easeOut},''+lab+'+=0')
.to(img2, 1, {opacity:1},''+lab+'+=2')
.to(logo_small, 1, {opacity:1},''+lab+'+=2')
.to(text1, 0, {y:'+=22'},''+lab+'+=2')
.to(text1, 1, {y:'-=22',opacity:1},''+lab+'+=2')
.to(text2, 0, {y:'+=22'},''+lab+'+=2')
.to(text2, 1, {y:'-=22',opacity:1},''+lab+'+=2.3')

lab = 'yellow';
tl.
addLabel(lab, '+=2')
.to(text1, .8, {opacity:0},''+lab+'+=0')
.to(text2, .8, {opacity:0},''+lab+'+=0')
.to(yellowbg, 1.5, {opacity:1}, ''+lab+'+=0.5')
.to(text6, 0, {scale:0.5},''+lab+'+=0')
.to(text6, 0.75, {scale:1.1,opacity:1, ease:Power1.easeOut},''+lab+'+=1')
.to(text6, 0.5, {scale:1, ease:Power1.easeOut},''+lab+'+=1.75')
.to(text6, 0.5, {scale:1.2,opacity:0},''+lab+'+=3')
.to(pill, 0, {scale:0.5, opacity:0, rotation:-10,transformOrigin: 'center center'},''+lab+'+=0')
.to(pill, 1, {scale:1.1, opacity:1},''+lab+'+=3')
.to(pill, .5, {scale:1, opacity:1},''+lab+'+=4')
.to(pill, 3, {rotation:3,transformOrigin: 'center center', ease:Linear.easeNone},''+lab+'+=3')
.to(yellowcircle2, 0, {opacity:1}, ''+lab+'+=0')
.to(yellowcircle3, 0, {opacity:1}, ''+lab+'+=0')
.to(yellowcircle1, 1, {opacity:1}, ''+lab+'+=0')
.to(yellowcirclestart, .2, {opacity:1}, ''+lab+'+=0')
.to(yellowcirclestart, .1, {opacity:0}, ''+lab+'+=2')
.to(yellowcircleend, .2, {opacity:1}, ''+lab+'+=0')
.to(yellowcircleend, .1, {opacity:0}, ''+lab+'+=2')
.to(yellowcircle2, 1, {rotation:180,transformOrigin: '168px 168px', ease:Linear.easeNone},''+lab+'+=0')
.to(yellowcircle3, 1, {rotation:-180,transformOrigin: '168px 168px', ease:Linear.easeNone},''+lab+'+=0')
.to(yellowcircle4, 0, {opacity:1}, ''+lab+'+=1')
.to(yellowcircle5, 0, {opacity:1}, ''+lab+'+=1')
.to(yellowcircle6, 0, {opacity:1}, ''+lab+'+=1')
.to(yellowcircle5, 1, {rotation:180,transformOrigin: '168px 0px', ease:Linear.easeNone},''+lab+'+=1')
.to(yellowcircle6, 1, {rotation:-180,transformOrigin: '168px 168px', ease:Linear.easeNone},''+lab+'+=1')
.to(yellowcircleend, 2, {rotation:360,transformOrigin: '168px 140px', ease:Linear.easeNone},''+lab+'+=0')

lab = 'three';
tl
.addLabel(lab,'+=0')
.to(bg, 0.5, {opacity:1,ease:Power1.easeOut},''+lab+'+=0')
.to(kockazat, 0, {y:'+=22'},''+lab+'+=0.2')
.to(kockazat, 0.5, {y:'-=22',opacity:1},''+lab+'+=0.2')
.to(pack, 1, {opacity:1,ease:Power1.easeOut},''+lab+'+=0')
.to(text5, 0, {y:'-=11'},''+lab+'+=1')
.to(text5, 0.5, {y:'+=11',opacity:1},''+lab+'+=1')
.to(pack, 0.5, {opacity:0,ease:Power2.easeOut},''+lab+'+=2')
.to(text5, 0.5, {opacity:0,ease:Power2.easeOut},''+lab+'+=2')

lab = 'four';
tl
.addLabel(lab,'+=0')
.to(text3, 0, {y:'-=0'},''+lab+'+=0')
.to(text3, 1, {y:'+=0',opacity:1},''+lab+'+=0')
.to(text4, 0, {y:'-=0'},''+lab+'+=0.25')
.to(text4, 1, {y:'+=0',opacity:1},''+lab+'+=0.25')
.to(legal, 0, {y:'-=0'},''+lab+'+=0.5')
.to(legal, 1, {y:'+=0',opacity:1},''+lab+'+=0.5')

lab = 'five';
tl
.addLabel(lab,'+=3')
.to(text3, 0.5, {opacity:0},''+lab+'+=0')
.to(text4, 0.5, {opacity:0},''+lab+'+=0')
.to(legal, 0.5, {opacity:0},''+lab+'+=0')
.to(logo_small, 0.5, {opacity:0},''+lab+'+=0')

lab = 'logo';
tl
.addLabel(lab,'+=0')
.to(logo, 0.5, {scale:1,opacity:1,ease:Power2.easeIn},''+lab+'+=0.0')
.to(cta, 0.5, {opacity:1},''+lab+'+=1')
.to(cta, 0.5, {opacity:1},''+lab+'+=4')


console.log(tl.duration());

}
