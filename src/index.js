import './style.css'

const buttons = document.querySelectorAll('.toggle-menu')
const menus = document.querySelectorAll('.dropdown-menu')

// LOGIC FOR HANDLING DROPDOWN MENU ANIMATIONS
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // First, hide all menus
        menus.forEach((menu, menuIndex) => {
            if (menuIndex !== index) {
                // Hide all menus except the one corresponding to the clicked button
                menu.classList.remove('show-menu')
                menu.classList.add('hide-menu')
            }
        })

        // Then toggle the visibility of the corresponding menu
        if (menus[index].classList.contains('hide-menu')) {
            menus[index].classList.remove('hide-menu')
            menus[index].classList.add('show-menu')
        } else {
            menus[index].classList.remove('show-menu')
            menus[index].classList.add('hide-menu')
        }
    })
})

// LOGIC FOR HANDLING THE SLIDES/DOTS OF THE IMAGE CAROUSEL

let currentIndex = 0
const slides = document.querySelectorAll('.image')
const totalSlides = slides.length
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')

function showSlide(index) {
    const slidesContainer = document.getElementById('slidesContainer')
    slidesContainer.style.transform = `translateX(${-index * 500}px)`
    updateDots(index)
}

function nextSlide() {
    currentIndex += 1 // Increment the index by one
    if (currentIndex >= totalSlides) {
        // Check if the index exceeds the number of slides
        currentIndex = 0 // Reset index to zero if it exceeds the total number of slides
    }
    showSlide(currentIndex)
}

function prevSlide() {
    currentIndex -= 1
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1
    }
    showSlide(currentIndex)
}

function updateDots(index) {
    document.querySelectorAll('.dot').forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active')
        } else {
            dot.classList.remove('active')
        }
    })
}

// Set up interval for auto-moving slides
setInterval(nextSlide, 10000)

// Make dots clickable
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index)
    })
})

// Make Previous and Next buttons clickable
previous.addEventListener('click', () => {
    console.log('prev clicked')

    prevSlide()
})

next.addEventListener('click', () => {
    console.log('next clicked')
    nextSlide()
})
