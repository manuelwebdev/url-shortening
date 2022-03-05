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
const shortenOutput = document.querySelector(".shortenOut")

const handleSubmit = () => {
  console.log(urlInput.value)
  fetchShort(urlInput.value)
}

const fetchShort = async (apiQuery) => {
  const res = await fetch(`${apiUrl}shorten?url=${apiQuery}`)
  const data = await res.json()
  const shortLink = data.result.short_link
  console.log(shortLink)

  shortenOutput.innerHTML = `<div>${shortLink}</div>`
}
