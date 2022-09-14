import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gasto de Calorias</title>
        <meta name="description" content="Calculadora de gastos calóricos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>
            Gasto Calórico
          </h1>

        </div>

        <Link href='/calculadora'>
          <a  className={styles.button}>Calculadora</a>
        </Link>

        <h2 className={styles.subtitle}>Perca peso e se alimente de maneira saudável</h2>
        <h2 className={styles.subtitle}>Quantas calorias preciso consumir por dia?</h2>
        <p>O ganho de peso está diretamente associado à diferença entre a ingestão e o gasto de calorias ao longo dos dias. Emagrecer ou engordar é resultado de uma simples matemática. Se o indivíduo engorda é porque está ingerindo mais calorias do que gasta; se mantém o peso estável é porque ingere uma quantidade de calorias semelhantes ao seu gasto diário; se emagrece é porque está queimando mais calorias do que ingere. É simples assim, não existe outra explicação para perda ou ganho de peso.</p>
      </main>

      <footer className={styles.footer}>
        <span>Desenvolvido por 
          <a href='https://www.linkedin.com/in/gabriel-fernando-pereira-30748b195/'>Gabriel F. Pereira</a>
        </span>
      </footer>
    </div>
  )
}
