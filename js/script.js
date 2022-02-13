
const bar_icon = document.querySelector('#bar-icon');
const menu_res = document.getElementById('menu-res');
bar_icon.addEventListener('click',()=>{
    menu_res.classList.toggle('menu-resp');
});
const btn_nav = document.querySelectorAll('li a');
console.log(btn_nav);
btn_nav.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        for(let i = 0; i<btn_nav.length; i++){
            btn_nav[i].classList.remove('active');
        }
        btn.classList.add('active');
        menu_res.classList.toggle('menu-resp');
    })
});



$('.owl-carousel').owlCarousel({
    loop: true,
    margin: false,
    nav: true,
    navText: ["<span class='fa fa-angle-left go-icon left'  style=''></span>", "<span class='go-icon fa fa-angle-right' style=''></span>"],
    dots: false,
    autoplay: false,
    loop: true,
    interval: 100,

    responsive: {
        0: {
            items: 1
        },
        550: {
            items: 1
        },
        600: {
            items: 2
        },
        700: {
            items: 3
        },
        770: {
            items: 3
        },
        1000: {
            items: 3,

        }
    }
})

//tooltip function
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

const allChooseImages = document.querySelectorAll('.second-img img');
const currentImage = document.querySelector('.content-image img');

console.log(allChooseImages);

allChooseImages.forEach((image)=>{
    image.addEventListener('click', ()=>{
        var s_value = image.src;
        console.log(s_value);
        // currentImage.style.display = 'none';
    })
})