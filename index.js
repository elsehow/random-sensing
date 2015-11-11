var h = require('hyperscript')
var config = require('./config.js')

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
    h('h2', category.name),
    h('p', category.generic_note),
    h('h3', blurb.title),
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
    h('h1', config.game_title),
    h('p', config.game_desc),
    drawSection(config.modalities),
    drawSection(config.contexts),
    drawSection(config.outcomes),
  ]).outerHTML
}

document.write( setup() )
