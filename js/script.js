// ------------------------- Toggle Navbar -------------------------
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

// ------------------------- Active Section -------------------------
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        // aktifin overlay pas multiple klik
        document.querySelector(".overlay").classList.add("active");

        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
})


// ------------------------- Portfolio Item Details Popup -------------------------
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")) {
        toggleProjectPopup();
        document.querySelector(".project-popup").scrollTo(0,0);
        projectItemDetails(e.target.parentElement);
    }
})
function toggleProjectPopup(){
    document.querySelector(".project-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".popup-close").addEventListener("click", toggleProjectPopup);

// keluar ketika click di luar section popup
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("popup-inner")){
        toggleProjectPopup();
    }
});

function projectItemDetails(projectItem){
    document.querySelector(".popup-thumbnail img").src =
    projectItem.querySelector(".project-item-thumbnail img").src;

    document.querySelector(".popup-header h3").innerHTML =
    projectItem.querySelector(".project-item-title").innerHTML;

    document.querySelector(".popup-body").innerHTML =
    projectItem.querySelector(".project-item-details").innerHTML;
}