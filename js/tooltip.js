//wip
function ttip(el){
  x = window.event.pageX
  y = window.event.pageY
  dv = document.createElement("div")
  dv.innerHTML = "tip"
  dv.style.position = "absolute"
  dv.style.left = x+"px";
  dv.style.top = y+"px";
  dv.style.width = "50px"
  dv.style.height = "50px"
  dv.onmouseout = "this.remove()"
  document.body.insertBefore(dv,el)
}
