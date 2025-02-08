'use client';
import { useState } from "react";
import styles from './consulta.module.css';

export default function Consultas() {
  const [medicos] = useState([
    { idmedico: 1, nome: "Dr. João Silva", especialidade: "Clínica Geral" },
    { idmedico: 2, nome: "Dra. Maria Luiza", especialidade: "Pediatria" },
    { idmedico: 3, nome: "Dr. Antonio Carlos", especialidade: "Cirurgia" },
    { idmedico: 4, nome: "Dra. Sofia Patrícia", especialidade: "Ginecologia" },
    { idmedico: 5, nome: "Dr. Luiz Henrique", especialidade: "Cardiologia" },
    { idmedico: 6, nome: "Dra. Beatriz Cristina", especialidade: "Psiquiatria" },
    { idmedico: 7, nome: "Dr. Marcelo Alves", especialidade: "Ortopedia" },
    { idmedico: 8, nome: "Dra. Laura Fernanda", especialidade: "Dermatologia" },
    { idmedico: 9, nome: "Dr. Felipe Oliveira", especialidade: "Urologia" },
    { idmedico: 10, nome: "Dra. Gabriela Souza", especialidade: "Oftalmologia" },
  ]);

  const [pacientes] = useState([
    { idpaciente: 1, nome: "Carlos Souza" },
    { idpaciente: 2, nome: "Ana Pereira" },
    { idpaciente: 3, nome: "Marcos Oliveira" },
    { idpaciente: 4, nome: "Juliana Costa" },
    { idpaciente: 5, nome: "Fernanda Almeida" },
    { idpaciente: 6, nome: "Rafael Lima" },
    { idpaciente: 7, nome: "Patrícia Ribeiro" },
    { idpaciente: 8, nome: "Eduardo Martins" },
    { idpaciente: 9, nome: "Roberta Silva" },
    { idpaciente: 10, nome: "Gustavo Costa" },
  ]);

  const [consultas, setConsultas] = useState([
    { idconsulta: 1, idmedico: 1, idpaciente: 1, tipo: "Plano de Saúde" },
    { idconsulta: 2, idmedico: 2, idpaciente: 2, tipo: "Particular" },
    { idconsulta: 3, idmedico: 3, idpaciente: 3, tipo: "Plano de Saúde" },
    { idconsulta: 4, idmedico: 4, idpaciente: 4, tipo: "Particular" },
    { idconsulta: 5, idmedico: 5, idpaciente: 5, tipo: "Plano de Saúde" },
    { idconsulta: 6, idmedico: 6, idpaciente: 6, tipo: "Particular" },
    { idconsulta: 7, idmedico: 7, idpaciente: 7, tipo: "Plano de Saúde" },
    { idconsulta: 8, idmedico: 8, idpaciente: 8, tipo: "Particular" },
    { idconsulta: 9, idmedico: 9, idpaciente: 9, tipo: "Plano de Saúde" },
    { idconsulta: 10, idmedico: 10, idpaciente: 10, tipo: "Particular" },
  ]);

  return (
    <div>
      <div className={styles.container}>
        <button className={styles.botao}>Buscar por médico</button>
        <button className={styles.botao}>Buscar por paciente</button>
        <h1 className={styles.listaMed}>Lista de Consultas</h1>
      </div>
      <div className={styles.tabela}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Médico</th>
            <th>Especialidade</th>
            <th>Paciente</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((consulta) => {
            const medico = medicos.find((m) => m.idmedico === consulta.idmedico);
            const paciente = pacientes.find((p) => p.idpaciente === consulta.idpaciente);
            return (
              <tr key={consulta.idconsulta}>
                <td>{consulta.idconsulta}</td>
                <td>{medico?.nome}</td>
                <td>{medico?.especialidade}</td>
                <td>{paciente?.nome}</td>
                <td>{consulta.tipo}</td>
              </tr>
            );
          })}
        </tbody>
      </div>
    </div>
  );
}
