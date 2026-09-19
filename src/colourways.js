// Each colourway just defines CSS custom property overrides.
// To add a new one, add another object here — nothing else needs
// to change. `id` is used as the value of a data-colourway attribute,
// so keep it short and unique.

const colourways = [
  {
    id: 'og',
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
    {
    id: "paper",
    name: "Paper",
    colors: { "--color-bg": "#d9d1bf", "--color-fg": "#16130f", "--color-accent": "#b3361f" },
  },
  {
    id: "moss",
    name: "Moss",
    colors: { "--color-bg": "#c9d0b8", "--color-fg": "#1b2416", "--color-accent": "#7a3b2e" },
  },
  {
    id: "bone",
    name: "Bone",
    colors: { "--color-bg": "#efece4", "--color-fg": "#1a1a1a", "--color-accent": "#2f5d8a" },
  },
  {
    id: "night",
    name: "Night",
    colors: { "--color-bg": "#14110f", "--color-fg": "#e8e0cc", "--color-accent": "#d6a441" },
  },
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