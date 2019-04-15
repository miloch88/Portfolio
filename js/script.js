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

$('.burger').on('click', function () {
    $('.fas, .far, nav, .top, .wrapper').toggleClass('show');
});

// Scroll to 
$('nav a').on('click', function () {
    const goTo = '#' + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goTo).offset().top
    }, 500)
});

// $('div.logo div.skill img').on('click', function () {
//     $('div.skill div i').toggleClass('star');
// });

$(document).on('scroll', function(){
    if($(this).scrollTop() > $('section.skills').outerHeight()*(3/5) + $('section.about').offset().top){
        $('div.skill div i').addClass('star');
    }
})