const headerList = [
  {
    img: "img/code-1.jpg",
    text: "Backend Developer"
  },
  {
    img: "img/code-2.jpg",
    text: "Frontend Developer"
  },
  {
    img: "img/code-3.jpg",
    text: "Java & JavaScript"
  },
  {
    img: "img/code-4.jpg",
    text: "Web Developer"
  }
];

const aboutList = [
  {
    grey: "img/panda-about1-grey.png",
    color: "img/panda-about1.png"
  },
  {
    grey: "img/panda-about2-grey.png",
    color: "img/panda-about2.png"
  },
  {
    grey: "img/panda-about3-grey.png",
    color: "img/panda-about3.png"
  },
  {
    grey: "img/panda-about4-grey.png",
    color: "img/panda-about4.png"
  }
];

const headerImage = document.querySelector(".background img");
const headerH2 = document.querySelector(".welcome h2");
const aboutGrey = document.querySelector("section.about img.grey");
const aboutColor = document.querySelector("section.about img.color");
const aboutH3 = document.querySelector("section.about h3 span");

const time = 10000;
let active = 0;

function changeBackground() {
  active++;
  if (active === headerList.length) active = 0;

  headerImage.src = headerList[active].img;
  aboutGrey.src = aboutList[active].grey;
  aboutColor.src = aboutList[active].color;
  headerH2.textContent = headerList[active].text;
  aboutH3.textContent = headerList[active].text;
}

let indexInterval = setInterval(changeBackground, time);

//Burger menu
$(".burger").on("click", function() {
  $(".fas, .far, nav, .top, .wrapper").toggleClass("show");
});

$("span.hide").on("click", function() {
  $("section.port, .modal, .wrapper").toggleClass("active");
});

//Scroll to top by arrow
$(".arrow").on("click", function() {
  $("body, html").animate(
    {
      scrollTop: 0
    },
    500
  );
});

// Scroll to
$("nav a").on("click", function() {
  const goTo = "#" + $(this).attr("class");
  if (goTo == "#port") {
    $("section.port, .modal, .wrapper").toggleClass("active");
  } else {
    $("body, html").animate(
      {
        scrollTop: $(goTo).offset().top
      },
      500
    );
  }
});

$(document).on("scroll", function() {
  
  // Appear arrow
  if ($(this).scrollTop() > $("section.about").offset().top) {
    $("div.arrow").addClass("show");
  } else {
    $("div.arrow").removeClass("show");
    $("div.skill div i").removeClass("star");
    $('.art1, .art2').removeClass('active');
  }

  //Appear stars
  if (
    $(this).scrollTop() >
    $("section.skills").outerHeight() * (3 / 5) +
      $("section.about").offset().top
  ) {
    $("div.skill div i").addClass("star");
  }

  //Appear portfolio
  if (
    $(this).scrollTop() >
    $(".art1").offset().top + $(".art1").outerHeight() - $(window).height()
  ) {
    $(" .art1").addClass("active");
  }

  if (
    $(this).scrollTop() >
    $(".art2").offset().top + $(".art2").outerHeight() - $(window).height()
  ) {
    $(" .art2").addClass("active");
  }
});
