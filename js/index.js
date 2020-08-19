"use strict"

const breadCrumbsParent = document.querySelector(".bread-crumbs");
const breadCrumbs = document.querySelectorAll(".bread-crumb");
const mainNav = document.querySelector("header .section-links");

const DisplayNav = () => {
    if(mainNav.style.visibility === "hidden"){
        mainNav.style.display = "inline-block";
        mainNav.style.visibility = "visible";
    }
    else{
        mainNav.style.display = "none";
        mainNav.style.visibility = "hidden";
    };
}

