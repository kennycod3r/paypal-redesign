console.log("hey kenny!!");


let openNav = document.getElementById("openNav");

let sideNav = document.getElementById("sideNav");






openNav.addEventListener("click", toggleNavbar);



function toggleNavbar(){
    openNav.classList.toggle("is-active")
    sideNav.classList.toggle("close")
    
    return
}
