import { useState } from 'react'
import './App.css'
import colourways from './colourways'

// ---- content ---------------------------------------------------
// Keep the data separate from markup so panelling/layout can change
// later without touching the content itself.

const profile = {
  name: 'Claire Yu',
  description: '2nd year electrical engineering @ UWO',
  links: {
    resume: '/resume.pdf', // swap for your actual resume path
    github: 'https://github.com/cyul8er',
    email: 'mailto:claireyu.cyu@gmail.com',
    instagram: 'https://instagram.com/selfportraitsofyu', 
  },
  // "link to page" box from the sketch — target/label still undecided.
  // Point this at whatever it should be (full site? about page? a
  // specific project?) once you've settled it.
  cta: {
    label: '', // placeholder
    href: '#', // placeholder
  },
}

const mp3Project = {
  title: 'MP3 Player',
  description: '', // placeholder
  link: '#', // placeholder — repo / writeup
}

const regurgitate = {
  title: 'Regurgitate',
  role: 'Assistant Director',
  description: '', // placeholder
  link: '#', // placeholder
}

const blockbusterUwo = {
  title: 'Blockbuster UWO',
  role: 'Club Executive — Custom Website',
  description: '', // placeholder
  link: '#', // placeholder
}

// ---- shared panel components -------------------------------------

function Panel({ title, role, description, link, className = '' }) {
  return (
    <div className={`panel ${className}`}>
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

// Blank/decorative panel — no content decided yet, just holds the
// grid cell and border so the page reads correctly while empty.
function BlankPanel({ className = '' }) {
  return <div className={`panel panel-blank ${className}`} />
}

function LinkIcons() {
  const entries = [
    { key: 'resume', label: 'R', href: profile.links.resume, external: true },
    { key: 'github', label: 'G', href: profile.links.github, external: true },
    { key: 'email', label: 'E', href: profile.links.email, external: false },
    { key: 'instagram', label: 'I', href: profile.links.instagram, external: true },
  ]

  return (
    <div className="link-icons">
      {entries.map((entry) => (
        <a
          key={entry.key}
          className="icon-link"
          href={entry.href}
          target={entry.external ? '_blank' : undefined}
          rel={entry.external ? 'noreferrer' : undefined}
          aria-label={entry.key}
          title={entry.key}
        >
          {/* swap these letter placeholders for real icons, e.g. lucide-react */}
          {entry.label}
        </a>
      ))}
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

// ---- app -----------------------------------------------------------

function App() {
  const [colourwayId, setColourwayId] = useState(colourways[0].id)
  const activeColourway = colourways.find((cw) => cw.id === colourwayId) ?? colourways[0]

  return (
    <div className="spread" style={activeColourway.colors}>
      <BlankPanel className="area-header" />

      <BlankPanel className="area-topLeftA" />
      <BlankPanel className="area-topLeftB" />

      <Panel {...mp3Project} className="area-leftTall" />

      <div className="area-spine panel">
        <h1>{profile.name}</h1>
        <p>{profile.description}</p>
      </div>

      <Panel {...regurgitate} className="area-rightPanel" />

      <BlankPanel className="area-topRightA" />
      <BlankPanel className="area-topRightB" />

      <div className="area-linkicons">
        <LinkIcons />
      </div>

      <div className="area-h panel">
        <h2>Notion CMS / Blog</h2>
        {/* placeholder — link out to your Notion-hosted blog */}
        <a className="panel-link" href="#" target="_blank" rel="noreferrer"></a>
      </div>

      <a className="area-i panel panel-cta" href={profile.cta.href}>
        {profile.cta.label || '(link to page)'}
      </a>

      {/* room for more — currently empty */}
      <BlankPanel className="area-j1" />
      <BlankPanel className="area-j2" />

      <Panel {...blockbusterUwo} className="area-k" />

      <div className="area-l">
        <ColourwaySwitcher current={colourwayId} onChange={setColourwayId} />
      </div>
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
