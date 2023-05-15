// Skeleton comments for dynamic interface odin project 

// function navBar {
//     let navItems = document.getElementsByClassName("nav-visible");
//     let exploreHeader = document.getElementById("explore");

//     if exploreHeader.addEventListener("hover");
//         navItems.style.display = 'none';

// }




//Example code from previous dynamic sidebar 
let btn = document.querySelector(`.exploreBtn`);
let dropdown = document.querySelector(`.dropdown`);


btn.onclick = function () {
  dropdown.classList.toggle("active");
};


