// bxslider
$(document).ready(function(){
    $('.bxslider').bxSlider({
        slideMargin: 0,
        touchEnabled: true,
        auto: true,
        captions: true,
        useCSS: false,  
    });
});

//menu

const closeBtn = document.getElementById('close_block');
const openBtn = document.getElementById('openMenuBtn');
const munuList = document.querySelectorAll('.nav_item')

openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);

for (let i = 0; i < munuList.length; i++) {
    const element = munuList[i];
    element.addEventListener('click', closeNav);
}

function closeNav() {
    document.getElementById("mob_menu").style.width = "0%";
}

function openNav() {
    document.getElementById("mob_menu").style.width = "100%";
}