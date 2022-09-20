import { useEffect, useState } from 'react'
import styles from '../../styles/Refeicoes.module.css'

import { alimentos } from '../../components/refeicoes/caloriasAlimentos'
import service from '../../components/refeicoes/service'

export default function Refeicoes(){
    const [refeicao, setRefeicao] = useState([])
    const [totalKcal, setTotalKcal] = useState(0)
    const [edit, setEdit] = useState(null)
    const [listAlimentos, setList] = useState([])

    function converterEmColher(gramas){
        return (gramas * 10)  / 100
    }

    function addAlimento(item){
        const alimento = service.find(item.value)
        console.log(item.value)
        const data = refeicao.findIndex( item => item.nome == alimento.nome)
        console.log("data: " + data)
        if(data != -1){
            let duplication = [...refeicao]
            duplication.splice(data,1)
            setRefeicao(duplication)

        }else{
            setRefeicao([...refeicao, alimento])
        }
                       
            
        

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
        setList(service.findAll()),
        calcularKcal()
    },[refeicao, edit, calcularKcal])

    return (
        <div className={styles.main}>
            <h1>Monte suas Refeições</h1>
            <h3>Refeição: </h3>
            <div className={styles.boxRefeicoes}>
                {refeicao && refeicao.map( (item, index) => (
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
                        <input type="checkbox" name="alimento" id={item.nome} value={item.nome} onChange={(item) => addAlimento(item.target)} />
                        <label htmlFor={item.nome}>{item.nome} - {item.gramas}g - {item.calorias}Kcal</label>
                    </div>
                ))}
            </div>
        </div>
    )
}