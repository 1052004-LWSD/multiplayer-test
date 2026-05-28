const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth - 20
canvas.height = window.innerHeight - 20

c.fillRect(0, 0, canvas.width, canvas.height)