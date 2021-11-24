// JavaScript Document
"use strict";
// burgermenu funktioner
const menu = document.querySelector(".menu");
const burger = document.querySelector("#burger");
document.querySelectorAll('.menu a').forEach(link => {
	link.addEventListener('click', clickedLink => {
		clickedLink = link.getAttribute("href");
		console.log(clickedLink);
	})
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