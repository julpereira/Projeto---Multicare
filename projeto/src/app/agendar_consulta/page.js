'use client';
import React, { useState, useEffect } from 'react';
import styles from './agendar.module.css';

const AgendarConsulta = () => {
    const [pacientes, setPacientes] = useState([]);
    const [medicos, setMedicos] = useState([]);
    const [formData, setFormData] = useState({
        paciente: '',
        medico: '',
        data: '',
        hora: '',
        tipo: ''
    });

    useEffect(() => {
        fetch('https://api-clinica-2a.onrender.com/pacientes')
            .then(response => response.json())
            .then(data => setPacientes(data));
        
        fetch('https://api-clinica-2a.onrender.com/medicos')
            .then(response => response.json())
            .then(data => setMedicos(data));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Consulta agendada:', formData);
        alert('Consulta agendada com sucesso!');
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.titulo}>Agendar Consulta</h2>
            <form className={styles.formulario} onSubmit={handleSubmit}>
                <label>Paciente</label>
                <select name="paciente" className={styles.input} onChange={handleChange} required>
                    <option value="">Selecione um paciente</option>
                    {pacientes.map(paciente => (
                        <option key={paciente.id} value={paciente.nome}>{paciente.nome}</option>
                    ))}
                </select>

                <label>Médico</label>
                <select name="medico" className={styles.input} onChange={handleChange} required>
                    <option value="">Selecione um médico</option>
                    {medicos.map(medico => (
                        <option key={medico.id} value={medico.nome}>{medico.nome} - {medico.especialidade}</option>
                    ))}
                </select>

                <label>Data</label>
                <input type="date" name="data" className={styles.input} onChange={handleChange} required />

                <label>Hora</label>
                <input type="time" name="hora" className={styles.input} onChange={handleChange} required />

                <label>Tipo</label>
                <select name="tipo" className={styles.input} onChange={handleChange} required>
                    <option value="">Selecione o tipo</option>
                    <option value="Presencial">Plano de saúde</option>
                    <option value="Online">Particular</option>
                </select>

                <button type="submit" className={styles.botao}>Agendar Consulta</button>
            </form>
        </div>
    );
};

export default AgendarConsulta;
