// window.onload = function(){
//     // Your Code Here
//     console.log
// }
let selectedColor = 'black'

let colors = [
    'black',
    'blue',
    'red',
    'yellow'
]


document.addEventListener('DOMContentLoaded', function(){
    let palette = document.querySelector('#palette')
    let paint

    function changeSelected(event){
        selectedColor = event.target.style.backgroundColor
    }

    for (let i = 0; i < colors.length; i++) {
      paint = document.createElement('span')
      paint.style.backgroundColor = colors[i]

      paint.addEventListener('click', changeSelected)

      palette.appendChild(paint)
    }

    let canvas = document.querySelector('#canvas')
    let pixel

    function changeColor (event){
           console.log(event.target)
           event.target.style.backgroundColor = selectedColor
    }

    for (let i = 0; i < 3600; i++) {
        pixel = document.createElement('span')
        pixel.classList.add('pixel')
        canvas.appendChild(pixel)

        pixel.addEventListener('click', changeColor) 
    }









})