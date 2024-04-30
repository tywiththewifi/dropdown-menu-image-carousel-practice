import './style.css'

// const dropDownMenu = document.getElementById('dropdown-menu')
// const toggleButton = document.querySelector('.toggle-menu')

// toggleButton.addEventListener('click', () => {
//     console.log('toggling button click')
//     if (dropDownMenu.classList.contains('hide-menu')) {
//         dropDownMenu.classList.remove('hide-menu')
//         dropDownMenu.classList.add('show-menu')
//     } else if (dropDownMenu.classList.contains('show-menu')) {
//         dropDownMenu.classList.remove('show-menu')
//         dropDownMenu.classList.add('hide-menu')
//     }

//     console.log(dropDownMenu.classList)
// })

// const dropDownMenu = document.getElementById('dropdown-menu')

// document.addEventListener('click', (event) => {
//     console.log('Clicked element:', event.target)
//     const { target } = event

//     if (target.classList.contains('toggle-menu')) {
//         console.log('registering button click')

//         if (dropDownMenu.classList.contains('hide-menu')) {
//             dropDownMenu.classList.remove('hide-menu')
//             dropDownMenu.classList.add('show-menu')
//         } else if (dropDownMenu.classList.contains('show-menu')) {
//             dropDownMenu.classList.remove('show-menu')
//             dropDownMenu.classList.add('hide-menu')
//         }
//     }
// })

// const buttons = document.querySelectorAll('.toggle-menu')
// const menus = document.querySelectorAll('.dropdown-menu')

// buttons.forEach((button, index) => {
//     button.addEventListener('click', () => {
//         menus.forEach((menu) => {
//             if (menu.classList.contains('hide-menu')) {
//                 menu.classList.remove('hide-menu')
//                 menu.classList.add('show-menu')
//             } else {
//                 menu.classList.remove('show-menu')
//                 menu.classList.add('hide-menu')
//             }
//         })

//         if (menus[index].classList.contains('hide-menu')) {
//             menus[index].classList.remove('hide-menu')
//             menus[index].classList.add('show-menu')
//         } else {
//             menus[index].classList.remove('show-menu')
//             menus[index].classList.add('hide-menu')
//         }
//     })
// })

const buttons = document.querySelectorAll('.toggle-menu')
const menus = document.querySelectorAll('.dropdown-menu')

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
