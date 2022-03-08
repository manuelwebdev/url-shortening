// Mobile menu
const mobileMenu = document.querySelector(".menuWrap")
const hamburger = document.querySelector(".icon")

const copyBtn = document.getElementsByClassName("copyBtn")

const hamburgerClick = () => {
  mobileMenu.classList.toggle("disabled")
  hamburger.classList.toggle("hamActive")
}

// TODO fetch api to shorten url
const apiUrl = `https://api.shrtco.de/v2/`
const urlInput = document.querySelector(".urlInput")
const urlSubmit = document.querySelector("urlSubmit")
const shortenOutput = document.querySelector(".shortenOutput")

// store array of short links
const shortenLinks = []

const handleSubmit = () => {
  //   console.log(urlInput.value)
  fetchShort(urlInput.value)
}

const fetchShort = async (apiQuery) => {
  const res = await fetch(`${apiUrl}shorten?url=${apiQuery}`)
  const data = await res.json()
  //   console.log(data)

  shortenLinks.push({
    original: apiQuery,
    shortUrl: data.result.full_short_link,
  })
  //   console.log(shortenLinks)
  shortenOutput.innerHTML = shortenLinks
    .map((item, i) => {
      return `<div class="shortLinkGroup">
          <span class="original">${item.original}</span>
          <div class="linkGroup">
              <span class="shortCode">${item.shortUrl}</span>
              <button id="${i}" class="copyBtn" onclick="handleCopy('${item.shortUrl}', ${i})">Copy</button>
          </div>
      </div>`
    })
    .join("")
}

const handleCopy = (shortUrl, i) => {
  navigator.clipboard.writeText(shortUrl).then(
    function () {
      console.log("Copying to clipboard was successful!", shortUrl)
    },
    function (err) {
      console.error("Async: Could not copy text: ", err)
    }
  )
  document.getElementById(`${i}`).textContent = "Copied"
  document.getElementById(`${i}`).classList.add("copied")
}
