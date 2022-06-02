
// dark-mode
function darkMode(){
    let bg = document.body;
    let nav = document.getElementById('nav');
    let btn = document.getElementById('darkModeBtn');
    let collapse = document.getElementById('navbarSupportedContent');

    bg.classList.toggle('dark-mode');
    nav.classList.toggle('dark-nav');

    collapse.classList.toggle('dark-nav')
}

// showing popup
function popup(){
    let popup = document.getElementById('popup');
    popup.classList.add('block');
}

// popup close button
function popupClose(){
    let popup = document.getElementById('popup');
    popup.classList.remove('block');
}

// remove any padding/margin from left in small screen
function mobile(){
    let firstOff = document.getElementById('first-p-mp-off');
    let screenSize = window.screen.width;
    
    if(screenSize < 550){
        // console.log("mobile size");
        firstOff.classList.remove('ms-5');
        firstOff.classList.remove('ps-5');
    }else{
        // console.log("large size");
        firstOff.classList.add('ms-5');
        firstOff.classList.add('ps-5');
    }
}


