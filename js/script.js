let btns = document.querySelectorAll(".slider-buttons>button");

let sliderIndex = 1;
showSlides(sliderIndex);
function plusSlides(e) {
  const n = Number(e.currentTarget.value);

  showSlides((sliderIndex += n));
}

function showSlides(n) {
  let i;
  let imgSlides = document.querySelectorAll(".myImageSlides");
  let testSlides = document.querySelectorAll(".myTestSlides");

  if (n > imgSlides.length) {
    sliderIndex = 1;
  }
  if (n < 1) {
    sliderIndex = imgSlides.length;
  }
  for (i = 0; i < imgSlides.length; i++) {
    imgSlides[i].style.display = "none";
    testSlides[i].style.display = "none";
  }

  imgSlides[sliderIndex - 1].style.display = "block";
  testSlides[sliderIndex - 1].style.display = "flex";
}

for (const btn of btns) {
  btn.addEventListener("click", plusSlides);
}
