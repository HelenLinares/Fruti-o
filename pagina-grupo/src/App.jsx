// App.jsx - Integración con React Router
// Mantiene el Navbar de los compañeros + agrega las páginas de Yesica
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./Componentes/Navbar";
import MenuPrincipal from "./Componentes/MenuPrincipal";
import AboutStarbucks from "./Componentes/AboutStarbucks";

  return (
    <>
      <Navbar />
      <MenuPrincipal />
       <AboutStarbucks />
    </>
  );
};

// Página Home temporal - los compañeros pueden modificarla
const Home = () => (
  <main style={{ minHeight: '60vh', padding: '40px 20px', textAlign: 'center' }}>
    <h1>Bienvenido a Starbucks</h1>
    <p>Página en construcción...</p>
    <div style={{ marginTop: '30px', display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
      <a href="/historias" style={{ padding: '12px 24px', background: '#00754a', color: '#fff', borderRadius: '20px', textDecoration: 'none' }}>
        Ver Historias
      </a>
      <a href="/notmilk" style={{ padding: '12px 24px', background: '#1e3932', color: '#fff', borderRadius: '20px', textDecoration: 'none' }}>
        Ver NotMilk
      </a>
    </div>
  </main>
);

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
