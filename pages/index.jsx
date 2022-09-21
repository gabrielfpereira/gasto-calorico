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

          <h2 className={styles.subtitle}>Perca peso e se alimente de maneira saudável <br/> </h2>
          <h2 className={styles.text}>Uma forma prática e rápida de calcular quantas calorias deve ingerir por dia</h2>
          <Link href='/calculadora'>
            <a  className={styles.button}>Calcular Agora</a>
          </Link>
        </div>

        <h1 className={styles.subtitle}>Com nossa calculadora, você pode calcular a necessidade de calorias diárias de homens e mulheres, pois considera os requerimentos do seu corpo no seu peso atual.</h1>

        <h2 className={styles.subtitle}>Cálculo de calorias diárias</h2>
        <p>Se você está buscando ajustar sua ingestão de calorias diárias para emagrecer, ganhar peso ou manter a forma, adaptar quantas calorias por dia você come baseado no seu peso atual é essencial. Como é de se esperar, alguém com altura abaixo da média necessita de menos calorias que uma pessoa mais alta que a média. Este é um dos motivos pelos quais a necessidade de calorias diárias dos homens é normalmente maior do que as calorias diárias das mulheres, pois homens tendem a ter estatura maior, o que também influencia na quantidade de calorias diárias infantil. As pessoas que pesam mais utilizam mais calorias por dia, assim demandam uma ingestão calórica maior.</p>

        <h2 className={styles.subtitle}>Quantas calorias preciso consumir por dia?</h2>
        <p>O ganho de peso está diretamente associado à diferença entre a ingestão e o gasto de calorias ao longo dos dias. Emagrecer ou engordar é resultado de uma simples matemática. Se o indivíduo engorda é porque está ingerindo mais calorias do que gasta; se mantém o peso estável é porque ingere uma quantidade de calorias semelhantes ao seu gasto diário; se emagrece é porque está queimando mais calorias do que ingere. É simples assim, não existe outra explicação para perda ou ganho de peso.</p>

        <p>Para emagrecer pelo menos meio quilo por semana, o indivíduo deve gastar, em média, 500 calorias a mais do que ingere ao longo do dia. Para emagrecer 1 quilo por semana, é preciso ingerir 1000 calorias a menos que o gasto basal do organismo.</p>


      </main>

      <footer className={styles.footer}>
        <span>Desenvolvido por 
          <a href='https://www.linkedin.com/in/gabriel-fernando-pereira-30748b195/'>Gabriel F. Pereira</a>
        </span>
      </footer>
    </div>
  )
}
