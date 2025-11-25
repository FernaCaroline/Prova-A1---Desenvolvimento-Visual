import { useEffect, useState } from "react";
import { Chamado } from "../Models/chamado";

function ListarChamadosResolvidos() {

    const [chamados, setChamados] = useState<Chamado[]>([]);

     useEffect(() => {
    carregarChamados();
  }, []);

function carregarChamados() {

    fetch("http://localhost:5000/api/chamado/resolvidos")
        .then((resposta) => resposta.json())
        .then((chamados: Chamado[]) => {
            console.table(chamados);
            setChamados(chamados);
        });
    
  }
    return (
    <div>
      <h1>Listar Chamados Resolvidos</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Criado em</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((chamado) => (
            <tr key={chamado.chamadoId}>
              <td>{chamado.chamadoId}</td>
                <td>{chamado.descricao}</td>
                <td>{chamado.status}</td>
                <td>{chamado.criadoEm}</td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarChamadosResolvidos;