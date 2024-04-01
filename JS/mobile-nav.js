const navBtn = document.querySelector('.mobile-nav-btn');
const navicon = document.querySelector('.mobile-nav-btn__icon')
const nav = document.querySelector('.mobile-nav');
const fade = document.querySelector('.mobile-nav-fade');

navBtn.onclick = function() {
    nav.classList.toggle('mobile-nav_open');
    navicon.classList.toggle('mobile-nav-btn__icon_active');
    fade.classList.toggle('mobile-nav-fade_open');
    navBtn.classList.toggle('mobile-nav-btn_active');
    document.body.classList.toggle('no-scroll');
};

fade.onclick = function() {
    nav.classList.toggle('mobile-nav_open');
    navicon.classList.toggle('mobile-nav-btn__icon_active');
    fade.classList.toggle('mobile-nav-fade_open');
    navBtn.classList.toggle('mobile-nav-btn_active');
    document.body.classList.toggle('no-scroll');
};

// відслідковуємо зміну розмірів сторінки
window.addEventListener("resize", function() {
    // отримуємо розміри вікна (inner/outerWidth, inner/outerHeight)
    console.log(window.innerWidth);
    if (window.innerWidth > 1139) {
        nav.classList.remove('mobile-nav_open');
        navicon.classList.remove('mobile-nav-btn__icon_active');
        fade.classList.remove('mobile-nav-fade_open');
        navBtn.classList.remove('mobile-nav-btn_active');
        document.body.classList.remove('no-scroll');
    }
}, false);