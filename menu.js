// JavaScript Document
"use strict";
// burgermenu funktioner
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");
const burger = document.querySelector("#burger");

links.addEventListener("click", function(){
	window.location.reload();
});


burger.addEventListener("click", function () {
	mobilMenu();
});

function mobilMenu() {
	if (menu.style.display !== "flex") {
		menu.style.display = "flex";  
	} else {
		menu.style.display = "none"; 
	}
}