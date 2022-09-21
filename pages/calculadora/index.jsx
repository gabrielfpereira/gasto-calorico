import { useState } from  'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../../styles/Calculadora.module.css'

export default function Calculadora (){
    const [idade,setIdade] = useState(0)
    const [altura,setAltura] = useState(0)
    const [peso,setPeso] = useState(0)
    const [sexo,setSexo] = useState('Masculino')
    const [atividade,setAtividade] = useState('Sedentario')
    const [gasto,setGasto] = useState(0)

    const calcular = () => {
        if(sexo == 'Masculino'){
            const TBM = (13.75 * peso) + ( 5 * altura ) - (6.76 * idade) + 66.5

            if(atividade == 'Sedentario'){
                console.log(TBM * 1.2)
                setGasto(TBM * 1.2)
            }else{
                console.log(TBM * 1.375)
                setGasto(TBM * 1.375)
            }
        }

        if(sexo == 'Feminino'){
            const TBM = (9.56 * peso) + ( 1.85 * altura ) - (4.68 * idade) + 665

            if(atividade == 'Sedentario'){
                console.log(TBM * 1.2)
                setGasto(TBM * 1.2)
            }else{
                console.log(TBM * 1.375)
                setGasto(TBM * 1.375)
            }
        }
    }
    return (
        <div className={styles.main}>
            <h1 className={styles.title}> Calculadora de Gasto Calórico</h1>
            <p>Precisamos de alguns dados para que possamos fazer o calculo para você</p>

            <div className={styles.form}>
                <div className={styles.formGroup}>
                    <div className={styles.boxImages}>
                        <Image 
                            src={ require('../imgs/boy.svg')}
                            width={50}
                            height={50}
                            alt="imagem"
                        />

                        <Image 
                            src={ require('../imgs/girl.svg')}
                            width={50}
                            height={50}
                            alt="imagem"
                        />
                    </div>
                    <label>Qual o seu Sexo?</label>
                    
                    <div className={styles.boxInput}>
                        <select className={styles.selects} name='sexo' onChange={(item) => setSexo(item.target.value)}>
                            <option value={"Masculino"} defaultValue>Masculino</option>
                            <option value={"Feminino"}>Feminino</option>
                        </select>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.boxImages}>
                        <Image 
                            src={ require('../imgs/calendario.svg')}
                            width={50}
                            height={50}
                            alt="imagem"
                        />

                    </div>
                    <label>Qual é a sua Idade?</label>
                    <div className={styles.boxInput}>
                        <input className={styles.inputs} name='idade' type={"number"} onChange={(item) => setIdade(item.target.value)}/>
                        <span>anos</span>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.boxImages}>
                        <Image 
                            src={ require('../imgs/balanca.svg')}
                            width={50}
                            height={50}
                            alt="imagem"
                        />
                    </div>
                    <label>Qual é o seu Peso?</label>
                    <div className={styles.boxInput}>
                        <input className={styles.inputs} name='peso' type={"number"} onChange={(item) => setPeso(item.target.value)} />
                        <span>kg</span>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.boxImages}>
                        <Image 
                            src={ require('../imgs/altura.svg')}
                            width={50}
                            height={50}
                            alt="imagem"
                        />
                    </div>
                    <label>Qual a sua altura?</label>

                    <div className={styles.boxInput}>
                        <input className={styles.inputs} name='altura' type={"number"} onChange={(item) => setAltura(item.target.value)} />
                        <span>cm</span>
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label>Atividade Física</label>
                    <select className={styles.atividade_fisica} name='atividade' onChange={(item) => setAtividade(item.target.value)}>
                        <option value={"Sedentario"} defaultValue>Sedentário</option>
                        <option value={"Ativo"}>Ativo - 3x por semana</option>
                    </select>
                </div>
            </div>

            <button className={styles.button} onClick={calcular}>Calcular</button>

            <div className={styles.infos_tmb}>
                <h1>{gasto.toFixed(2)} Kcal</h1>
                <span>Quantida de calorias necessárias por dia</span>
            </div>

            <Link href={'./refeicoes'}><a className={styles.button}>Montar Refeição</a></Link>
            <div className={styles.boxResultados}>
                <div className={styles.resultados}>
                    <span>Para <strong>perder</strong></span>
                    <h2 className={styles.infos}>0,5 kg</h2>
                    <span>por semana você deve consumir: </span>
                    <h2 className={styles.infos}>{(gasto - 500).toFixed(2)}</h2>
                    <span>kcal por dia</span>
                </div>

                <div className={styles.resultados}>
                    <span>Para <strong>perder</strong></span>
                    <h2 className={styles.infos}>1 kg</h2>
                    <span>por semana você deve consumir: </span>
                    <h2 className={styles.infos}>{(gasto - 1000).toFixed(2)}</h2>
                    <span>kcal por dia</span>
                </div>

                <div className={styles.resultados}>
                    <span>Para <strong>ganhar</strong></span>
                    <h2 className={styles.infos}>0,5 kg</h2>
                    <span>por semana você deve consumir: </span>
                    <h2 className={styles.infos}>{(gasto + 500).toFixed(2)}</h2>
                    <span>kcal por dia</span>
                </div>

                <div className={styles.resultados}>
                    <span>Para <strong>ganhar</strong></span>
                    <h2 className={styles.infos}>1 kg</h2>
                    <span>por semana você deve consumir: </span>
                    <h2 className={styles.infos}>{(gasto + 1000).toFixed(2)}</h2>
                    <span>kcal por dia</span>
                </div>
            </div>

        </div>
    )
}