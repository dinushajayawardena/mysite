import $ from 'jquery';

$('.nav-about').on('click', ()=>{

    console.log("done");
    // console.log("done2");
    
    
    $('html, body').animate({
        scroll: $('portfolio-container__3dmod').offset()?.top
    }, 1000);
});

$('.hamburger__pos').on('click', ()=>{
    
});