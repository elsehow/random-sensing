modalities = {

  generic_note: 'look into...',

  selections: [

    { title: 'BRAINWAVES (EEG)',
      short_desc: 'EEG senses "brainwaves" - a proxy of large-scale patterns of neuronal firing.',
      exmples: [ 
       { name: 'neurosky', link: 'http://neurosky.com/' },
       { name: 'muse', link: 'http://www.choosemuse.com/' }
      ]
    },

    { title: 'GALVANIC SKIN RESPONSE (GSR)',
      short_desc: 'GSR sensees minute changes in the conductivity of your skin - a proxy for how much you\'re sweating.',
      exmples: [ 
       { name: 'empatica', link: 'https://www.empatica.com/' },
      ]
    },

     { title: 'PULSE'
      short_desc: 'a number of metrics are associated with pulse - heartrate, heartrate variability, VO2, etc.',
      exmples: [ 
       { name: 'jabra pulse earbuds', link: 'http://www.jabra.com/sports-headphones/jabra-sport-pulse-wireless' },
       { name: 'apple watch', link: 'https://support.apple.com/en-us/HT204666' },
      ]
    },

    { title: 'BREATH'
      short_desc: 'with an accelorometer and a pressure sensor, in-breaths and out-breaths can be detected.',
      exmples: [ 
       { name: 'spire', link: 'http://www.spire.io/' },
      ]
    },

  ]

}

contexts = {

  generic_note: 'look into...',

  selections: [
   { title: 'WORK' },
   { title: 'FRIENDS' },
   { title: 'SCHOOL' },
   { title: 'MEETING PEOPLE' },
   { title: 'DATING' },
  ]

}


outcomes = {

  generic_note: 'look into...',

  selections: [
   { title: 'MORE FUN' },
   { title: 'MORE RELAXED' },
   { title: 'EASIER' },
   { title: 'MORE DESIREABLE' },
  ]

}

module.exports = {
  modalities: modalities,
  contexts: contexts
  outcomes: outcomes
}
