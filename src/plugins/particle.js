/**
 * demo.js
 */

var canvas = document.querySelector('#canvas'),
  ctx = canvas.getContext('2d')
var particles = []
var amount = 0
var mouse = { x: -9999, y: -9999 }
var radius = 1
var colors = [
  // "rgba(0,222,255,0.85)",
  // "rgba(12,253,74,0.75)",
  // "rgba(193,253,12,0.85)",
  // "rgba(192,213,255,0.85)",
  // "rgba(244,223,254,0.75)"
  'rgba(255, 77, 79, 0.85)',
  'rgba(255, 122, 69, 0.85)',
  'rgba(255, 169, 64, 0.85)',
  'rgba(255, 197, 61, 0.85)',
  'rgba(186, 230, 55, 0.85)',
  'rgba(115, 209, 61, 0.85)',
  'rgba(54, 207, 201, 0.85)',
  'rgba(64, 169, 255, 0.85)',
  'rgba(89, 126, 247, 0.85)',
  'rgba(146, 84, 222, 0.85)',
  'rgba(247, 89, 171, 0.85)'
]
// (headline = document.querySelector('#headline')),
var ww = window.innerWidth
var wh = window.innerHeight

function Particle(x, y) {
  this.x = Math.random() * ww
  this.y = Math.random() * wh
  this.dest = { x: x, y: y }
  this.r = Math.random() * 2 * Math.PI
  this.vx = (Math.random() - 0.5) * 25
  this.vy = (Math.random() - 0.5) * 25
  this.accX = 0
  this.accY = 0
  this.friction = Math.random() * 0.025 + 0.94
  this.color = colors[Math.floor(Math.random() * 10)]
}

Particle.prototype.render = function () {
  this.accX = (this.dest.x - this.x) / 1000
  this.accY = (this.dest.y - this.y) / 1000
  this.vx += this.accX
  this.vy += this.accY
  this.vx *= this.friction
  this.vy *= this.friction
  this.x += this.vx
  this.y += this.vy

  ctx.fillStyle = this.color
  ctx.beginPath()
  ctx.arc(this.x, this.y, this.r, Math.PI * 2, false)
  ctx.fill()

  var a = this.x - mouse.x
  var b = this.y - mouse.y

  var distance = Math.sqrt(a * a + b * b)
  if (distance < radius * 75) {
    this.accX = (this.x - mouse.x) / 10
    this.accY = (this.y - mouse.y) / 10
    this.vx += this.accX
    this.vy += this.accY
  }
}

function onMouseMove(e) {
  mouse.x = e.clientX
  mouse.y = e.clientY
}

function onTouchMove(e) {
  if (e.touches.length > 0) {
    mouse.x = e.touches[0].clientX
    mouse.y = e.touches[0].clientY
  }
}

function onTouchEnd(e) {
  mouse.x = -9999
  mouse.y = -9999
}

function initScene() {
  ww = canvas.width = window.innerWidth - 20
  wh = canvas.height = window.innerHeight - 220

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.font = 'bold 12vw "Abril Fatface"'
  ctx.textAlign = 'center'
  ctx.fillText('小溪，我喜欢你', ww / 2, wh / 1.6)

  var data = ctx.getImageData(0, 0, ww, wh).data

  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.globalCompositeOperation = 'lighten'

  particles = []
  for (var i = 0; i < ww; i += Math.round(ww / 200)) {
    for (var j = 0; j < wh; j += Math.round(ww / 200)) {
      if (data[(i + j * ww) * 4 + 3] > 200) {
        particles.push(new Particle(i, j))
      }
    }
  }
  amount = particles.length
}

function render(a) {
  requestAnimationFrame(render)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  for (var i = 0; i < amount; i++) {
    particles[i].render()
  }
}

// headline.addEventListener('keyup', initScene)
// window.addEventListener('resize', initScene)
// window.addEventListener('mousemove', onMouseMove)
// window.addEventListener('touchmove', onTouchMove)
// window.addEventListener('touchend', onTouchEnd)
initScene()
requestAnimationFrame(render)
