'use client';
import { useEffect, useState } from "react";
import styles from './medicos.module.css';

export default function Medicos() {
    const [busca, setBusca] = useState("");
    const [medico, setMedico] = useState([]);
    const [botaoAberto, setbotaoAberto] = useState(false);

    useEffect(() => {
        async function fetchMedicos() {
            try {
                const response = await fetch("https://api-clinica-2a.onrender.com/medicos");
                const data = await response.json();
                console.log("Médicos recebidos:", data);
                
                if (Array.isArray(data)) {
                    setMedico(data);
                } else {
                    console.error("Erro: a API não retornou um array", data);
                }
            } catch (error) {
                console.error("Erro ao buscar médicos:", error);
            }
        }
        fetchMedicos();
    }, []);

    const medicosFiltrados = medico.filter((medico) =>
        medico.nome.toLowerCase().includes(busca.toLowerCase())
    );

    return (
        <div className={styles.divmedicos}>
            <div className={styles.subContainer}>
                <h1 className={styles.listam}>Lista de Médicos</h1>

                <button className={styles.botao} onClick={() => setbotaoAberto(true)}>Buscar médico</button>

                {botaoAberto && (
                    <div className={styles.botaoEstilo} onClick={() => setbotaoAberto(false)}>
                        <div className={styles.button} onClick={(e) => e.stopPropagation()}>
                            <h2>Buscar médico</h2>
                            <input
                                type="text"
                                placeholder="Digite o nome do médico"
                                value={busca}
                                onChange={(e) => setBusca(e.target.value)}
                                className={styles.input}
                            />
                            <ul className={styles.lista}>
                                {medicosFiltrados.map((medico) => (
                                    <li
                                        key={medico.id}
                                        onClick={() => {
                                            console.log("Médico selecionado:", medico);
                                            setbotaoAberto(false);
                                        }}
                                    >
                                        {medico.nome}
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
                            <th className={styles.th}>Especialidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {medico.length > 0 ? (
                            medico.map((medico) => (
                                <tr key={medico.id} className={styles.medico}>
                                    <td className={styles.td}>{medico.id}</td>
                                    <td className={styles.td}>{medico.nome}</td>
                                    <td className={styles.td}>{medico.telefone}</td>
                                    <td className={styles.td}>{medico.email}</td>
                                    <td className={styles.td}>{medico.especialidade}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className={styles.td}>Carregando médicos...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
