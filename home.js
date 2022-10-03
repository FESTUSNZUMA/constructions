var slides =document.getElementsByClassName('slide')
var slider = document.getElementById("slider")
var index =0;
var slideWidth =  slides[0].clientWidth;
function slide(){
console.log(slideWidth)
if (index === slides.length){
	index=0;
}
slider.style.transform ="translateX("+(-slideWidth*index)+"px)";
console.log(slideWidth*index)
index +=1;

}
slide()
setInterval(slide, 4000);