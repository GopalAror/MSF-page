let mobileView = document.querySelector(".mobileView")
let menu = document.querySelector("#menu")
let span4 = document.querySelector(".span4")
let span5 = document.querySelector(".span5")
let span6 = document.querySelector(".span6")
let hub = document.querySelector(".hub")
let benefit = document.querySelector(".benefit")
let program = document.querySelector(".program")

menu.addEventListener("click", function () {
  mobileView.classList.toggle("show");
  document.querySelector("body").classList.toggle("overflow-hidden");
  span4.classList.toggle("span1");
  span5.classList.toggle("span2");
  span6.classList.toggle("span3");
})
hub.addEventListener("click", function () {
  mobileView.classList.remove("show");
  document.querySelector("body").classList.remove("overflow-hidden");
  span4.classList.remove("span1");
  span5.classList.remove("span2");
  span6.classList.remove("span3");
})
program.addEventListener("click", function () {
  mobileView.classList.remove("show");
  document.querySelector("body").classList.remove("overflow-hidden");
  span4.classList.remove("span1");
  span5.classList.remove("span2");
  span6.classList.remove("span3");
})
benefit.addEventListener("click", function () {
  mobileView.classList.remove("show");
  document.querySelector("body").classList.remove("overflow-hidden");
  span4.classList.remove("span1");
  span5.classList.remove("span2");
  span6.classList.remove("span3");
})
$('.slider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  speed: 4000,
  Infinity: true,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});
// $('.slider2').slick({
//   slidesToShow: 6,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 0,
//   cssEase:'linear',
//   speed:4000,
//   Infinity:true,
//   prevArrow:'.prev',
//   nextArrow:'.next',
//   responsive: [
//     {
//       breakpoint: 1200,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 576,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });
$('.slider5').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: '.prev1',
  nextArrow: '.next1',
  autoplay: true,
});


function scrollBtn() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", function () {
  let topbtn = document.getElementById("topbtn");
  if (window.scrollY > 500) {
    topbtn.style.display = 'block';
  }
  else {
    topbtn.style.display = 'none';
  }
})
// preloder
setTimeout(() => {
  document.getElementById("preloder").classList.add("d-none");
  document.body.classList.remove("overflow-hidden");
}, 2000);