'use client';
import { useEffect, useState } from "react";
import styles from './consulta.module.css';

export default function Consultas() {
    const [buscaPaciente, setBuscaPaciente] = useState("");
    const [buscaMedico, setBuscaMedico] = useState("");
    const [consultas, setConsultas] = useState([]);
    const [botaoAbertoPaciente, setBotaoAbertoPaciente] = useState(false);
    const [botaoAbertoMedico, setBotaoAbertoMedico] = useState(false);

    useEffect(() => {
        async function fetchConsultas() {
            try {
                const response = await fetch("https://api-clinica-2a.onrender.com/consultas");
                const data = await response.json();
                console.log("Consultas recebidas:", data);
                
                if (Array.isArray(data)) {
                    setConsultas(data);
                } else {
                    console.error("Erro: a API não retornou um array", data);
                }
            } catch (error) {
                console.error("Erro ao buscar consultas:", error);
            }
        }
        fetchConsultas();
    }, []);

    const consultasFiltradasPaciente = consultas.filter((consulta) =>
        consulta.paciente.toLowerCase().includes(buscaPaciente.toLowerCase())
    );

    const consultasFiltradasMedico = consultas.filter((consulta) =>
        consulta.medico.toLowerCase().includes(buscaMedico.toLowerCase())
    );

    return (
        <div className={styles.divconsultas}>
            <div className={styles.subContainer}>
                <h1 className={styles.listac}>Lista de Consultas</h1>

                <div className={styles.botaoContainer}>
                    <button className={styles.botao} onClick={() => setBotaoAbertoPaciente(true)}>Buscar Por Paciente</button>
                    <button className={styles.botao} onClick={() => setBotaoAbertoMedico(true)}>Buscar Por Médico</button>
                </div>

                {botaoAbertoPaciente && (
                    <div className={styles.botaoEstilo} onClick={() => setBotaoAbertoPaciente(false)}>
                        <div className={styles.button} onClick={(e) => e.stopPropagation()}>
                            <h2>Buscar paciente</h2>
                            <input
                                type="text"
                                placeholder="Digite o nome do paciente"
                                value={buscaPaciente}
                                onChange={(e) => setBuscaPaciente(e.target.value)}
                                className={styles.input}
                            />
                            <ul className={styles.lista}>
                                {consultasFiltradasPaciente.map((consulta) => (
                                    <li key={consulta.id}>{consulta.paciente}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}

                {botaoAbertoMedico && (
                    <div className={styles.botaoEstilo} onClick={() => setBotaoAbertoMedico(false)}>
                        <div className={styles.button} onClick={(e) => e.stopPropagation()}>
                            <h2>Buscar médico</h2>
                            <input
                                type="text"
                                placeholder="Digite o nome do médico"
                                value={buscaMedico}
                                onChange={(e) => setBuscaMedico(e.target.value)}
                                className={styles.input}
                            />
                            <ul className={styles.lista}>
                                {consultasFiltradasMedico.map((consulta) => (
                                    <li key={consulta.id}>{consulta.medico}</li>
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
                            <th className={styles.th}>Médico</th>
                            <th className={styles.th}>Especialidade</th>
                            <th className={styles.th}>Paciente</th>
                            <th className={styles.th}>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consultas.length > 0 ? (
                            consultas.map((consulta) => (
                                <tr key={consulta.id} className={styles.consulta}>
                                    <td className={styles.td}>{consulta.id}</td>
                                    <td className={styles.td}>{consulta.medico}</td>
                                    <td className={styles.td}>{consulta.especialidade}</td>
                                    <td className={styles.td}>{consulta.paciente}</td>
                                    <td className={styles.td}>{consulta.tipo}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className={styles.td}>Carregando consultas...</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}