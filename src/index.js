import colorCardTemplate from "./templates/cards.hbs"
import colorCardData from "./data/colorpicker.json"

const palette = document.querySelector('.js-palette')

colorCardData.forEach((color) => {
    const card = document.createElement('div')
    card.classList.add('color-card')

    const typeColor = document.createElement('div')
    typeColor.classList.add('color-swatch')
    typeColor.style.backgroundColor = color.hex

    const meta = document.createElement('div')
    meta.classList.add('color-meta')
    meta.innerHTML = 
    `
    <p>HEX: ${color.hex}</p>
    <p>RGB: ${color.rgb}</p>
    `

    typeColor.addEventListener('click', () => {
        document.body.style.backgroundColor = color.hex
    })

    card.appendChild(typeColor)
    
    card.appendChild(meta)

    palette.appendChild(card)
})