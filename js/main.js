const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const toggleOpen = () => {
  mobileMenu.classList.toggle("open");
};

menuBtn.addEventListener("click", toggleOpen);

document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("open") &&
    !mobileMenu.contains(e.target) &&
    e.target !== menuBtn
  ) {
    mobileMenu.classList.remove("open");
  }
});
