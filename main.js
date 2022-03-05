const mobileMenu = document.querySelector(".menuWrap")
const hamburger = document.querySelector(".icon")

const hamburgerClick = () => {
  mobileMenu.classList.toggle("disabled")
  hamburger.classList.toggle("hamActive")
}
