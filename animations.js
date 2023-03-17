let tittle = "Welcome to Conway's game of Life"
let tittle_h1 = document.querySelector('h1')
let x = 0

export let tittle_animation = () => {
    let start_count = setInterval(() => {
        let spell = tittle[x]
        tittle_h1.textContent += spell
        x += 1
        if (x == tittle.length) { clearInterval(start_count) }
    }, 140);
}



