// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });
const container = document.querySelector(".elementcontainer");
const imagediv = document.querySelector(".imagediv");
container.addEventListener("mouseenter", function () {
  imagediv.style.display = "block";
});
container.addEventListener("mouseleave", function () {
  imagediv.style.display = "none";
});
const images = document.querySelectorAll(".element");
images.forEach(function (image) {
  image.addEventListener("mouseenter", function () {
    let img = image.getAttribute("data-image");
    console.log(img);
    imagediv.style.backgroundImage = `url(${img})`;
  });
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 100,
});

document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".tabsheading h1");
  const containers = {
    Design: document.getElementById("design-container"),
    Project: document.getElementById("project-container"),
    Execution: document.getElementById("execution-container"),
  };

  headings.forEach((heading) => {
    heading.addEventListener("click", function () {
      const tabName = heading.innerText;
      Object.values(containers).forEach(
        (container) => (container.style.display = "none")
      );
      containers[tabName].style.display = "flex";
    });
  });
  //when documents loads the styling of the containers
  containers["Design"].style.display = "flex";
  containers["Project"].style.display = "none";
  containers["Execution"].style.display = "none";
});
let flag = 0;
document.querySelector(".resmenu").addEventListener("click", function () {
  if (flag == 0) {
    document.querySelector(".resmenudiv").style.top = "0";
    document.querySelector("nav img").style.opacity = "0";
    flag = 1;
  } else {
    document.querySelector(".resmenudiv").style.top = "-100%";
    document.querySelector("nav img").style.opacity = "1";
    flag = 0;
  }
});
setTimeout(function() {
  document.querySelector('.loader').style.top = "-100%";
},4000);
