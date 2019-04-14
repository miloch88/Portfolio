
const colorImages = ['img/code-1.jpg', 'img/code-2.jpg', 'img/code-3.jpg', 'img/code-4.jpg'];
const text = ['Backend Developer', 'Frontend Developer', 'Java & JavaScript', 'Web Developer'];
const aboutImagesGrey = ['img/panda-about1-grey.png', 'img/panda-about2-grey.png', 'img/panda-about3-grey.png', 'img/panda-about4-grey.png']
const aboutImagesColor = ['img/panda-about1.png', 'img/panda-about2.png', 'img/panda-about3.png', 'img/panda-about4.png']

let i = 1;

function changeBackground() {
    if (i == 4) i = 0;
    $(".background img").attr("src", colorImages[i] );
    $("section.about img.grey").attr("src", aboutImagesGrey[i] );
    $("section.about img.color").attr("src", aboutImagesColor[i] );
    $(".welcome h2, section.about h3 span").text(text[i++]);
}

setInterval(changeBackground, 10000);

$('.burger').on('click', function () {
    $('.fas, .far, nav, .top, .wrapper').toggleClass('show');
});

$('nav a').on('click', function(){
    const goTo = '#' + $(this).attr('class');
    $('body, html').animate({
        scrollTop: $(goTo).offset().top
    }, 500)
});

// $(document).on('scroll', function(){
//     if($(this).scrollTop() > $('.about').height){
//         $('.topArrow').addClass('show');
//     }
// })