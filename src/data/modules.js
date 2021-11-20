options: [
  {
    label: "Audio & Visual Accessibility (required)",
    value: "audio_visual",
    checked: true,
    disabled: true,
  },
  {
    label: "Communication Accessibility (required)",
    value: "communication",
    checked: true,
    disabled: true,
  },
  {
    label: "Physical Accessiblity",
    value: "physical"
  },
  {
    label: "Covid-19 Safety",
    value: "covid"
  }
]

export default [
  {
    key: "audio_visual",
    name: "Audio & Visual Module",
    checked: true,
    disabled: true,
    image: {
      file: "audio_visual.png",
      alt: "Blind Black Woman Walking with a Dog",
    },
    description: "Audio & Visual accessibility helps not only people who are d/Deaf & those with visual impairments access your content but also creates more accessibility for neurodivergent people (autism.brain injuries, sensory conditions, people with mental health conditions etc) and others who otherwise would be unable to attend your event without these adjustments.",
  },
  {
    key: "communication",
    name: "Communication Accessibility",
    checked: true,
    disabled: true,
    image: {
      file: "communication.png",
      alt: "Black Women Enjoying a Conversation with Sign Language",
    },
  },
  {
    key: "physical",
    name: "Physical Accessibility",
    image: {
      file: "physical.png",
      alt: "Black Man in a Wheelchair Celebrating",
    },
  },
  {
    key: "covid",
    name: "Covid-19 Safety",
    image: {
      file: "covid.png",
      alt: "Black Man Dancing with a mask and Leg Prosthetic",
    },
  }
]
