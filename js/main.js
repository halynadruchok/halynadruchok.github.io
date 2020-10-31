$(document).ready(() => {
    $('.logo-link, .menu-link').each((index, element) => {
        // console.log(index, element);
        $(element).click(function(){
            const id = $(this).attr('href');
            // console.log(id);
            const offset = $(id).offset().top;
            // console.log(offet);
            $('html').animate({
                scrollTop: offset
            }, 1500);
        })
    })
});