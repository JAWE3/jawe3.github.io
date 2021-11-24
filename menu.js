// JavaScript Document
"use strict";
// burgermenu funktioner
const menu = document.querySelector(".menu");
const burger = document.querySelector("#burger");
const menuLinks = document.querySelectorAll(".menu a");
for (let i = 0; i < menuLinks.length; i++){
	menuLinks.addEventListener("click", refreshPage);
}

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


function refreshPage(){

	let href = menuLinks.getAttribute("href");
	console.log(href);
	window.location.reload = href;
}