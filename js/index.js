const header = document.querySelector('#main header')
const serviceBlocks = document.querySelectorAll('.services .service-block')
const navMenu = document.querySelector('#main header .nav-menu')
const collapseContent = document.querySelector('.nav-collapse-content')
const clients = document.querySelectorAll('.client')
const projects = document.querySelectorAll('.project')
const fireModal = document.querySelectorAll('.fireModal')
const modalContainer = document.querySelector('.modal-container')
const modal = modalContainer.querySelector('.modal')
const navLinks = document.querySelectorAll('.nav-link')
const scrolls = document.querySelectorAll('.scroll')
let sticky = header.offsetTop

window.onscroll = () => {
    if(window.pageYOffset >= sticky) {
        header.classList.add("sticky-header")
        document.body.style.marginTop = header.offsetHeight + sticky
    } else {
        header.classList.remove("sticky-header")
        document.body.style.marginTop = 0
    }
}
projects.forEach(project => {
    if(project.className.indexOf('first-client') == -1) {
        project.addEventListener('click', event => {
            projects.forEach(elem => {
                elem.classList.remove('open')
            })
            event.currentTarget.classList.add('open')
        })
    }
})
serviceBlocks.forEach(serviceBlock => {
    serviceBlock.addEventListener('click', event => {
        serviceBlocks.forEach(block => {
            block.classList.remove('open')
            block.querySelector('.hidden').classList.remove('active')
        })
        event.currentTarget.classList.add('open')
        event.currentTarget.querySelector('.hidden').classList.add('active')
    })
})
clients.forEach(client => {
    if(!client.classList.contains('first-client')) {
        client.addEventListener('click', event => {
            clients.forEach(elem => {
                elem.classList.remove('active')
            })
            event.currentTarget.classList.add('active')
        })
    }
})
fireModal.forEach(link => {
    link.addEventListener('click', event => {
      document.body.style.overflowY = "hidden"
      modalContainer.style.display = "flex"
      setTimeout(() => {
        modalContainer.style.backgroundColor = "rgba(0,0,0,0.4)"
        modal.style.transform = "scale(1)"
        modal.querySelector('form').classList.add('render')
      })
    })
})
modalContainer.addEventListener('click', event => {
    if(event.currentTarget.style.display === "flex" && event.target === event.currentTarget) {
        document.body.style.overflowY = "auto"
        modalContainer.style.backgroundColor = "rgba(0,0,0,0)"
        modal.style.transform = "scale(0)"
        modal.querySelector('form').classList.remove('render')
        setTimeout(() => {
            modalContainer.style.display = "none"
        }, 500)
    }
})
navMenu.addEventListener('click', event => {
    event.preventDefault()
    if(window.outerWidth <= 1280) {
        collapseContent.classList.toggle('open')
    }
})

window.addEventListener('resize', ()=> {
    if(window.outerWidth > 1150) {
        collapseContent.classList.remove('open')
    }
})


document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let controlButtons = document.querySelectorAll('.tns-controls button')
        controlButtons[0].innerHTML = '<span class="icon-chevron-up"></span>'
        controlButtons[1].innerHTML = '<span class="icon-chevron-down"></span>'
    }, 10) 
})

navLinks[0].addEventListener('click', event => {
    event.preventDefault()
    scrolls[0].scrollIntoView({block: "center", behavior: "smooth"})
})
navLinks[1].addEventListener('click', event => {
    event.preventDefault()
    scrolls[1].scrollIntoView({block: "center", behavior: "smooth"})
})
navLinks[3].addEventListener('click', event => {
    event.preventDefault()
    scrolls[3].scrollIntoView({block: "center", behavior: "smooth"})
})
navLinks[4].addEventListener('click', event => {
    event.preventDefault()
    scrolls[4].scrollIntoView({block: "center", behavior: "smooth"})
})
navLinks[5].addEventListener('click', event => {
    event.preventDefault()
    scrolls[0].scrollIntoView({block: "center", behavior: "smooth"})
})
navLinks[6].addEventListener('click', event => {
    event.preventDefault()
    scrolls[1].scrollIntoView({block: "center", behavior: "smooth"})
})
navLinks[8].addEventListener('click', event => {
    event.preventDefault()
    scrolls[3].scrollIntoView({block: "center", behavior: "smooth"})
})
navLinks[9].addEventListener('click', event => {
    event.preventDefault()
    scrolls[4].scrollIntoView({block: "center", behavior: "smooth"})
})