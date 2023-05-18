import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //jsx devuelve solo un objeto
  //usar un fragmento para mandar mas de una cosa de respuest, se escribe <>
  //para llamar a otro componente se usa {}
)
