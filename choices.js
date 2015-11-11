modalities = {

  generic_note: 'look into two things: (1) how these sensors/mechanisms work, what they really sense, and (2) how the devices in these examples play on authority, cultural narratives, etc... to prime the user (chrisma, suggestion).',

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

  generic_note: 'your application will revolve around this context:',

  selections: [
   'WORK', 
   'FRIENDS', 
   'SCHOOL', 
   'MEETING PEOPLE', 
   'DATING', 
  ]

}


outcomes = {

  generic_note: 'your application will have this outcome for the user:',

  selections: [
   'MORE FUN',
   'MORE RELAXED',
   'EASIER',
   'MORE DESIREABLE',
  ]

}

module.exports = {
  modalities: modalities,
  contexts: contexts
  outcomes: outcomes
}
