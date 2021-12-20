import $ from 'jquery';

var docWidth: number;
docWidth = $( window ).width()!;
const secondHeaderHtml = `  <div class="nav-menu secondary-header">
                                <menu class="menu-item-container secondary-header-menu">
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

console.log("Working2");
                        

if(docWidth > 992 && $('.hamburger-wrapper').length != 0){
       
    $('.hamburger-wrapper').hide();
}

$('.hamburger-wrapper').on('click', ()=>{

    console.log(docWidth);
    
    
    if($('.nav-menu').length === 0){
        $('.header').append(secondHeaderHtml);
        $('.header').addClass('bg-tr');
    }else{
        $('.nav-menu').remove();
        $('.header').removeClass('bg-tr');
    }

});


$(window).resize(function(){
    docWidth = $( window ).width()!;
    
    if(docWidth > 992){

        if($('.hamburger-wrapper').length != 0){

            $('.hamburger-wrapper').hide();
        }
    
        $('.header').append(secondHeaderHtml);
        $('.menu-item-container').removeClass('secondary-header-menu');
        $('.menu-item-container').addClass('secondary-nav-repainted');

    }else{
        $('.hamburger-wrapper').show();
    }
});

