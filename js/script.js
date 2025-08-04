'use strict'
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();


$('.header-menu__icon').click(function () {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
    if ($(this).hasClass('active')) {
        $('body').data('scroll', $(window).scrollTop())
    }
    $('body').toggleClass('lock');
    if (!$(this).hasClass('active')) {
        $('body, html').scrollTop(parseInt($('body').data('scroll')))
    }
})






window.addEventListener('scroll', function () {
    scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3.3, // показывает 3 слайда одновременно
    // Navigation arrows
    navigation: {
        nextEl: '.slider-next',
        prevEl: '.slider-prev',
    },
    breakpoints: {
        // когда ширина окна >= 480px
        480: {
            slidesPerView: 1,
        },
        // когда ширина окна >= 768px
        992: {
            slidesPerView: 2,
        }
    }
});

//__________________________________________________

const tabNav = document.querySelectorAll('.tabs-btn')
const tabItems = document.querySelectorAll('.tabs-deals-items')
console.log(tabItems);

document.addEventListener('click', function (e) {

    let current = null;
    let newActiveIndex = null;
    const targetElement = e.target;
    if (targetElement.closest('.tabs-btn')) {
        console.log(targetElement);

        tabNav.forEach((item, index) => {
            //item.classList.remove('active-tabs')
            if (item.classList.contains('active-tabs')) {
                current = index;
                console.log(current, index);
                item.classList.remove('active-tabs');
            }
            if (item === targetElement) {
                newActiveIndex = index;
            }
        })
        //tabNav[current].classList.remove('active-tabs');
        targetElement.classList.add('active-tabs')
        tabItems[current].classList.remove('active-tabs');
        tabItems[newActiveIndex].classList.add('active-tabs');

    }

})