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
		let link = document.querySelectorAll(".menu a");
		link.addEventListener("click", function () {
			location.href;
		})
	} else {
		menu.style.display = "none";
	}
}