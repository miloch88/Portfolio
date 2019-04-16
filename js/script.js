const colorImages = ['img/code-1.jpg', 'img/code-2.jpg', 'img/code-3.jpg', 'img/code-4.jpg'];
const text = ['Backend Developer', 'Frontend Developer', 'Java & JavaScript', 'Web Developer'];
const aboutImagesGrey = ['img/panda-about1-grey.png', 'img/panda-about2-grey.png', 'img/panda-about3-grey.png', 'img/panda-about4-grey.png']
const aboutImagesColor = ['img/panda-about1.png', 'img/panda-about2.png', 'img/panda-about3.png', 'img/panda-about4.png']

// const aboutImagesColor = ['java', 'spring']

let i = 1;

function changeBackground() {
    if (i == 4) i = 0;
    $(".background img").attr("src", colorImages[i]);
    $("section.about img.grey").attr("src", aboutImagesGrey[i]);
    $("section.about img.color").attr("src", aboutImagesColor[i]);
    $(".welcome h2, section.about h3 span").text(text[i++]);
}

setInterval(changeBackground, 10000);

//Burger menu
$('.burger').on('click', function () {
    $('.fas, .far, nav, .top, .wrapper').toggleClass('show');
});

//Scroll to top by arrow
$('.arrow').on('click', function () {
    $('body, html').animate({
        scrollTop: 0
    }, 500)
});

// Scroll to 
$('nav a').on('click', function () {
    const goTo = '#' + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goTo).offset().top
    }, 500)
});

$(document).on('scroll', function () {

    // Appear arrow
    if ($(this).scrollTop() > $('section.about').offset().top) {
        $('div.arrow').addClass('show');
    }else{
        $('div.arrow').removeClass('show');
        $('div.skill div i').removeClass('star');
    }


    //Appear stars
    if ($(this).scrollTop() > $('section.skills').outerHeight() * (3 / 5) + $('section.about').offset().top) {
        $('div.skill div i').addClass('star');
    }
})