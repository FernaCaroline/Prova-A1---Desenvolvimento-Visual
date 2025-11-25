import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chamado } from "../Models/chamado";

function CadastrarChamado() {
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState("");
  

function cadastrarChamado(e: any) {
    e.preventDefault();

    const chamado: Chamado = {
      
      descricao: descricao,
    
    };

    fetch("http://localhost:5000/api/chamado/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(chamado),
    })
      .then((resposta) => resposta.json())
      .then(() => {
        navigate("/pages/chamado/listar");
      });
  }

  return (
    <div>
      <h1>Cadastrar Chamado</h1>

      <form onSubmit={cadastrarChamado}>
    
        <div>
          <label>Descrição:</label>
          <input
            type="text"
            placeholder="Digite a descrição do seu chamado"
            onChange={(e) => setDescricao(e.target.value)}
          />
        </div>

        <div>
          <button type="submit">Cadastrar Chamado</button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarChamado;