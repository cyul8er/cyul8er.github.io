// Each colourway just defines CSS custom property overrides.
// To add a new one, add another object here — nothing else needs
// to change. `id` is used as the value of a data-colourway attribute,
// so keep it short and unique.

const colourways = [
  {
    id: 'grey',
    name: 'Classic',
    colors: {
      '--color-bg': '#EAEAEA',
      '--color-fg': '#222222',
      '--color-accent': '#969696',
    },
  },
  {
    id: 'blue',
    name: 'Blue',
    colors: {
      '--color-bg': '#EAEAEA',
      '--color-fg': '#222222',
      '--color-accent': '#3443E3',
    },
  },
  {
    id: 'red',
    name: 'Red',
    colors: {
      '--color-bg': '#EAEAEA',
      '--color-fg': '#222222',
      '--color-accent': '#E33534',
    },
  },
  {
    id: 'purple',
    name: 'Purple',
    colors: {
      '--color-bg': '#EAEAEA',
      '--color-fg': '#222222',
      '--color-accent': '#9434E3',
    },
  },
  // add more colourways here, e.g.:
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