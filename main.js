// Mobile menu
const mobileMenu = document.querySelector(".menuWrap")
const hamburger = document.querySelector(".icon")

const hamburgerClick = () => {
  mobileMenu.classList.toggle("disabled")
  hamburger.classList.toggle("hamActive")
}

// TODO fetch api to shorten url
const apiUrl = `https://api.shrtco.de/v2/`
const urlInput = document.querySelector(".urlInput")
const urlSubmit = document.querySelector("urlSubmit")

const handleSubmit = () => {
  console.log(urlInput.value)
}
