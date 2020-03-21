
window.onscroll= function navbar(){
	if(window.pageYOffset > 100)
	{
		document.querySelector(".header").style.background = "black";
		document.querySelector(".header").style.boxShadow = "0px 4px 2px #000099";
	}
	else
	{
		document.querySelector(".header").style.backgroundColor= "transparent";
		document.querySelector(".header").style.boxShadow = "none";
	}
}
var p=document.getElementById("login");
var q=document.getElementById("register");
var r=document.getElementById("btn");
function register(){
	document.getElementById("login").style.left="-400px";
	document.getElementById("register").style.left="16px";
	document.getElementById("btn").style.left="110px";
}
function login(){
	document.getElementById("login").style.left="16px";
	document.getElementById("register").style.left="450px";
	document.getElementById("btn").style.left="0";
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("s1");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

