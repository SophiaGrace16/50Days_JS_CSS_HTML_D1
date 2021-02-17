const panels = document.querySelectorAll('.panel')

console.log(panels)
// querySelectorAll finds all instances then creates a nodelist which is basically an array

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
    
}