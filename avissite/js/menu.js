// JavaScript Document
"use strict";
// burgermenu funktioner
var menu = document.querySelector("nav ul");
var burger = document.querySelector("#burger");
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