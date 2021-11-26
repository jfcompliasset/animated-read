window.onload = function () {
  let canvas = document.querySelector('canvas')
  let width = canvas.width = window.innerWidth
  let height = canvas.height = window.innerHeight
  let ctx = canvas.getContext('2d')

  let flag = document.querySelector('[data-flag]')
  let flag_offset = flag.offsetTop
  let flag_with_height = flag_offset + flag.offsetHeight
  console.log(flag_offset, flag_with_height)

  let main = document.querySelector('main')
  let state = 'out'

  ctx.fillStyle = 'lime'

  setInterval(function () {
    let main_scroll_top = main.scrollTop
    if (flag_offset - height < main_scroll_top && main_scroll_top < flag_with_height) {
      if (state == 'out') {
        ctx.fillRect(0, 0, width, height)
      }
      state = 'in'
    } else {
      if (state == 'in') {
        ctx.clearRect(0, 0, width, height)
      }
      state = 'out'
    }
  }, 200)
}