modalities = {

  name: 'modality',

  generic_note: 'look into two things: (1) how these sensors/mechanisms work, what they really sense, and (2) how the devices in these examples play on authority, cultural narratives, etc... to prime the user (chrisma, suggestion).',

  selections: [

    { 
      title: 'BRAINWAVES (EEG)',
      short_desc: 'EEG senses "brainwaves" - a proxy of large-scale patterns of neuronal firing.',
      examples: [ 
       { name: 'neurosky', href: 'http://neurosky.com/' },
       { name: 'muse', href: 'http://www.choosemuse.com/' }
      ]
    },

    { 
      title: 'GALVANIC SKIN RESPONSE (GSR)',
      short_desc: 'GSR sensees minute changes in the conductivity of your skin - a proxy for how much you\'re sweating.',
      examples: [ 
       { name: 'empatica', href: 'https://www.empatica.com/' },
      ]
    },

    { 
      title: 'PULSE',
      short_desc: 'a number of metrics are associated with pulse - heartrate, heartrate variability, VO2, etc.',
      examples: [ 
       { name: 'jabra pulse earbuds', href: 'http://www.jabra.com/sports-headphones/jabra-sport-pulse-wireless' },
       { name: 'apple watch', href: 'https://support.apple.com/en-us/HT204666' },
      ]
    },

    { 
      title: 'BREATH',
      short_desc: 'with an accelorometer and a pressure sensor, in-breaths and out-breaths can be detected.',
      examples: [ 
       { name: 'spire', href: 'http://www.spire.io/' },
      ]
    },

  ]

}

contexts = {

  name: 'context',

  generic_note: 'your application will revolve around this context:',

  selections: [
    { title: 'WORK' },
    { title: 'FRIENDS' },
    { title: 'SCHOOL' },
    { title: 'MEETING PEOPLE' },
    { title: 'DATING' },
  ]

}


outcomes = {

  name: 'outcome',

  generic_note: 'your application will have this outcome for the user:',

  selections: [
    { title: 'MORE RELAXED' },
    { title: 'MORE FUN' },
    { title: 'EASIER' },
    { title: 'MORE REWARDING' },
    { title: 'MORE DESIREABLE' },
  ]

}

module.exports = {
  game_title: 'sensing envisioning game!',
  game_desc: 'welcome! refer to the slides for an explanation of what\'s going on here.',
  slides_href: '',
  modalities: modalities,
  contexts: contexts,
  outcomes: outcomes,
}
