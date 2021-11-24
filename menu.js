// JavaScript Document
"use strict";
// burgermenu funktioner
const menu = document.querySelector(".menu");
const burger = document.querySelector("#burger");

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
const linkClick = document.querySelectorAll(".menu a");
if(this.getAttribute("href" == "#projects" || "#about")){
	refreshPage();
}
function refreshPage(){
	this.window.location.reload();
}