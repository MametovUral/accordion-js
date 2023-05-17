let accMenu = document.querySelectorAll(".accordion__menu-title"),
  imgLogo = document.querySelectorAll(".logo"),
  contentMenu = document.querySelectorAll(".accordion__menu-content");

// for (let i = 0; i < accMenu.length; i++) {
//   accMenu[i].addEventListener("click", () => {
//     accMenu[i].classList.toggle("active");
//     imgLogo[i].classList.toggle("active");
//     contentMenu[i].classList.toggle("active");
//   });
// }

accMenu.forEach((item, i) => {
  item.addEventListener("click", () => {
    accMenu[i].classList.toggle("active");
    imgLogo[i].classList.toggle("active");
    contentMenu[i].classList.toggle("active");
    contentMenu.forEach((c, j) => {
      i != j &&
        (c.classList.remove("active"),
        imgLogo[j].classList.add("active"),
        accMenu[j].classList.remove("active"));
    });
  });
});
