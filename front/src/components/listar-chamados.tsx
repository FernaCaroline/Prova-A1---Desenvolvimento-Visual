import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Chamado } from "../Models/chamado";

function ListarChamados() {
  const [chamados, setChamados] = useState<Chamado[]>([]);

  useEffect(() => {
    carregarChamados();
  }, []);

  function carregarChamados() {
    fetch("http://localhost:5000/api/chamado/listar")
      .then((resposta) => resposta.json())
      .then((chamados: Chamado[]) => {
        console.table(chamados);
        setChamados(chamados);
      });
  }

  function alterar(id: string) {
    console.log(`Id: ${id}`);

    axios
      .put(`http://localhost:5000/api/chamado/alterar/${id}`)
      .then(() => {
        carregarChamados();
      })
  }

  return (
    <div>
      <h1>Listar chamados</h1>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Criado em</th>
            <th>Alterar Status</th>
          </tr>
        </thead>
        <tbody>
          {chamados.map((chamado) => (
            <tr key={chamado.chamadoId}>
                <td>{chamado.chamadoId}</td>
                <td>{chamado.descricao}</td>
                <td>{chamado.status}</td>
                <td>{chamado.criadoEm}</td>
                <td>
                <button
                  onClick={() => {
                    alterar(chamado.chamadoId!);
                  }}
                >
                  Alterar Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarChamados;