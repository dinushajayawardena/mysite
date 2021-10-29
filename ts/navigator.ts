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



$('.menu-hamburger').on('click', ()=>{
    
    if($('.secondary-header').length === 0){
        $('.header').append(secondHeaderHtml);
        $('.header').addClass('bg-tr');
    }else{
        $('.secondary-header').remove();
        $('.header').removeClass('bg-tr');
    }

});