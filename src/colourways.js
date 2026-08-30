// Each colorway just defines CSS custom property overrides.
// To add a new one, add another object here — nothing else needs
// to change. `id` is used as the value of a data-colorway attribute,
// so keep it short and unique.

const colourways = [
  {
    id: 'grey',
    name: 'Classic',
    colors: {
      '--color-bg': '#E0DFDB',
      '--color-fg': '#000000',
      '--color-accent': '#5C5B57',
    },
  },
  {
    id: 'blue',
    name: 'Blue',
    colors: {
      '--color-bg': '#ffffff',
      '--color-fg': '#000000',
      '--color-accent': '#2452c4',
    },
  },
  {
    id: 'red',
    name: 'Red',
    colors: {
      '--color-bg': '#ffffff',
      '--color-fg': '#000000',
      '--color-accent': '#DD3131',
    },
  },
  {
    id: 'purple',
    name: 'Purple',
    colors: {
      '--color-bg': '#ffffff',
      '--color-fg': '#000000',
      '--color-accent': '#7a2fc4',
    },
  },
  // add more colorways here, e.g.:
  // {
  //   id: 'green',
  //   name: 'Green',
  //   colors: {
  //     '--color-bg': '#ffffff',
  //     '--color-fg': '#000000',
  //     '--color-accent': '#2fa84f',
  //   },
  // },
]

export default colourways