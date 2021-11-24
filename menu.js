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
const menuLinks = document.querySelectorAll(".menu a");
for (let i = 0; i < menuLinks.length; i++){
	linkClicked();
}

function linkClicked() {
	menuLinks.addEventListener("click", refreshPage);
}

function refreshPage(){
	if(menuLinks.getAttribute("href" == "#projects" || "#about")){
		this.window.location.reload();
	}	
}