
const colorImages = ['img/code-1.jpg', 'img/code-2.jpg', 'img/code-3.jpg', 'img/code-4.jpg'];
const text = ['Backend Developer', 'Frontend Developer', 'Java & JavaScript', 'Web Developer'];

let i = 0;

function changeBackground() {
    i++;
    if (i == 4) i = 0;

    $(".background img").attr("src", colorImages[i] );
    $("h2").text(text[i]);
}

setInterval(changeBackground, 10000)

$('.burger').on('click', function () {
    $(
        '.fas, .far, nav, .top, .wrapper'
    ).toggleClass('show');
})