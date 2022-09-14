import { useEffect, useState } from 'react'
import styles from '../../styles/Refeicoes.module.css'

import { alimentos } from './caloriasAlimentos'

export default function Refeicoes(){
    const [refeicao, setRefeicao] = useState([])
    const [totalKcal, setTotalKcal] = useState(0)
    const [edit, setEdit] = useState(null)
    const [listAlimentos, setList] = useState([...alimentos])

    function converterEmColher(gramas){
        return (gramas * 10)  / 100
    }

    function addAlimento(item){
        listAlimentos.map((alimento, index) => {
            if(item.value == index){

                const refData =[ ...refeicao]
                const data = refData.findIndex( item => item.nome == alimento.nome)

                if(data != -1){
                    refData.splice(data,1)
                    console.log(refData)
                    setRefeicao(refData)

                }else{
                    setRefeicao([...refeicao, alimento])
                }
                       
            }
        })

    }

    function calcularKcal(){
        let total = 0
        refeicao.map( item => {
            total += item.calorias
        })

        setTotalKcal(total)
    }

    function setCaloria(gramas, index){
        const alimento = refeicao.find( (item, i) => i == index)
        const data = [...refeicao]

        alimento.gramas = parseInt(gramas)

        data[index] = alimento

        setRefeicao([...data])
    }

    useEffect(()=>{
        calcularKcal()
    },[refeicao, edit, calcularKcal])

    return (
        <div className={styles.main}>
            <h1>Monte suas Refeições</h1>
            <h3>Refeição: </h3>
            <div className={styles.boxRefeicoes}>
                {refeicao.map( (item, index) => (
                    <div className={styles.refeicao} key={index}>
                        <h3 key={index}> { item.nome}</h3>
                        <p> 
                            {item.gramas}g / {converterEmColher(item.gramas)} colheres
                        </p>
                    </div>
                ))}
            </div>
            <p>Total calorias: {totalKcal}kcal</p>
            
            <div>
                { alimentos.map( (item, index) => (
                    <div className={styles.alimentoGroup} key={index}>
                        <input type="checkbox" name="alimento" id={item.nome} value={index} onChange={(item) => addAlimento(item.target)} />
                        <label htmlFor={item.nome}>{item.nome} - {item.gramas}g - {item.calorias}Kcal</label>
                    </div>
                ))}
            </div>
        </div>
    )
}