'use client';
import { useState } from "react";
import styles from './pacientes.module.css';

export default function Pacientes() {
  const [busca, setBusca] = useState("");
  const [pacientes, setPacientes] = useState([
    {
      idpaciente: 1,
      nome: "Carlos Souza",
      telefone: "(11)99999-0001",
      email: "carlos@exemplo.com",
      cpf: "123.456.789-00",
    },
    {
      idpaciente: 2,
      nome: "Ana Pereira",
      telefone: "(11)98888-0002",
      email: "ana@exemplo.com",
      cpf: "234.567.890-01",
    },
    {
      idpaciente: 3,
      nome: "Marcos Oliveira",
      telefone: "(11)97777-0003",
      email: "marcos@exemplo.com",
      cpf: "345.678.901-02",
    },
    {
      idpaciente: 4,
      nome: "Juliana Costa",
      telefone: "(11)96666-0004",
      email: "juliana@exemplo.com",
      cpf: "456.789.012-03",
    },
    {
      idpaciente: 5,
      nome: "Fernanda Almeida",
      telefone: "(11)95555-0005",
      email: "fernanda@exemplo.com",
      cpf: "567.890.123-04",
    },
    {
      idpaciente: 6,
      nome: "Rafael Lima",
      telefone: "(11)94444-0006",
      email: "rafael@exemplo.com",
      cpf: "678.901.234-05",
    },
    {
      idpaciente: 7,
      nome: "Patrícia Ribeiro",
      telefone: "(11)93333-0007",
      email: "patricia@exemplo.com",
      cpf: "789.012.345-06",
    },
    {
      idpaciente: 8,
      nome: "Eduardo Martins",
      telefone: "(11)92222-0008",
      email: "eduardo@exemplo.com",
      cpf: "890.123.456-07",
    },
    {
      idpaciente: 9,
      nome: "Roberta Silva",
      telefone: "(11)91111-0009",
      email: "roberta@exemplo.com",
      cpf: "901.234.567-08",
    },
    {
      idpaciente: 10,
      nome: "Gustavo Costa",
      telefone: "(11)90000-0010",
      email: "gustavo@exemplo.com",
      cpf: "012.345.678-09",
    },
  ]);

  return (
    <div>
      <div className={styles.container}>
        <button className={styles.botao}>Buscar paciente</button>
        <h1 className={styles.listaMed}>Lista de Pacientes</h1>
      </div>
      <div className={styles.tabela}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.idpaciente}>
              <td>{paciente.idpaciente}</td>
              <td>{paciente.nome}</td>
              <td>{paciente.telefone}</td>
              <td>{paciente.email}</td>
              <td>{paciente.cpf}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
}
