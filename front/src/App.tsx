import React from 'react';
import ListarChamados from './components/listar-chamados';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ListarChamadosAbertos from './components/listar-chamados-abertos';
import ListarChamadosResolvidos from './components/listar-chamados-resolvidos';
import CadastrarChamado from './components/cadastrar-chamado';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to={"/"}>Home</Link></li>

             <li><Link to={"/pages/chamado/listar"}>Listar Chamados</Link></li>
             <li><Link to={"/pages/chamado/naoresolvidos"}>Listar Chamados Abertos</Link></li>
             <li><Link to={"/pages/chamado/resolvidos"}>Listar Chamados Resolvidos</Link></li>
             <li><Link to={"/pages/chamado/cadastrar"}>Cadastrar Novo Chamado</Link></li>

          </ul>
        </nav>

      <Routes>
          <Route path="/" element={<ListarChamados />} />

          <Route
            path="/pages/chamado/listar"
            element={<ListarChamados />}
          />

          <Route path="/" element={<ListarChamadosAbertos />} />

          <Route
            path="/pages/chamado/naoresolvidos"
            element={<ListarChamadosAbertos />}
          />

          <Route path="/" element={<ListarChamadosResolvidos />} />

          <Route
            path="/pages/chamado/resolvidos"
            element={<ListarChamadosResolvidos />}
          />

          <Route path="/" element={<CadastrarChamado />} />

          <Route
            path="/pages/chamado/cadastrar"
            element={<CadastrarChamado />}
          />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
