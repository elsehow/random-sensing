var h = require('hyperscript')
var config = require('./config.js')

Array.prototype.randomElement = function () {
  Math.random(); Math.random(); Math.random()
  return this[Math.floor(Math.random() * this.length)]
}

function drawCategory (blurb, category) {

  function drawHeader (category) {
    return h('div.header', [
      h('h2', category.name),
      h('p', category.generic_note)
    ])
  }

  function drawBlurb (blurb) {

    function drawExamples (exs) {
      if (exs) {
        return h('ul', exs.map(function (ex) {
          return h('li',  
            h('a', { href: ex.href }, ex.name))
        }))
      }
      return
    }

    return('div.blurb', [
      h('h3', blurb.title),
      h('p', blurb.short_desc),
      drawExamples(blurb.examples)
    ])
  }

  return h('div', [
    drawHeader(category),
    drawBlurb(blurb)
  ])
}

function drawGameHeader () {
  return h('div.gameHeader', [
    h('h1', config.game_title),
    h('p', config.game_desc),
    h('a', { href: config.slides_href }, 'envisioning exercise slides'),
  ])
}

function drawRandom (category) {
  var selection = category.selections.randomElement()
  return drawCategory(selection, category)
}


function setup () {
 return h('div', [
    drawGameHeader(),
    drawRandom(config.modalities),
    drawRandom(config.contexts),
    drawRandom(config.outcomes),
  ]).outerHTML
}

document.write( setup() )
return
