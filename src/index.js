"use strict"

const breadCrumbsParent = document.querySelector(".bread-crumbs");
const breadCrumbs = document.querySelectorAll(".bread-crumb");
const mainNav = document.querySelector("header .section-links");

const DisplayNav = () => {
    if(mainNav.style.display === "none"){
        mainNav.style.display = "inline-block";
    }
    else{
        mainNav.style.display = "none";
    };
}
