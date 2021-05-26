window.onload = function() {

  var W = 640,
  timeLength =4,
  sliderWidth = 31,
  widthCorrection = 1,
  first =320,

  second = W- first,


  slider1=(W-sliderWidth-widthCorrection)*0.1,
  move1=(slider1+(sliderWidth/2)),
  move2=(W-sliderWidth-widthCorrection)*(first/W)-slider1
  move3=(W-sliderWidth-widthCorrection)*((second)/W)-slider1,


  time1=timeLength*0.1
  time2=(timeLength*first/W)-time1
  time3=(timeLength*second/W)-time1,


    stage = document.getElementById("content_dc"),
    lab = 'start',
    tlBg = new TimelineMax({repeat: -1, paused: false}),
    tl = new TimelineMax({repeat: -1, paused: true}),
    master = new TimelineMax({repeat: -1, paused: true}),
    tlSlider = new TimelineMax({repeat: -1, paused: true}),
    infobox = false,
    up = true,
    dragVar = 0,
    sliderVar = new Draggable("#slider", {
      bounds: "#slider_outer",
      edgeResistance: 1,
      type: "x",
      onDrag: drag,
      edgeResistance: 1
    })

  TweenLite.ticker.fps(60);

  tlBg.addLabel(lab, 0)
    .to(stage, 0, {visibility: "visible"})
    .to(img1, 0, {opacity: 1}, '' + lab + '+=0')
    .to(slider, 0, {opacity: 1}, '' + lab + '+=0')
    .to(slider_line, 0, {opacity: 1}, '' + lab + '+=0')
    .to(img2_outer, 0, {opacity: 1}, '' + lab + '+=0')
    .to(img2, 0, {opacity: 1}, '' + lab + '+=0')

  lab = 'idle'
  tlSlider.addLabel(lab, "+=0")
    .to(slider, 2, {scale: 1}, '' + lab + '+=0')
  lab = 'idle_end'
  tlSlider.addLabel(lab, "+=0")

  lab = 'blink'
  tlSlider.addLabel(lab, "+=0")
    .to(slider, 0.3, {scale: 1.25}, '' + lab + '+=0')
    .to(slider, 0.3, {scale: 1}, '' + lab + '+=0.3')
    .to(slider, 0.3, {scale: 1.25}, '' + lab + '+=0.6')
    .to(slider, 0.3, {scale: 1}, '' + lab + '+=0.9')
  lab = 'blink_end'
  tlSlider.addLabel(lab, "+=0")

  lab = 'start';
  tl.addLabel(lab, 0)
    .to(slider, time1, {x: '+='+slider1, ease: Linear.easeNone}, '' + lab + '+=0')
    .to(slider_line, time1, {x: '+='+move1, ease: Linear.easeNone}, '' + lab + '+=0')
    .to(img2_outer, time1, {x: '+='+move1, ease: Linear.easeNone}, '' + lab + '+=0')
    .to(img2, time1, {x: '-='+move1, ease: Linear.easeNone}, '' + lab + '+=0')

  lab = 'second';
  tl.addLabel(lab, '+=0')
    .to(slider, time2, {x: '+='+move2, ease: Linear.easeNone}, '' + lab + '+=0')
    .to(slider_line, time2, {x: '+='+move2, ease: Linear.easeNone}, '' + lab + '+=0')
    .to(img2_outer, time2, {x: '+='+move2, ease: Linear.easeNone}, '' + lab + '+=0')
    .to(img2, time2, {x: '-='+move2, ease: Linear.easeNone}, '' + lab + '+=0')

  lab = 'center';
  tl.addLabel(lab, '+=0')
    .to(slider, time3, {x: '+='+move3, ease: Linear.easeNone}, '' + lab + '+=0')
    .to(slider_line, time3, {x: '+='+move3, ease: Linear.easeNone}, '' + lab + '+=0')
    .to(img2_outer, time3, {x: '+='+move3, ease: Linear.easeNone}, '' + lab + '+=0')
    .to(img2, time3, {x: '-='+move3, ease: Linear.easeNone}, '' + lab + '+=0')

    lab = 'forth';
    tl.addLabel(lab, '+=0')
      .to(slider, time1, {x: '+='+slider1, ease: Linear.easeNone}, '' + lab + '+=0')
      .to(slider_line, time1, {x: '+='+move1, ease: Linear.easeNone}, '' + lab + '+=0')
      .to(img2_outer, time1, {x: '+='+move1, ease: Linear.easeNone}, '' + lab + '+=0')
      .to(img2, time1, {x: '-='+move1, ease: Linear.easeNone}, '' + lab + '+=0')

  lab = 'end';
  tl.addLabel(lab, '+=0')

  master
    .add(tl.tweenFromTo("start", "center", {ease: "power1"}))
    .add(tlSlider.tweenFromTo("idle", "idle_end"))
    .add(tlSlider.tweenFromTo("blink", "blink_end"))
    .add(tlSlider.tweenFromTo("idle", "idle_end"))
    .add(tlSlider.tweenFromTo("blink", "blink_end"))
    .add(tlSlider.tweenFromTo("idle", "idle_end"))
    .add(tlSlider.tweenFromTo("idle", "idle_end"))
    .add(tl.tweenFromTo("center", "end", {onComplete: turnBack, ease: "power1"}))
    .add(tl.tweenFromTo("end", "start", {onComplete: turnOnInfo, ease: "power1"}))
    .add(tl.tweenFromTo("start", "center", {ease: "power1"}))
    .add(tlSlider.tweenFromTo("idle", "idle_end"))
    .add(tlSlider.tweenFromTo("blink", "blink_end"))
    .add(tlSlider.tweenFromTo("idle", "idle_end"))
    .add(tlSlider.tweenFromTo("blink", "blink_end"))
    .add(tlSlider.tweenFromTo("idle", "idle_end"))
    .add(tlSlider.tweenFromTo("idle", "idle_end"))
    .add(tl.tweenFromTo("center", "start", {onComplete: turnOffInfo, ease: "power1"}))
    .play(2)


  function drag() {
    dragVar++;
    var dragCompare = dragVar;
    tlSlider.play('blink');
    tlSlider.pause();
    master.pause();

    var position = document.getElementById("slider").getBoundingClientRect().left - document.getElementById("content_dc").getBoundingClientRect().left;

    if (position / (W - sliderWidth-widthCorrection) > 1) { tl.seek(timeLength-0.001) }
    else if (position / (W - sliderWidth) < 0) { tl.seek(0) }
    else { tl.seek(4 * position / (W - sliderWidth)) }
    if (position < W / 10 && infobox && !up) turnOnInfo()
    if (W - position < W / 10 * 6 && up) turnBack()
    if (position < W / 10 && !infobox && !up) turnOffInfo()

    setTimeout(function() {
      if (dragVar == dragCompare) {
        tl.reverse(tl.time());
        tl.eventCallback("onReverseComplete", replay);
      }
    }, 6000);
  }

  function turnOnInfo() {
    document.getElementById("info_box").style.opacity = "1";
    document.getElementById("slider_outer").style.width = (first+(sliderWidth/2))+"px";
    up = true;
    sliderVar.update();
  }

  function turnBack() {
    up = false;
    infobox = !infobox;
    sliderVar.update();
  }

  function turnOffInfo() {
    document.getElementById("info_box").style.opacity = "0";
    document.getElementById("slider_outer").style.width = W+"px";
    up = true;
    sliderVar.update();
  }

  function replay() {
      tl.eventCallback("onReverseComplete", null);
      turnOffInfo()
      infobox = false
      up = true
      dragVar = 0
      master.play(false, false);
  }

}
