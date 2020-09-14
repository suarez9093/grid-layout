const toggleNav = document.querySelector(".nav-links");
const btn = document.querySelector(".btn");
let isHidden = false;
let myIndex = 0;

btn.addEventListener("click", () => {
  if (!isHidden) {
    isHidden = true;
    toggleNav.classList.add("hidden");
  } else if (isHidden) {
    isHidden = false;
    toggleNav.classList.remove("hidden");
  }
});

function carousel() {
  let slides = document.getElementsByClassName("hero-slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > slides.length) {
    myIndex = 1;
  }
  slides[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}

carousel();
