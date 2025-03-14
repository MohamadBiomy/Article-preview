let social = document.querySelector(".social")
let btn = document.querySelector(".share-btn")
let info = document.querySelector(".info")
let links = document.querySelector(".links")
let activeState = true

console.log(btn)
console.log(links)

links.remove()

btn.addEventListener("click", () => {
  if (activeState === true) {
    info.remove()
    social.prepend(links)
    social.classList.add("active")
    activeState = false
  } else if (activeState === false) {
    links.remove()
    social.prepend(info)
    social.classList.remove("active")
    activeState = true
  }
})
