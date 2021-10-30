import $ from 'jquery';

const secondHeaderHtml = `  <div class="secondary-header">
                            <menu class="secondary-header-menu">
                                <li class="menu-item nav-item">Home</li>
                                <li class="menu-item nav-item">About</li>
                                <li class="menu-item nav-item">Portfolio</li>
                                <li class="menu-item nav-item">Projects</li>
                                <li class="menu-item nav-item">Contact</li>
                            </menu>
                            </div>`;

const humburgerHtml = ` <div class="menu-hamburger hamburger__pos">
                            <i class="fas fa-bars"></i>
                        </div>`;


var docWidth: number;
$(window).resize(function(){
    docWidth = $( window ).width();
    console.log(docWidth);
    
    if(docWidth >= 992){
        if($('.menu-hamburger').length !== 0){
            $('.menu-hamburger').remove();
            $('.secondary-header').remove();
        } 
        
    }else{
        if($('.menu-hamburger').length === 0) $('.hamburger-wrapper').append(humburgerHtml);
    }
});

$('.hamburger-wrapper').on('click', ()=>{
    
    if($('.secondary-header').length === 0){
        $('.header').append(secondHeaderHtml);
        $('.header').addClass('bg-tr');
    }else{
        $('.secondary-header').remove();
        $('.header').removeClass('bg-tr');
    }

});
