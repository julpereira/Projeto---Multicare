"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
	const [isNavVisible, setIsNavVisible] = useState(null);
	const alternarNav = (menuName) => {
		setIsNavVisible(isNavVisible === menuName ? null : menuName);
	};

	return (
		<div>
			<header className="header">
				<nav className={styles.barraNavegacao}>
					<div className={styles.logoContainer}>
						<Image src="/imagens/logo.png" width="80" height="80" alt="Logo" className={styles.imagemLogo} />
					</div>

		
					<ul className={styles.itensMenu}>
						<li>
							<Link href="/" className={styles.fonte}>Início </Link>
						</li>
						<li>
							<button onClick={() => alternarNav("medico")} className={styles.botaoMenu}>
								<Link href="/" className={styles.fonte}>Médicos</Link>
							</button>
							<ul className={`${styles.subMenu} ${isNavVisible === "medico" ? styles.mostrar : ""}`}>
								<li>
									<a href="/listar_medicos" className={styles.itemSubMenu}>Listar registros</a>
								</li>
								<li>
									<a href="#" className={styles.itemSubMenu}>Editar</a>
								</li>
								<li>
									<a href="#" className={styles.itemSubMenu}>Adicionar</a>
								</li>
								<li>
									<a href="#" className={styles.itemSubMenu}>Excluir</a>
								</li>
							</ul>
						</li>
						<li>
							<button onClick={() => alternarNav("paciente")} className={styles.botaoMenu}>
								<Link href="/" className={styles.fonte}>Pacientes</Link>
							</button>
							<ul className={`${styles.subMenu} ${isNavVisible === "paciente" ? styles.mostrar : ""}`}>
								<li>
									<a href="/listar_pacientes" className={styles.itemSubMenu}>Listar registros</a>
								</li>
								<li>
									<a href="#" className={styles.itemSubMenu}>Editar</a>
								</li>
								<li>
									<a href="#" className={styles.itemSubMenu}>Adicionar</a>
								</li>
								<li>
									<a href="#" className={styles.itemSubMenu}>Excluir</a>
								</li>
							</ul>
						</li>
						<li>
							<button onClick={() => alternarNav("consulta")} className={styles.botaoMenu}>
								<Link href="/" className={styles.fonte}>Consulta</Link>
							</button>
							<ul className={`${styles.subMenu} ${isNavVisible === "consulta" ? styles.mostrar : ""}`}>
								<li>
									<a href="/listar_consulta" className={styles.itemSubMenu}>Listar consultas</a>
								</li>
								<li>
									<a href="/agendar_consulta" className={styles.itemSubMenu}>Agendar consulta</a>
								</li>
								<li>
									<a href="#" className={styles.itemSubMenu}>Editar agendamentos</a>
								</li>
								<li>
									<a href="#" className={styles.itemSubMenu}>Cancelar</a>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
}
