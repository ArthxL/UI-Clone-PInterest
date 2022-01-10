const grids = document.querySelectorAll('.grid')
const headings = document.querySelectorAll('.heading .wrapper .text')

function enterScreen(index) {
  const grid = grids[index]
  const heading = headings[index]
  const gridColumns = grid.querySelectorAll('.column')

  grid.classList.add('active')

  gridColumns.forEach(element => {
    element.classList.remove('animate-before', 'animate-after')
  })

  heading.classList.remove('animate-before', 'animate-after')
}
function exitScreen(index, exitDelay) {
  const grid = grids[index]
  const heading = headings[index]
  const gridColumns = grid.querySelectorAll('.column')

  gridColumns.forEach(element => {
    element.classList.add('animate-after')
  })

  heading.classList.add('animate-after')

  setTimeout(() => {
    grid.classList.remove('active')
  }, exitDelay)
}

function SetupAnimationCycle({ timePerScreen, exitDelay }) {
  const cycleTime = timePerScreen + exitDelay
  let nextIndex = 0

  function nextCycle() {
    const currentIndex = nextIndex

    enterScreen(currentIndex)

    setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen)

    // se o proxomo index for maior..
    nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1
  }

  setInterval(nextCycle, cycleTime)
}
SetupAnimationCycle({
  timePerScreen: 2000, //ms tempo que o usuario permanece em cada uma das telas
  exitDelay: 200 * 7 // tempo que o usuario tem que esperar para sumir todas as colunas
})