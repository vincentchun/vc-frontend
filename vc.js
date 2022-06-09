/* vc.js version 2020.08.11, Copyright: Vincent G. Chun, VC Learning. Used under license.*/

// Initiation
/* To run function when page loaded:
document.addEventListener('readystatechange', (event) => {
  if (document.readyState === 'interactive') {

  }
});
 */
function elmnt(query, n=0){
	return document.querySelectorAll(query)[n];
}
function elmnts(query){
	return document.querySelectorAll(query);
}

//addclass, remclass, toggleclass(on/off): el.classList.add(''), el.classList.remove(), el.classList.toggle()
//Add class
function addClass(el, toAdd) {
	el.classList.add(toAdd);
}
//Remove class
function remClass(el, toRem) {
	el.classList.remove(toRem);
}
//Toggle class
function togClass(el, toTog) {
	el.classList.toggle(toTog);
}

//Add class by query
function addClassq(sel, toAdd) {
	el = document.querySelector(sel);
	el.classList.add(toAdd);
}
//Remove class by query
function remClassq(sel, toRem) {
	el = document.querySelector(sel);
	el.classList.remove(toRem);
}
//Toggle class by query
function togClassq(sel, toTog) {
	el = document.querySelector(sel);
	el.classList.toggle(toTog);
}

//Adds first class, removes second
function classAddRem(elmnt, toAdd, toRem) {
  elmnt.classList.remove(toRem);
  elmnt.classList.add(toAdd);
}
//classAddRem by query selector
function classAddRemq(sel, toAdd, toRem) {
  el = document.querySelector(sel);
  classAddRem(el, toAdd, toRem);
}

//Cycles through classes
function cycleClass(elmnt, classes) {
  var i, n, l=classes.length; 
  for (i=0; i<l; i++){
    if (elmnt.classList.contains(classes[i])){
      elmnt.classList.remove(classes[i]);
      if (i<l-1){
        n=i+1;
      }
      else {
        n=0;
      }
      elmnt.classList.add(classes[n]);
      break;
    }
  }
}
//cycleClass by query selector
function cycleClassq(sel, classes) {
  el = document.querySelector(sel);
  cycleClass(el, classes);  
}

// Show, hide, toggle display of element
function hide(elmnt) {
  elmnt.style.display = "none";
}

function show(elmnt) {
  elmnt.style.display = "block";
}

function toggle(elmnt) {
  if (elmnt.style.display == "none") {
    show(elmnt);
  } else {
    hide(elmnt);
  }
}

// Show, hide, toggle display by css query
function hideq(sel) {
  el = document.querySelector(sel);
  hide(el);
}

function showq(sel) {
  el = document.querySelector(sel);
  show(el);
}

function toggleq(sel) {
  el = document.querySelector(sel);
  toggle(el);
}

// Show/hide multiple
function hideAll(elmnts) {
  var i, l=elmnts.length;
  for (i=0; i<l; i++) {
    elmnts[i].style.display = "none";
  }
}

function showAll(elmnts) {
  var i, l=elmnts.length;
  for (i=0; i<l; i++) {
    elmnts[i].style.display = "block";
  }
}

function toggleAll(elmnts) {
  var i, l=elmnts.length;
  for (i=0; i<l; i++) {
    if (elmnts[i].style.display == "none") {
      elmnts[i].style.display = "block";
    } else {
      elmnts[i].style.display = "none";
    }
  }
}

// Show/hide all by selector
function hideqAll(sel) {
  el = document.querySelectorAll(sel);
  hideAll(el);
}

function showqAll(sel) {
  el = document.querySelectorAll(sel);
  showAll(el);
}

function toggleqAll(sel) {
  el = document.querySelectorAll(sel);
  toggleAll(el);
}

// Opacity & position show, hide, toggle
function ohide(elmnt) {
  elmnt.style.position = "absolute";
  elmnt.style.opacity = 0;
  elmnt.style.zIndex = -9;
}

function oshow(elmnt) {
  elmnt.style.position = "static";
  elmnt.style.opacity = 1;
  elmnt.style.zIndex = 1;
}

function otoggle(elmnt) {
  if (elmnt.style.opacity == 0) {
    oshow(elmnt);
  } else {
    ohide(elmnt);
  }
}

// oshow, ohide, otoggle display by css query
function ohideq(sel) {
  el = document.querySelector(sel);
  ohide(el);
}

function oshowq(sel) {
  el = document.querySelector(sel);
  oshow(el);
}

function otoggleq(sel) {
  el = document.querySelector(sel);
  otoggle(el);
}

// Visibility (show, hide, toggle by opacity)
function invis(elmnt) {
  elmnt.style.opacity = 0;
  elmnt.style.zIndex = -1;
}

function vis(elmnt) {
  elmnt.style.opacity = 1;
  elmnt.style.zIndex = 1;
}

function togvis(elmnt) {
  if (elmnt.style.opacity == 0) {
    vis(elmnt);
  } else {
    invis(elmnt);
  }
}

// Visibility by css query
function invisq(sel) {
  el = document.querySelector(sel);
  invis(el);
}

function visq(sel) {
  el = document.querySelector(sel);
  vis(el);
}

function togvisq(sel) {
  el = document.querySelector(sel);
  togvis(el);
}

// Remove by Id - used by popout functions to remove closer
function removeById(id) {
  el = document.querySelector(`#${id}`);
  el.parentNode.removeChild(el);
}

// Pop Out '.pop' elements
// Initiate CSS, hide .pop elements & closer style
function popoutInit() {
  var els = document.querySelectorAll('.pop'), l=els.length, text;
  text = `<style>#closer {position:fixed; top:0; bottom:0; left:0; right:0; background:rgba(0,0,0,0.1); z-index:1;} .pop {z-index:2; display:none;} .out {position:absolute;} .up {position:fixed; top:10%; bottom:10%; left:10%; right:10%; margin:auto;}</style>`;
  els[0].insertAdjacentHTML('beforebegin', text);
}

// 'pop()' function, eg: onclick="pop('#id')" to pop out selected element
function pop(sel) {
  el = document.querySelector(sel);
  show(el);
  eid = el.id;
  closer = `<div id="closer" onclick="hideq('#${eid}'); removeById('closer')"></div>`;
  el.insertAdjacentHTML('beforebegin', closer);
}

// Popout next sibling: onClick='popnext(this)' - pops out next sibling 
function popnext(el) {
  toggle(el.nextElementSibling);
}

// Popout next sibling w closer: onClick='popnextwc(this)' - ensure sibling has class 'pop' & id attribute
function popnextwc(el) {
  show(el.nextElementSibling);
  eid = el.nextElementSibling.id;
  closer = `<div id="closer" onclick="hideq('#${eid}'); removeById('closer')"></div>`;
  el.insertAdjacentHTML('beforebegin', closer);
}

//--------
// Content Sliders
var slides={}, ind={}, timer={}; // Declare global variables for sliders 

// Basic slider - toggle display
function initiateSliders(sliderIds) {
  var i=0, l=sliderIds.length;
  for (i=0; i<l; i++) {
    sliderInit(sliderIds[i]);
    slidectrls(sliderIds[i]);
  }
}

// No-loop sliders
function initiateNLSliders(sliderIds) {
  var i=0, l=sliderIds.length;
  for (i=0; i<l; i++) {
    sliderInit(sliderIds[i]);
    slidectrlsnl(sliderIds[i]);
 }
}

// Automatic Periodic Sliders - eg, autosliderIds = [['id',5000]]
function initiateAutoSliders(autosliderIds) {
  var i=0, l=autosliderIds.length;
  for (i=0; i<l; i++) {
    sliderInit(autosliderIds[i][0]);
    autoslidectrls(autosliderIds[i]);
    autoslider(autosliderIds[i]);
  }
}

function autoslider(autosliderId) {
  var id=autosliderId[0], time=autosliderId[1];
  timer[id] = setInterval(function(){slidenext(id);}, time);
}

// Stop/Restart Timers
function stopTimer(timerId){
	clearInterval(timer[timerId]);
	timer[timerId] = null;
}

function slideTimeReset(autosliderId) {
	if (timer[autosliderId[0]]) {
		stopTimer(autosliderId[0]);
		autoslider(autosliderId);
	}
}

function slideStopStart(autosliderId) {
	if (timer[autosliderId[0]]) {
		stopTimer(autosliderId[0]);
	} else {
		autoslider(autosliderId);
	}
}

function sliderInit(sliderId) {
  slides[sliderId] = document.querySelectorAll(`#${sliderId} > *`);
  var l = slides[sliderId].length;
  ind[sliderId] = 0;
  for (i=1; i<l; i++) {
    hide(slides[sliderId][i]);
  }
}

// Slide transition fuctions
function slidenext(sliderId) {
  var l = slides[sliderId].length;
  hide(slides[sliderId][ind[sliderId]]);
  ind[sliderId]++;
  if (ind[sliderId] >= l) {ind[sliderId]=0;}
  show(slides[sliderId][ind[sliderId]]);
}

function slideprev(sliderId) {
  var l = slides[sliderId].length;
  hide(slides[sliderId][ind[sliderId]]);
  ind[sliderId]--;
  if (ind[sliderId] < 0) {ind[sliderId]=l-1;}
  show(slides[sliderId][ind[sliderId]]);
}

// -- No loop controls
function slidenextnl(sliderId) {
  var l = slides[sliderId].length;
  if (ind[sliderId] >= l-1){return;} // - disable loop
  hide(slides[sliderId][ind[sliderId]]);
  ind[sliderId]++;
  if (ind[sliderId] >= l) {ind[sliderId]=0;}
  show(slides[sliderId][ind[sliderId]]);
}

function slideprevnl(sliderId) {
  var l = slides[sliderId].length;
  if (ind[sliderId] <= 0){return;} // - disable loop
  hide(slides[sliderId][ind[sliderId]]);
  ind[sliderId]--;
  if (ind[sliderId] < 0) {ind[sliderId]=l-1;}
  show(slides[sliderId][ind[sliderId]]);
}

// Inserting Slide Controls
function slidectrls(sliderId) {
  var slider, ctrls;
  slider = document.getElementById(sliderId);
  html = `<div class="slidectrl"><a href="javascript:void(0)" onclick="slideprev('${sliderId}');" class="prev" > &lt; </a> &nbsp; <a href="javascript:void(0)" onclick="slidenext('${sliderId}');" class="next" > &gt; </a></div>`;
  slider.insertAdjacentHTML('afterend', html);
}

// -- Auto Slider Controls
function autoslidectrls(autosliderId) {
  var slider, slidarray=`['${autosliderId[0]}',${autosliderId[1]}]`;
  slider = document.getElementById(autosliderId[0]);
  html = `<div class="slidectrl"><span onclick="slideprev('${autosliderId[0]}'); slideTimeReset(${slidarray});" class="prev" title="previous"> &lt; </span> 
  <span onclick="slideStopStart(${slidarray})" title="pause">||</span> 
  <span onclick="slidenext('${autosliderId[0]}'); slideTimeReset(${slidarray});" class="next" title="next"> &gt; </span></div>`;
  slider.insertAdjacentHTML('afterend', html);
}

// -- No-loop slide controls
function slidectrlsnl(sliderId) {
  var slider, ctrls;
  slider = document.getElementById(sliderId);
  html = `<div class="slidectrl"><a href="javascript:void(0)" onclick="slideprevnl('${sliderId}');" class="prev" > &lt; </a> &nbsp; <a href="javascript:void(0)" onclick="slidenextnl('${sliderId}');" class="next" > &gt; </a></div>`;
  slider.insertAdjacentHTML('afterend', html);
}

//--
// Transient slider - change opacity
function initiateTrSliders(sliderIds) {
  var i=0, l=sliderIds.length;
  for (i=0; i<l; i++) {
    trSliderInit(sliderIds[i]);
    trslidectrls(sliderIds[i]);
  }
}

// No-loop sliders
function initiateNLTrSliders(sliderIds) {
  var i=0, l=sliderIds.length;
  for (i=0; i<l; i++) {
    trSliderInit(sliderIds[i]);
    trslidectrlsnl(sliderIds[i]);
 }
}

// Automatic Periodic Sliders - eg, autosliderIds = [['id',5000]]
function initiateAutoTrSliders(autosliderIds) {
  var i=0, l=autosliderIds.length;
  for (i=0; i<l; i++) {
    trSliderInit(autosliderIds[i][0]);
    autotrslidectrls(autosliderIds[i]); //remove [0]
    autoTrSlider(autosliderIds[i]);
  }
}

function autoTrSlider(autosliderId) {
  var id=autosliderId[0], time=autosliderId[1];
  timer[id] = setInterval(function(){trslidenext(id);}, time);
}

function trSliderInit(sliderId) {
  slides[sliderId] = document.querySelectorAll(`#${sliderId} > *`);
  var l = slides[sliderId].length;
  ind[sliderId] = 0;
  for (i=1; i<l; i++) {
    classAddRem(slides[sliderId][i], "slideoff", "slideon");//+
    invis(slides[sliderId][i]); //invis <-> ohide
  }
}

// Stop/Start Transient Sliders
function trslideTimeReset(autosliderId) {
	if (timer[autosliderId[0]]) {
		stopTimer(autosliderId[0]);
		autoTrSlider(autosliderId);
	}
}

function trslideStopStart(autosliderId) {
	if (timer[autosliderId[0]]) {
		stopTimer(autosliderId[0]);
	} else {
		autoTrSlider(autosliderId);
	}
}

// -- Transient Slide transition fuctions
function trslidenext(sliderId) {
  var l = slides[sliderId].length;
  classAddRem(slides[sliderId][ind[sliderId]], "slideoff", "slideon");//+
  invis(slides[sliderId][ind[sliderId]]); //invis <-> ohide
  ind[sliderId]++;
  if (ind[sliderId] >= l) {ind[sliderId]=0;}
  classAddRem(slides[sliderId][ind[sliderId]], "slideon", "slideoff");//+
  vis(slides[sliderId][ind[sliderId]]); //vis <-> oshow
}

function trslideprev(sliderId) {
  var l = slides[sliderId].length;
  classAddRem(slides[sliderId][ind[sliderId]], "slideoff", "slideon");//+
  invis(slides[sliderId][ind[sliderId]]); //invis <-> ohide
  ind[sliderId]--;
  if (ind[sliderId] < 0) {ind[sliderId]=l-1;}
  classAddRem(slides[sliderId][ind[sliderId]], "slideon", "slideoff");//+
  vis(slides[sliderId][ind[sliderId]]); //vis <-> oshow
}

// -- No loop transient controls
function trslidenextnl(sliderId) {
  var l = slides[sliderId].length;
  if (ind[sliderId] >= l-1){return;} // - disable loop
  classAddRem(slides[sliderId][ind[sliderId]], "slideoff", "slideon");//+
  invis(slides[sliderId][ind[sliderId]]); //invis <-> ohide
  ind[sliderId]++;
  if (ind[sliderId] >= l) {ind[sliderId]=0;}
  classAddRem(slides[sliderId][ind[sliderId]], "slideon", "slideoff");//+
  vis(slides[sliderId][ind[sliderId]]); //vis <-> oshow
}

function trslideprevnl(sliderId) {
  var l = slides[sliderId].length;
  if (ind[sliderId] <= 0){return;} // - disable loop
  classAddRem(slides[sliderId][ind[sliderId]], "slideoff", "slideon");//+
  invis(slides[sliderId][ind[sliderId]]); //invis <-> ohide
  ind[sliderId]--;
  if (ind[sliderId] < 0) {ind[sliderId]=l-1;}
  classAddRem(slides[sliderId][ind[sliderId]], "slideon", "slideoff");//+
  vis(slides[sliderId][ind[sliderId]]); //vis <-> oshow
}

// -- Transient slide controls
function trslidectrls(sliderId) {
  var slider, ctrls;
  slider = document.getElementById(sliderId);
  html = `<div class="slidectrl"><a href="javascript:void(0)" onclick="trslideprev('${sliderId}');" class="prev" > &lt; </a> &nbsp; <a href="javascript:void(0)" onclick="trslidenext('${sliderId}');" class="next" > &gt; </a></div>`;
  slider.insertAdjacentHTML('afterend', html);
}

// -- Transient slide controls
function autotrslidectrls(autosliderId) {
  var slider, slidarray=`['${autosliderId[0]}',${autosliderId[1]}]`;
  slider = document.getElementById(autosliderId[0]);
  html = `<div class="slidectrl">
	<span onclick="trslideprev('${autosliderId[0]}'); trslideTimeReset(${slidarray});" class="prev" title="previous"> &lt; </span>
	<span onclick="trslideStopStart(${slidarray})" title="pause">||</span>
	<span onclick="trslidenext('${autosliderId[0]}'); trslideTimeReset(${slidarray});" class="next" title="next"> &gt; </span>
	</div>`;
  slider.insertAdjacentHTML('afterend', html);
}

// -- Transient no-loop slide controls
function trslidectrlsnl(sliderId) {
  var slider, ctrls;
  slider = document.getElementById(sliderId);
  html = `<div class="slidectrl"><a href="javascript:void(0)" onclick="trslideprevnl('${sliderId}');" class="prev" > &lt; </a> &nbsp; <a href="javascript:void(0)" onclick="trslidenextnl('${sliderId}');" class="next" > &gt; </a></div>`;
  slider.insertAdjacentHTML('afterend', html);
}

function bgimg(elid,imurl) {
  document.getElementById(elid).style.backgroundImage = `url(${imurl})`;
}

// Background Cycler - cycle through background images [imurls]
function bgcyc(elid, imurls) {
	var l=imurls.length;
	if(ind[elid] >= l){
	ind[elid]=0;
	}
	bgimg(elid, imurls[ind[elid]]);
	ind[elid]++;
}

// Initiate bgcyc (elmnt id, [imurls], time int)
function bgcycinit(id, imurls, time) {
	ind[id]=0;
	timer[id] = setInterval(function(){bgcyc(id, imurls);}, time);
}

