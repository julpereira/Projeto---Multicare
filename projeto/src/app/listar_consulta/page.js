'use client';
import { useEffect, useState } from "react";
import styles from './consulta.module.css';

export default function Consultas() {
    const [buscaMedico, setBuscaMedico] = useState("");
    const [buscaPaciente, setBuscaPaciente] = useState("");
    const [consultas, setConsultas] = useState([]);

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

    const consultasFiltradasMedico = consultas.filter((consulta) =>
        consulta.medico.toLowerCase().includes(buscaMedico.toLowerCase())
    );

    const consultasFiltradasPaciente = consultas.filter((consulta) =>
        consulta.paciente.toLowerCase().includes(buscaPaciente.toLowerCase())
    );

    return (
        <div className={styles.divconsultas}>
            <div className={styles.subContainer}>
                <h1 className={styles.listam}>Lista de Consultas</h1>
                
                <div className={styles.botaoContainer}>
                    <button className={styles.botao}>Buscar Por Médico</button>
                    <button className={styles.botao}>Buscar Por Paciente</button>
                </div>
            </div>
            <div className={styles.tabela}>
                <table>
                    <thead>
                        <tr>
                            <th className={styles.th}>Id</th>
                            <th className={styles.th}>Especialidade</th>
                            <th className={styles.th}>Médico</th>
                            <th className={styles.th}>Paciente</th>
                            <th className={styles.th}>Tipo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consultas.length > 0 ? (
                            consultas.map((consulta) => (
                                <tr key={consulta.id} className={styles.consulta}>
                                    <td className={styles.td}>{consulta.id}</td>
                                    <td className={styles.td}>{consulta.especialidade}</td>
                                    <td className={styles.td}>{consulta.medico}</td>
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
