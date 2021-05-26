var tl = new TimelineMax({repeat:-1});

window.onload = function(){

var stage = document.getElementById("content_dc"),
tl = new TimelineMax({repeat:-1, paused:false}),
lab = 'prepare';

TweenLite.ticker.fps(60);

tl.to(stage, 0, {visibility:"visible"})

.addLabel(lab,0.0)
.to(phones0, 0, {x:'-=100px',y:'-=415px'},''+lab+'+=0')
.to(phones4, 0, {x:'+=2295px',y:'-=1193.18px'},''+lab+'+=0')
.to(phones1, 0, {x:'-=900px',y:'+=57.94px'},''+lab+'+=0')
.to(phones5, 0, {x:'-=3295px',y:'+=836.12px'},''+lab+'+=0')
.to(phones2, 0, {x:'-=100px',y:'+=10px'},''+lab+'+=0')
.to(phones6, 0, {x:'+=2295px',y:'-=768.18px'},''+lab+'+=0')
.to(phones3, 0, {x:'-=100px',y:'+=220px'},''+lab+'+=0')
.to(phones7, 0, {x:'-=2495px',y:'+=998.18px'},''+lab+'+=0')

lab = 'scene1';
tl.addLabel(lab,'+=0.0')
.to('.phones.right', 3.5, {x:'+=1300px',y:'-=422.40px', ease: SlowMo.ease.config(0.6, 0.9, false)},''+lab+'+=0')
.to('.phones.left', 3.5, {x:'-=1300px',y:'+=422.40px', ease: SlowMo.ease.config(0.6, 0.9, false)},''+lab+'+=0')


lab = 'scene2';
tl.addLabel(lab,'+=0.0')
.to('.phones.right', 2, {x:'+=1095',y:'-=355,79', ease: SlowMo.ease.config(0.8, 0.3, false)},''+lab+'+=0')
.to('.phones.left', 2, {x:'-=1095',y:'+=355,79', ease: SlowMo.ease.config(0.8, 0.3, false)},''+lab+'+=0')

console.log(tl.duration());

}
