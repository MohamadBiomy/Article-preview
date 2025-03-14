let social = document.querySelector(".social")
let btn = document.querySelector(".share-btn")
let info = document.querySelector(".info")
let links = document.querySelector(".links")
let activeState = true
let icon = document.querySelector(".share-btn i")

console.log(btn)
console.log(links)

links.remove()

btn.addEventListener("click", () => {
  if (window.innerWidth < 900) {
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
  } else {
    if (activeState === true) {
      btn.style.backgroundColor = "var(--desaturated-dark-blue)"
      icon.style.color = "var(--light-grayish-blue)"
      social.prepend(links)
      activeState = false
    } else if (activeState === false) {
      links.remove()
      btn.style.backgroundColor = "var(--light-grayish-blue)"
      icon.style.color = "var(--very-dark-grayish-blue)"
      activeState = true
    }
  }
})

// background-color: var(--desaturated-dark-blue);
// color: var(--very-dark-grayish-blue);