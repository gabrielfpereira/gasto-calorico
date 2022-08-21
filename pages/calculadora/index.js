import { useState } from  'react'
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

            <div className={styles.form}>
            <div className={styles.formGroup}>
                <label>Sexo</label>
                <select name='sexo' onChange={(item) => setSexo(item.target.value)}>
                    <option value={"Masculino"} defaultValue>Masculino</option>
                    <option value={"Feminino"}>Feminino</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label>Idade</label>
                <input name='idade' type={"number"} onChange={(item) => setIdade(item.target.value)}/>
            </div>

            <div className={styles.formGroup}>
                <label>Peso em quilos</label>
                <input name='peso' type={"number"} onChange={(item) => setPeso(item.target.value)} />
            </div>

            <div className={styles.formGroup}>
                <label>Altura em centímetros</label>
                <input name='altura' type={"number"} onChange={(item) => setAltura(item.target.value)} />
            </div>

            <div className={styles.formGroup}>
                <label>Atividade Física</label>
                <select name='atividade' onChange={(item) => setAtividade(item.target.value)}>
                    <option value={"Sedentario"} defaultValue>Sedentário</option>
                    <option value={"Ativo"}>Ativo - 3x por semana</option>
                </select>
            </div>
            </div>

            <button className={styles.button} onClick={calcular}>Calcular</button>

            <h1>Gasto Calórico: {gasto.toFixed(2)}</h1>

            <h2>Para perder 0,5 kg por semana você deve consumir: {(gasto - 500).toFixed(2)} kcal por dia</h2>
            <h2>Para perder 1 kg por semana você deve consumir: {(gasto - 1000).toFixed(2)} kcal por dia</h2>

            <h2>Para ganhar 0,5 kg por semana você deve consumir: {(gasto + 500).toFixed(2)} kcal por dia</h2>
            <h2>Para ganhar 1 kg por semana você deve consumir: {(gasto + 1000).toFixed(2)} kcal por dia</h2>
        </div>
    )
}