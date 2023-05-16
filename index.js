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


//ChatGPT idea. However, it displays all secondary content at once with no transition etc. 

// function showContent() {
//   let contentButtons = document.getElementsByClassName("content");
//   for (var i = 0; i < contentButtons.length; i++) {
//     contentButtons[i].style.display = "flex";
//   }
// }
