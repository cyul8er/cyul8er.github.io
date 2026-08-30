import { useState } from 'react'
import './App.css'
import colourways from './colourways'

// ---- content ---------------------------------------------------
// Keep the data separate from markup so panelling/layout can change
// later without touching the content itself.

const profile = {
  name: 'Claire Yu',
  description: '2nd yr electrical engineering @ UWO \n"nerd out"', // placeholder — fill in
  links: {
    resume: '/Claire_Yu_Resume.pdf', 
    github: 'https://github.com/cyul8er',
    email: 'mailto:claireyu.cyu@gmail.com', 
    instagram: 'https://www.instagram.com/selfportraitsofyu/',
  },
}

const stemProjects = [
  {
    title: 'MP3 Player',
    description: '', 
    link: '#', 
  },
]

const filmProjects = [
  {
    title: 'Regurgitate',
    role: 'Assistant Director',
    description: '',
    link: '#',
  },
  {
    title: 'Blockbuster UWO',
    role: 'Club Executive — Custom Website',
    description: '', 
    link: '#',
  },
]

// components

function Panel({ title, role, description, link }) {
  return (
    <div className="panel">
      <h2>{title}</h2>
      {role && <div className="panel-role">{role}</div>}
      <p>{description}</p>
      {link && (
        <a className="panel-link" href={link} target="_blank" rel="noreferrer">
          {/* link label placeholder */}
        </a>
      )}
    </div>
  )
}

function ColourwaySwitcher({ current, onChange }) {
  return (
    <div className="colourway-switcher">
      {colourways.map((cw) => (
        <button
          key={cw.id}
          className={`swatch${cw.id === current ? ' active' : ''}`}
          style={{ backgroundColor: cw.colors['--color-accent'] }}
          onClick={() => onChange(cw.id)}
          aria-label={`${cw.name} colourway`}
          title={cw.name}
        />
      ))}
    </div>
  )
}

function Spine({ currentColourway, onColourwayChange }) {
  return (
    <div className="spine">
      <h1>{profile.name}</h1>
      <p>{profile.description}</p>

      <nav className="links">
        <a href={profile.links.resume} target="_blank" rel="noreferrer">Resume</a>
        <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a href={profile.links.email}>Email</a>
        <a href={profile.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </nav>

      <ColourwaySwitcher current={currentColourway} onChange={onColourwayChange} />
    </div>
  )
}

function App() {
  const [colourwayId, setColourwayId] = useState(colourways[0].id)
  const activeColourway = colourways.find((cw) => cw.id === colourwayId) ?? colourways[0]

  return (
    <div className="spread" style={activeColourway.colors}>
      <section className="page page-left">
        <div className="page-label">EE / STEM</div>
        {stemProjects.map((p) => (
          <Panel key={p.title} {...p} />
        ))}
      </section>

      <Spine currentColourway={colourwayId} onColourwayChange={setColourwayId} />

      <section className="page page-right">
        <div className="page-label">Film / Production</div>
        {filmProjects.map((p) => (
          <Panel key={p.title} {...p} />
        ))}
      </section>
    </div>
  )
}

export default App

// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//     <section id = "main">
//       <div className = "hero">


//       </div>
//     </section>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
