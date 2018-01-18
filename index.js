// returns the first element that matches the selector
function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
}
// pulls a .target out of #nested
function nestedTarget() {
  return document.querySelector('#nested .target')
}
// ncreases ranks in .ranked-list by n
function increaseRankBy(n) {
  const ranks = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + parseInt(n)
  }
}
// returns the most deeply nested child in #grand-node
function deepestChild() {
  // return document.querySelector('#grand-node div div div div')
  const divs = document.getElementById('grand-node').querySelectorAll('div')
  return divs[divs.length - 1]

}
