// JavaScript Document
"use strict";

// variables and function for Mobile Menu
const menu = document.querySelector("nav ul");
const burger = document.querySelector("#burger");
burger.addEventListener("click", mobilMenu);

function mobilMenu() {
    if (menu.style.display !== "flex") {
        menu.style.display = "flex";
        burger.firstChild.classList.remove("fa-bars");
        burger.firstChild.classList.add("fa-times");
    } else {
        menu.style.display = "none";
        burger.firstChild.classList.remove("fa-times");
        burger.firstChild.classList.add("fa-bars");
        
    }
}