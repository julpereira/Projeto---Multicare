'use client';
import { useEffect, useState } from "react";
import styles from './pacientes.module.css';

export default function Pacientes() {
    const [busca, setBusca] = useState("");
    const [pacientes, setPacientes] = useState([]);
    const [botaoAberto, setBotaoAberto] = useState(false);

    useEffect(() => {
        async function fetchPacientes() {
            try {
                const response = await fetch("https://api-clinica-2a.onrender.com/pacientes");
                const data = await response.json();
                console.log("Pacientes recebidos:", data);
                
                if (Array.isArray(data)) {
                    setPacientes(data);
                } else {
                    console.error("Erro: a API não retornou um array", data);
                }
            } catch (error) {
                console.error("Erro ao buscar pacientes:", error);
            }
        }
        fetchPacientes();
    }, []);

    const pacientesFiltrados = pacientes.filter((paciente) =>
        paciente.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className={styles.divpacientes}>
            <div className={styles.subContainer}>
                <h1 className={styles.listaPac}>Lista de Pacientes</h1>
                <button className={styles.botao} onClick={() => setBotaoAberto(true)}>Buscar Paciente</button>
                
                {botaoAberto && (
                    <div className={styles.botaoEstilo} onClick={() => setBotaoAberto(false)}>
                        <div className={styles.button} onClick={(e) => e.stopPropagation()}>
                            <h2>Selecione um paciente</h2>
                            <input
                                type="text"
                                placeholder="Digite o nome do paciente"
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                                className={styles.input}
                            />
                            <ul className={styles.lista}>
                                {pacientesFiltrados.map((paciente) => (
                                    <li
                                        key={paciente.id}
                                        onClick={() => {
                                            console.log("Paciente selecionado:", paciente);
                                            setBotaoAberto(false);
                                        }}
                                    >
                                        {paciente.nome}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.tabela}>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.th}>Id</th>
                            <th className={styles.th}>Nome</th>
                            <th className={styles.th}>Telefone</th>
                            <th className={styles.th}>Email</th>
                            <th className={styles.th}>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pacientes.length > 0 ? (
                            pacientes.map((paciente) => (
                                <tr key={paciente.id} className={styles.paciente}>
                                    <td className={styles.td}>{paciente.id}</td>
                                    <td className={styles.td}>{paciente.nome}</td>
                                    <td className={styles.td}>{paciente.telefone}</td>
                                    <td className={styles.td}>{paciente.email}</td>
                                    <td className={styles.td}>{paciente.cpf}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className={styles.td}>Carregando pacientes...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
