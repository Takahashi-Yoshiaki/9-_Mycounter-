import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")

  return (
    <>
      <section id="center">
        
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>

        <div>
          <h1>こんにちは！</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="名前を入力してください"
        />

        <h2>{name}による{name}のための開発学習</h2>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => Math.max(0, count - 1))}
        >
          -1
        </button>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          +1
        </button>

        <button
          type="button"
          className="counter"
          onClick={() => setCount(0)}
        >
          リセット
        </button>

        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count * 2)}
        >
          2倍
        </button>

        <p>現在のカウントは {count} です</p>
      </section>
    </>
  )
}

export default App

