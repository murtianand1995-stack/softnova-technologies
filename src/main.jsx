import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { firebaseConfig } from './firebase.js'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

function Message({ title, children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#0B1220', color: '#fff', padding: '24px', fontFamily: 'Inter, Arial, sans-serif' }}>
      <div style={{ maxWidth: 560, background: '#12203A', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: 28 }}>
        <h1 style={{ fontSize: 22, margin: 0, color: '#4DA3FF' }}>{title}</h1>
        <div style={{ marginTop: 14, fontSize: 14, lineHeight: 1.7, color: '#CBD3DD' }}>{children}</div>
      </div>
    </div>
  )
}

// Shows the real error on screen instead of a blank white page.
class ErrorBoundary extends React.Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <Message title="Something went wrong">
          <p>{String(this.state.error?.message || this.state.error)}</p>
          <p>Press F12 and open the Console tab for more details.</p>
        </Message>
      )
    }
    return this.props.children
  }
}

const missing = ['apiKey', 'authDomain', 'projectId', 'appId'].filter((k) => !firebaseConfig[k])

if (missing.length > 0) {
  // App is not imported at all in this case, so a missing .env can't crash the page.
  root.render(
    <Message title="Firebase setup is incomplete">
      <p>These values are missing from your <b>.env</b> file: <b>{missing.join(', ')}</b>.</p>
      <ol style={{ paddingLeft: 18 }}>
        <li>Put the <b>.env</b> file in the project root, next to <b>package.json</b> (not inside <b>src</b>).</li>
        <li>Names must start with <b>VITE_</b>, e.g. <b>VITE_FIREBASE_API_KEY=...</b> (no quotes, no spaces).</li>
        <li>Stop the server (Ctrl+C) and run <b>npm run dev</b> again.</li>
      </ol>
    </Message>,
  )
} else {
  import('./App.jsx').then(({ default: App }) => {
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ErrorBoundary>
      </React.StrictMode>,
    )
  }).catch((err) => {
    root.render(<Message title="Failed to start"><p>{String(err?.message || err)}</p></Message>)
  })
}
