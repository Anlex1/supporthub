import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <main>
      <header>
        <h1>SupportHub</h1>
        <p>Mis herramientas de soporte técnico en un solo lugar.</p>
      </header>

      <section>
        <h2>Generador de solicitudes</h2>
        <p>Crea mensajes para tus procesos de soporte.</p>
        <button type="button">Crear solicitud</button>
      </section>
    </main>
  );
}

export default App;
