(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.cta_bg = function() {
	this.initialize(img.cta_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.img1 = function() {
	this.initialize(img.img1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,308);


(lib.light = function() {
	this.initialize(img.light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,55,72);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// text1
	this.text1_2 = new cjs.Text("weichster Komfort", "26px 'Gotham Rounded Bold'", "#00B2A9");
	this.text1_2.name = "text1_2";
	this.text1_2.textAlign = "center";
	this.text1_2.lineHeight = 31;
	this.text1_2.lineWidth = 156;
	this.text1_2.parent = this;
	this.text1_2.setTransform(80,33.55);

	this.text1_1 = new cjs.Text("Unser", "26px 'Gotham Rounded Bold'", "#00B2A9");
	this.text1_1.name = "text1_1";
	this.text1_1.textAlign = "center";
	this.text1_1.lineHeight = 37;
	this.text1_1.lineWidth = 156;
	this.text1_1.parent = this;
	this.text1_1.setTransform(80,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text1_1},{t:this.text1_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.text1, new cjs.Rectangle(0,0,160,129.5), null);


(lib.hotspot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// hotspot
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#707070").ss(0.5,2,0,3).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(81,301);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,162,602);


(lib.cta_symbol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cta_text
	this.cta_text = new cjs.Text("Mehr erfahren", "13px 'Gotham Rounded Bold'", "#FFFFFF");
	this.cta_text.name = "cta_text";
	this.cta_text.textAlign = "center";
	this.cta_text.lineHeight = 16;
	this.cta_text.lineWidth = 136;
	this.cta_text.parent = this;
	this.cta_text.setTransform(70,2);

	this.timeline.addTween(cjs.Tween.get(this.cta_text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cta_symbol, new cjs.Rectangle(0,0,140,20), null);


(lib.cta_button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cta_button
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ApLB8Qg0ABglglQgkglAAgzQAAgzAkgkQAlgkA0AAISYAAQAzAAAkAkQAlAkAAAzQAAAzglAlQgkAlgzgBg");
	this.shape.setTransform(71.3,12.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,142.6,24.9);


// stage content:
(lib.Pampers_POX_Emotional_static_anim_160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		console.log(this);
		
		//enable text gradient 
		textGradient();
		
		// position = {fromX:-50, fromY:-50, toX:50, toY:50}
		var gradientPosition = {fromX:-80, fromY:0, toX:80, toY:0};
		
		// stops = {"0": "#ffffff", "1": "#000000"};
		var gradientStops = {"0": "#b38b1f", "0.25": "#c6a13b","0.5": "#efd07c", "0.75": "#c7a23d", "1": "#b38c1f"};
		
		var text1 = this.instance_3;
		var text1_1 = this.instance_3.text1_1;
		var text1_2 = this.instance_3.text1_2;
		var light = this.instance_4;
		var cta_text = this.instance_2.cta_text;
		
		//addGradient(text, "gradient_layer_name", {position}, {stops})
		addGradient(text1_2, "text1_2_gradient", gradientPosition, gradientStops);
		
		//addStroke(text, "stroke_layer_name", "#FFFFFF", width, alpha);
		addStroke(text1_1, "text1_1_stroke", "#FFFFFF", 2, 1);
		addStroke(text1_2, "text1_2_stroke", "#FFFFFF", 2, 1);
		
		// shadow = {color: "black", offsetX: 0, offsetY: 0, blur: 12}
		var shadowOnText1 = {color: "#565656", offsetX: 0, offsetY: 3, blur: 5};
		
		//addShadow(text, shadow, opacity, spread)
		addShadow(text1_1, "text1_1_shadow", shadowOnText1, 0.23, 4);
		addShadow(text1_2, "text1_2_shadow", shadowOnText1, 0.23, 4);
		
		var shadowOnCtaText = {color: "#604805", offsetX: 0, offsetY: 3, blur: 1};
		addShadow(cta_text, "cta_text_shadow", shadowOnCtaText, 0.38, 1);
		
		gsapFunction();
		
		function gsapFunction(){
		
		TweenLite.ticker.fps(60);
		
		var tl = new TimelineMax({repeat:-1, paused: false});
		
		var lab = 'lab1';
		tl.addLabel(lab)
		.to(light, 0, {opacity:1,x:'-=0'},''+lab+'+=0')	
		.to(light, 3, {opacity:1,x:'+=350px',ease:Power1.easeInOut},''+lab+'+=2')	
		.to(text1, 0.5, {scale:1.1,ease:Power1.easeOut},''+lab+'+=1')	
		.to(text1, 0.5, {scale:1,ease:Power1.easeInOut},''+lab+'+=1.5')	
		
		console.log(tl.duration());
		
		}
		
		
		(async function loadFont() {
		    const font = new FontFace('Gotham Rounded Bold', 'url(./fonts/GothamRounded-Bold/GothamRounded-Bold.otf)');
		    await font.load();
		    document.fonts.add(font);
		})();
		
		function addGradient(text, gradientName, gradientPosition, gradientStops){
			var parent = text.parent;
			parent[gradientName] = new GradientText("", "", gradientPosition, gradientStops);
			duplicateDynamicText(text, parent[gradientName]);
			parent[gradientName].gradient = true;
			parent[gradientName].alpha = 1;
			text.alpha = 0;
			parent.timeline.addTween(cjs.Tween.get(parent[gradientName]).wait(1));
		}
			
		function addStroke(text, strokeName, color, width, opacity){
			var parent = text.parent;
			parent[strokeName] = new cjs.Text("", "", color);
			duplicateDynamicText(text, parent[strokeName]);
			parent[strokeName].color = color;
			parent[strokeName].outline = width*2;
			parent[strokeName].alpha = opacity;
			parent.timeline.addTween(cjs.Tween.get(parent[strokeName]).wait(1));
		}
		
		function addShadow(text, shadowName, shadow, opacity, spread){
		
			if (text.parent.parent._rawPosition === 0) {
				for (i = 0; i < spread; i++) {
					var parent = text.parent;
					parent[shadowName] = new cjs.Text("", "", "#000000");
					duplicateDynamicText(text, parent[shadowName]);
					parent[shadowName].shadow = shadow;
					parent[shadowName].alpha = opacity;
					//parent[shadowName].outline = parent.text_stroke.ouline || 0;
					parent.timeline.addTween(cjs.Tween.get(parent[shadowName]).wait(1));
				}
				}
		}
		
		function duplicateDynamicText(text, text_effect) {
			text_effect.color = text.color;
			text_effect.outline = text_effect.outline;
			text_effect.shadow = text.shadow;
			text_effect.font = text.font;
			text_effect.lineHeight = text.lineHeight;
			text_effect.lineWidth = text.lineWidth;
			text_effect.text = text.text;
			text_effect.textAlign = text.textAlign;
			text_effect.textBaseline = text.textBaseline;
			text_effect.tickEnabled = text.tickEnabled;
			text_effect.x = text.x;
			text_effect.y = text.y;
			text_effect.regX = text.regX;
			text_effect.regY = text.regY;
			text_effect.scaleX = text.scaleX;
			text_effect.scaleY = text.scaleY;
			text_effect.alpha = text.alpha;
			text_effect.bitmapCache = text.bitmapCache;
			text_effect.cacheCanvas = text.cacheCanvas;
			text_effect.compositeOperation = text.compositeOperation;
			text_effect.cursor = text.cursor;
			text_effect.filters = text.filters;
			text_effect.hitArea = text.hitArea;
			text_effect.mask = text.mask;
			text_effect.maxWidth = text.maxWidth;
			text_effect.mouseEnabled = text.mouseEnabled;
			text_effect.rotation = text.rotation;
			text_effect.skewX = text.skewX;
			text_effect.skewY = text.skewY;
			text_effect.snapToPixel = text.snapToPixel;
			text_effect.transformMatrix = text.transformMatrix;
			text_effect.visible = text.visible;
		}
			
		function textGradient() {
			function GradientText(text, font, position, stops) {
				this.Text_constructor(text, font, "");
				this.gradientPosition = position;
				this.gradientStops = stops;
			}
		
			var p = createjs.extend(GradientText, cjs.Text);
			p._drawTextLine = function (ctx, text, y) {
				if (this.gradient) {
					var mygradient = ctx.createLinearGradient(
						gradientPosition.fromX, 
						gradientPosition.fromY, 
						gradientPosition.toX,
						gradientPosition.toY
					);
					for (var key in this.gradientStops) {
							mygradient.addColorStop(key, this.gradientStops[key]);
					}
					ctx.fillStyle = mygradient;
		            ctx.fillText(text, 0, y, this.maxWidth || 0xFFFF);
				} else {
					this.Text__drawTextLine(ctx, text, y);
				}
			};
		
			window.GradientText = createjs.promote(GradientText, "Text");
		};
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// cta_button
	this.instance = new lib.cta_button();
	this.instance.setTransform(80.2,534.7,1,1,0,0,0,71.3,12.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// hotspot
	this.instance_1 = new lib.hotspot();
	this.instance_1.setTransform(80,300,1,1,0,0,0,81,301);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#707070").ss(0.5,2,0,3).p("EgMfgu3IY/AAMAAABdvI4/AAg");
	this.shape.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// cta_symbol
	this.instance_2 = new lib.cta_symbol();
	this.instance_2.setTransform(80,537.4,1,1,0,0,0,70,10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// text1
	this.instance_3 = new lib.text1();
	this.instance_3.setTransform(80,230.3,1,1,0,0,0,80,64.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

	// light_mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgIfAqwQg0AAgkglQgkglAAgzQAAg0AkgkQAkglA0AAISYAAQA0AAAkAlQAkAkAAA0QAAAzgkAlQgkAlg0AAg");
	mask.setTransform(75.75,273.55);

	// light
	this.instance_4 = new lib.light();
	this.instance_4.setTransform(-55,502);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// cta_bg
	this.instance_5 = new lib.cta_bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

	// logo
	this.instance_6 = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1));

	// img
	this.instance_7 = new lib.img1();
	this.instance_7.setTransform(0,292);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

	// bg
	this.instance_8 = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(79,299,82,302);
// library properties:
lib.properties = {
	id: '1D834C92CE464BFDAE41B9933DCCF0DA',
	width: 160,
	height: 600,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/bg.jpg?1622009570394", id:"bg"},
		{src:"images/cta_bg.png?1622009570394", id:"cta_bg"},
		{src:"images/img1.jpg?1622009570394", id:"img1"},
		{src:"images/light.png?1622009570394", id:"light"},
		{src:"images/logo.png?1622009570394", id:"logo"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1D834C92CE464BFDAE41B9933DCCF0DA'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;