// VC.js - front-end javascript library by Vincent Chun
function s(query, n=0){
	return document.querySelectorAll(query)[n];
}
function ss(query){
	return document.querySelectorAll(query);
}
function e(tag, attrs={}, inner=''){
	var el = document.createElement(tag);
	for (key in attrs) {
		el.setAttribute(key,attrs[key])
	}
	if (typeof(inner)=="string"){
		el.appendChild(document.createTextNode(inner))
	} else if (inner instanceof Node){
		el.appendChild(inner)
	} else if (Array.isArray(inner)){
		for (i of inner) {
			if (typeof(i)=="string"){
				el.appendChild(document.createTextNode(i))
			} else {
				el.appendChild(i)
			}
		}
	}
	return el
}
function t(str){
	return document.createTextNode(str);
}
function addclass(el, toAdd) {
	el.classList.add(toAdd);
}
function remclass(el, toRem) {
	el.classList.remove(toRem);
}
function togclass(el, toTog) {
	el.classList.toggle(toTog);
}
function addclassq(sel, toAdd) {
	var el = document.querySelector(sel);
	el.classList.add(toAdd);
}
function remclassq(sel, toRem) {
	var el = document.querySelector(sel);
	el.classList.remove(toRem);
}
function togclassq(sel, toTog) {
	var el = document.querySelector(sel);
	el.classList.toggle(toTog);
}
function classaddrem(el, toAdd, toRem) {
	el.classList.remove(toRem);
	el.classList.add(toAdd);
}
function classaddremq(sel, toAdd, toRem) {
	var el = document.querySelector(sel);
	el.classList.remove(toRem);
	el.classList.add(toAdd);
}
function cycleclass(el, classes) {
	var i, n, l=classes.length; 
	for (i=0; i<l; i++){
		if (el.classList.contains(classes[i])){
			el.classList.remove(classes[i]);
			if (i<l-1){
				n=i+1;
			}
			else {
				n=0;
			}
			el.classList.add(classes[n]);
			break;
		}
	}
}
function cycleclassq(sel, classes) {
	el = document.querySelector(sel);
	cycleclass(el, classes);
}
function hide(el) {
	el.style.display = "none";
}
function show(el) {
	el.style.display = "block";
}
function tog(el) {
	if (el.style.display == "none") {
		el.style.display = "block";
	} else {
		el.style.display = "none";
	}
}
function showi(el) {
	el.style.display = "inline";
}
function togi(el) {
	if (el.style.display == "none") {
		el.style.display = "inline";
	} else {
		el.style.display = "none";
	}
}
function hideq(sel) {
	el = document.querySelector(sel);
	el.style.display = "none";
}
function showq(sel) {
	el = document.querySelector(sel);
	el.style.display = "block";
}
function togq(sel) {
	el = document.querySelector(sel);
	if (el.style.display == "none") {
		el.style.display = "block";
	} else {
		el.style.display = "none";
	}
}
function showiq(sel) {
	el = document.querySelector(sel);
	el.style.display = "inline";
}
function togiq(sel) {
	el = document.querySelector(sel);
	if (el.style.display == "none") {
		el.style.display = "inline";
	} else {
		el.style.display = "none"
	}
}
function hideall(els) {
	var i, l=els.length;
	for (i=0; i<l; i++) {
		els[i].style.display = "none";
	}
}
function showall(els) {
	var i, l=els.length;
	for (i=0; i<l; i++) {
		els[i].style.display = "block";
	}
}
function togall(els) {
	var i, l=els.length;
	for (i=0; i<l; i++) {
		if (els[i].style.display == "none") {
			els[i].style.display = "block";
		} else {
			els[i].style.display = "none";
		}
	}
}
function hideqall(sel) {
	els = document.querySelectorAll(sel);
	var i, l=els.length;
	for (i=0; i<l; i++) {
		els[i].style.display = "none";
	}
}
function showqall(sel) {
	els = document.querySelectorAll(sel);
	var i, l=els.length;
	for (i=0; i<l; i++) {
		els[i].style.display = "block";
	}
}
function togqall(sel) {
	els = document.querySelectorAll(sel);
	for (i=0; i<l; i++) {
		if (els[i].style.display == "none") {
			els[i].style.display = "block";
		} else {
			els[i].style.display = "none";
		}
	}
}
function ohide(el) {
	el.style.position = "absolute";
	el.style.opacity = 0;
	el.style.zIndex = -9;
}
function oshow(el) {
	el.style.position = "static";
	el.style.opacity = 1;
	el.style.zIndex = 1;
}
function otog(el) {
	if (el.style.opacity == 0) {
		el.style.position = "static";
		el.style.opacity = 1;
		el.style.zIndex = 1;
	} else {
		el.style.position = "absolute";
		el.style.opacity = 0;
		el.style.zIndex = -9;
	}
}
function ohideq(sel) {
	el = document.querySelector(sel);
	el.style.position = "absolute";
	el.style.opacity = 0;
	el.style.zIndex = -9;
}
function oshowq(sel) {
	el = document.querySelector(sel);
	el.style.position = "static";
	el.style.opacity = 1;
	el.style.zIndex = 1;
}
function otogq(sel) {
	el = document.querySelector(sel);
	if (el.style.opacity == 0) {
		el.style.position = "static";
		el.style.opacity = 1;
		el.style.zIndex = 1;
	} else {
		el.style.position = "absolute";
		el.style.opacity = 0;
		el.style.zIndex = -9;
	}
}
function invis(el) {
	el.style.opacity = 0;
	el.style.zIndex = -1;
}
function vis(el) {
	el.style.opacity = 1;
	el.style.zIndex = 1;
}
function togvis(el) {
	if (el.style.opacity == 0) {
		el.style.opacity = 1;
		el.style.zIndex = 1;
	} else {
		el.style.opacity = 0;
		el.style.zIndex = -1;
	}
}
function removebyid(id) {
	el = document.querySelector('#'+id);
	el.parentNode.removeChild(el);
}
function pop(sel) {
	el = document.querySelector(sel);
	el.style.display = "block";
	closer = e('div', {id:"closer", onclick:"hideq('"+sel+"'); this.parentNode.removeChild(this);"});
	el.before(closer);
}function popnext(el=this) {tog(el.nextElementSibling);}
function popnextwc(el=this) {
	var pel = el.nextElementSibling;
	pel.style.display = "block";
	closer = e('div', {id:"closer", onclick:"this.nextElementSibling.style.display='none'; this.parentNode.removeChild(this);"}); //removebyid('closer');"});
	pel.before(closer);
}
function edit(sel) {
	if (document.querySelector(sel).contentEditable == "true"){
		document.querySelector(sel).removeAttribute("contenteditable");
	} else {
		document.querySelector(sel).contentEditable = "true"
	}
}
function postform(url, dataob){
	data = new FormData();
	for (const [k,v] of Object.entries(dataob)){
		data.set(k,v);
	}
	return fetch(url, {method:"POST", body:data});
}
function postjson (url, data) {
  return fetch(url, {method: "POST", headers: {Accept: 'application/json', 'Content-Type': 'application/json'}, body: JSON.stringify(data)});
}var slides={}, ind={}, timer={};

function sliderinit(sliderId) {
	slides[sliderId] = document.querySelectorAll("#"+sliderId+" > *");
	var l = slides[sliderId].length;
	ind[sliderId] = 0;
	for (i=1; i<l; i++) {
		hide(slides[sliderId][i]);
	}
}
function initiatesliders(sliderIds) {
	var i=0, l=sliderIds.length;
	for (i=0; i<l; i++) {
		sliderinit(sliderIds[i]);
		slidectrls(sliderIds[i]);
	}
}
function slidectrls(sliderId) {
	var slider, ctrls;
	slider = document.getElementById(sliderId);
	ctrls = e("div",{class:"slidectrl"},[e("span",{onclick:"slideprev('"+sliderId+"')", class:"prev"},"<"), e("span",{onclick:"slidenext('"+sliderId+"')", class:"next"}," >")]);
	slider.after(ctrls);
}
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
	if (ind[sliderId] >= l || ind[sliderId] < 0) {ind[sliderId]=l-1;}
	show(slides[sliderId][ind[sliderId]]);
}
function initiateslidersnl(sliderIds) {
	var i=0, l=sliderIds.length;
	for (i=0; i<l; i++) {
		sliderinit(sliderIds[i]);
		slidectrlsnl(sliderIds[i]);
 }
}
function slidectrlsnl(id){
	var slider = document.getElementById(id);
	var ctrls = e("div", {class:"slidectrl"}, [e("span", {onclick:"slideprevnl('"+id+"');", class:"prev"}, "<"), e("span", {onclick:"slidenextnl('"+id+"');", class:"next"},  ">")]);
	slider.after(ctrls);
}
function slidenextnl(sliderId) {
	var l = slides[sliderId].length;
	if (ind[sliderId] == l-1){return;} // - disable loop
	hide(slides[sliderId][ind[sliderId]]);
	ind[sliderId]++;
	if (ind[sliderId] >= l || ind[sliderId] < 0) {ind[sliderId]=0;}
	show(slides[sliderId][ind[sliderId]]);
}
function slideprevnl(sliderId) {
	var l = slides[sliderId].length;
	if (ind[sliderId] == 0){return;} // - disable loop
	hide(slides[sliderId][ind[sliderId]]);
	ind[sliderId]--;
	if (ind[sliderId] < 0 || ind[sliderId] >= l) {ind[sliderId]=l-1;}
	show(slides[sliderId][ind[sliderId]]);
}
function initiateautosliders(autosliderIds) {//eg: {id1:5000, id2:8000,}
	for (let id in autosliderIds){
		sliderinit(id);
		autoslidectrls(id, autosliderIds[id]);
		autoslider(id, autosliderIds[id]);
	}
}
function autoslidectrls(id, time) {
	var slider = document.getElementById(id);
	var ctrls = e("div", {class:"slidectrl"}, [e("span",{onclick:"slideprev('"+id+"'), slidetimereset('"+id+"',"+time+");", class:"prev", title:"previous"}, '<'), e("span", {onclick:"slidestopstart('"+id+"',"+time+")", title:"pause"}, " || "), e("span", {onclick:"slidenext('"+id+"'), slidetimereset('"+id+"',"+time+");", class:"next", title:"next"}, ">")]);
	slider.after(ctrls)
}
function autoslider(id, time){
	timer[id] = setInterval(function(){slidenext(id);}, time);
}
function stoptimer(id){
	clearInterval(timer[id]);
	timer[id] = null;
}
function slidetimereset(id, time){
	if (timer[id]){
		stoptimer(id);
		autoslider(id, time)
	}
}
function slidestopstart(id, time){
	if (timer[id]){
		stoptimer(id)
	} else {
		autoslider(id, time);
	}
}
function trsliderinit(sliderId) {
	slides[sliderId] = document.querySelectorAll("#"+sliderId+"> *");
	var l = slides[sliderId].length;
	ind[sliderId] = 0;
	for (i=1; i<l; i++) {
		classaddrem(slides[sliderId][i], "slideoff", "slideon");//+
		ohide(slides[sliderId][i]); //invis <-> ohide
	}
}
function initiatetrsliders(sliderIds) {
	var i=0, l=sliderIds.length;
	for (i=0; i<l; i++) {
		trsliderinit(sliderIds[i]);
		trslidectrls(sliderIds[i]);
	}
}
function trslidectrls(id){
	var slider, ctrls;
	slider = document.getElementById(id);
	ctrls = e("div", {class:"slidectrl"}, [e("span",{onclick:"trslideprev('"+id+"');", class:"prev"}," < "), e("span",{onclick:"trslidenext('"+id+"');", class:"next"}," > ")]);
	slider.after(ctrls);
}
function trslidenext(sliderId) {
	var l = slides[sliderId].length;
	classaddrem(slides[sliderId][ind[sliderId]], "slideoff", "slideon");//+
	ohide(slides[sliderId][ind[sliderId]]); //invis <-> ohide
	ind[sliderId]++;
	if (ind[sliderId] >= l) {ind[sliderId]=0;}
	classaddrem(slides[sliderId][ind[sliderId]], "slideon", "slideoff");//+
	oshow(slides[sliderId][ind[sliderId]]); //vis <-> oshow
}
function trslideprev(sliderId) {
	var l = slides[sliderId].length;
	classaddrem(slides[sliderId][ind[sliderId]], "slideoff", "slideon");//+
	ohide(slides[sliderId][ind[sliderId]]); //invis <-> ohide
	ind[sliderId]--;
	if (ind[sliderId] < 0) {ind[sliderId]=l-1;}
	classaddrem(slides[sliderId][ind[sliderId]], "slideon", "slideoff");//+
	oshow(slides[sliderId][ind[sliderId]]); //vis <-> oshow
}
function initiatetrslidersnl(sliderIds) {
	var i=0, l=sliderIds.length;
	for (i=0; i<l; i++) {
		trsliderinit(sliderIds[i]);
		trslidectrlsnl(sliderIds[i]);
 }
}
function trslidectrlsnl(id) {
	var slider, ctrls;
	slider = document.getElementById(id);
	ctrls = e("div", {class:"slidectrl"}, [e("span",{onclick:"trslideprevnl('"+id+"')", class:'prev'}," < "), e("span",{onclick:"trslidenextnl('"+id+"')", class:'next'}," > ")]); console.log(ctrls);
	slider.after(ctrls);
}
function trslidenextnl(sliderId) {
	var l = slides[sliderId].length;
	if (ind[sliderId] >= l-1){return;} // - disable loop
	classaddrem(slides[sliderId][ind[sliderId]], "slideoff", "slideon");//+
	ohide(slides[sliderId][ind[sliderId]]); //invis <-> ohide
	ind[sliderId]++;
	if (ind[sliderId] >= l) {ind[sliderId]=0;}
	classaddrem(slides[sliderId][ind[sliderId]], "slideon", "slideoff");//+
	oshow(slides[sliderId][ind[sliderId]]); //vis <-> oshow
}
function trslideprevnl(sliderId) {
	var l = slides[sliderId].length;
	if (ind[sliderId] <= 0){return;} // - disable loop
	classaddrem(slides[sliderId][ind[sliderId]], "slideoff", "slideon");//+
	ohide(slides[sliderId][ind[sliderId]]); //invis <-> ohide
	ind[sliderId]--;
	if (ind[sliderId] < 0) {ind[sliderId]=l-1;}
	classaddrem(slides[sliderId][ind[sliderId]], "slideon", "slideoff");//+
	oshow(slides[sliderId][ind[sliderId]]); //vis <-> oshow
}
function initiateautotrsliders(autosliders){
	for (id in autosliders){
		trsliderinit(id);
		autotrslidectrls(id, autosliders[id]);
		autotrslider(id, autosliders[id]);
	}	
}
function autotrslidectrls(id, time) {
	var slider, ctrls;
	slider = document.getElementById(id);
	ctrls = e("div", {class:"slidectrl"}, [e("span", {onclick:"trslideprev('"+id+"'); trslidetimereset('"+id+"', "+time+");"}, " < "), e("span",{onclick:"trslidestopstart('"+id+"', '"+time+"')"}, " || "), e("span", {onclick:"trslidenext('"+id+"'); trslidetimereset('"+id+"', "+time+");", class:"next", title:"next"}, " > ")]);
	slider.after(ctrls);
}
function autotrslider(id, time) {
	timer[id] = setInterval(function(){trslidenext(id);}, time);
}
function trslidetimereset(id, time) {
	if (timer[id]) {
		stoptimer(id);
		autotrslider(id, time);
	}
}
function trslidestopstart(id, time) {
	if (timer[id]) {
		stoptimer(id);
	} else {
		autotrslider(id, time);
	}
}
