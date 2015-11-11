var h = require('hyperscript')
var choices = require('./choices.js')

Array.prototype.randomElement = function () {
  Math.random(); Math.random(); Math.random()
  return this[Math.floor(Math.random() * this.length)]
}

function draw (blurb, category) {

  function drawExamples (exs) {
    if (exs) {
      return h('ul', exs.map(function (ex) {
        return h('li',  
          h('a', { href: ex.href }, ex.name))
      }))
    }
  }

  return h('div', [
    h('h1', category.name),
    h('p', category.generic_note),
    h('h2', blurb.title),
    h('p', blurb.short_desc),
    drawExamples(blurb.examples)
  ])
}

function drawSection (category) {
  var selection = category.selections.randomElement()
  return draw(selection, category)
}

function setup () {
 return h('div', [
    drawSection(choices.modalities),
    drawSection(choices.contexts),
    drawSection(choices.outcomes),
  ]).outerHTML
}

document.write( setup() )
