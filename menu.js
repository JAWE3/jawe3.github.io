// JavaScript Document
"use strict";
// burgermenu funktioner
const menu = document.querySelector(".menu");
const burger = document.querySelector("#burger");
const menuLinks = document.querySelectorAll(".menu a");

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

for (let i = 0; i < menuLinks.length; i++){
	menuLinks.addEventListener("click", refreshPage);
}

function refreshPage(){
	if(menuLinks.getAttribute("href" == "#projects" || "#about")){
		menuLinks.window.location.reload();
	}	
}