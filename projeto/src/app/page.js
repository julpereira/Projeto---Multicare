import Link from "next/link";
import styles from "../app/page.module.css";   

export default function Home() {
  return (
    <div className={styles.boasvindas}>
      <p className={styles.paragrafo}>Olá, bem-vindo à MultiCare!
      Cuidar de você é a nossa missão.<br></br>
      Com dedicação, excelência e um atendimento humanizado,<br></br>
      estamos prontos para oferecer o melhor para a sua saúde e bem-estar.<br></br>
      Conte com a nossa equipe sempre que precisar!</p>
      <button className={styles.agendar}><Link href="/agendar">Agendar consulta</Link></button>
    </div>   

  );

}