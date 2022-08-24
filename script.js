// Applyin red left border for each link on navs' left side
let navbarLeftLinks = document.getElementsByClassName("nav-left-link");

function makeClickedLinkActive(a){
    for(var i = 0; i < navbarLeftLinks.length; i++){
        navbarLeftLinks[i].classList.remove('active-link');
    }
    a.classList.add("active-link");
}

for(var i = 0; i < navbarLeftLinks.length; i++){
    navbarLeftLinks[i].addEventListener('click', function(e){
        makeClickedLinkActive(e.target);
    }, false);
}
// ----------------------------------------------------------

// Apply location mark visiblity on mouse entering link in nav-2
let nav2Links = document.getElementsByClassName('nav-2-link');

function makeLocationMarkerVisible(a){
    for(var i = 0; i < nav2Links.length; i++){
        nav2Links[i].firstChild.classList.add('location-mark');
    }
    a.firstChild.classList.remove('location-mark');
}

for(var i = 0; i < nav2Links.length; i++){
    nav2Links[i].addEventListener('mouseenter', function(e){
        makeLocationMarkerVisible(e.target);
    })
}

for(var i = 0; i < nav2Links.length; i++){
    nav2Links[i].addEventListener('mouseleave', function(e){
        e.target.firstChild.classList.add('location-mark');
    })
}

// ---------------------------------------------------------------

// Keep the search box in home page at center
function getSearchBoxCentered(){
    let searchBoxContainer = document.querySelector('.search-box');
    let searchBoxWidth = searchBoxContainer.clientWidth;
    let searchBoxHeight = searchBoxContainer.clientHeight;

    // the code to center
    searchBoxContainer.style.marginTop = ((-(searchBoxHeight / 2)) + "px");
    searchBoxContainer.style.marginLeft = ((-(searchBoxWidth / 2)) + "px");
}

getSearchBoxCentered();

// Also call the function on window resize event
var myBody = document.getElementById('home-page');
window.onload = function(){
    getSearchBoxCentered();
    getImgTextCentered();
}
myBody.onresize = function(){
    getSearchBoxCentered();
    getImgTextCentered();
}

// ------------------------------------------------------------------

// keep the img-text in categories centered
function  getImgTextCentered(){
    let imgTextList = document.getElementsByClassName('category-img-text');
    for(var i = 0; i < imgTextList.length; i++){
        let text = imgTextList[i];
        let textWidth = text.clientWidth;
        let textHeight = text.clientHeight;

        text.style.marginLeft = (-(textWidth / 2)) + "px";
        text.style.marginTop = (-(textHeight / 2)) + "px";
    }
}

getImgTextCentered();

// --------------------------------------------------------------------

/* whene navbar-1 toggler is closed, padding to navbar is given as both 
    the brand icon and are absolute bcz otherwise, navbar will collapse */
var navOneToggler = document.getElementById('nav-1-toggler');
navOneToggler.addEventListener('click', function(){
    var scrnWirdth = window.innerWidth;
    var navOne = document.querySelector('.navbar-1');
    var isNavOneTogglerExpanded = navOneToggler.getAttribute('aria-expanded');
    if(scrnWirdth > 991){ // no need there
        return;
    }
    if(scrnWirdth < 480){
        if(isNavOneTogglerExpanded == 'true'){
            navOne.style.paddingBottom = "0em";
        } else {
            navOne.style.paddingBottom = "3.1em"; 
        }
        return;
    }
    if(isNavOneTogglerExpanded == 'true'){ // remove navbar-1 bottom padding
        navOne.style.paddingBottom = "0px";
        console.log("hello");
    } else {
        navOne.style.paddingBottom = "2.8em"; 
    }
    isNavOneTogglerExpanded = navOneToggler.getAttribute('aria-expanded');
});
