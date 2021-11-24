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
		document.querySelectorAll(".menu a").addEventListener("click", window.location.reload()); 
	} else {
		menu.style.display = "none"; 
	}
}