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

    function calcularCalorias(gramas, nomeAlimento){
        const alimento = service.find(nomeAlimento)
        const duplication = [...refeicao]

        const alimentoAlterar = duplication.find( (item) => item.nome == nomeAlimento)

        alimentoAlterar.calorias = (gramas * alimento.calorias) / 100

        setRefeicao([...refeicao, alimentoAlterar])
    }

    useEffect(()=>{
        setList(service.findAll()),
        calcularKcal()
    },[refeicao, edit, calcularKcal])

    return (
        <div className={styles.main}>
            <h1>Monte sua Refeição</h1>

            <p>Selecione na lista os alimentos da sua refeição.</p>
            <div className={styles.boxRefeicoes}>
                {refeicao && refeicao.map( (item, index) => (
                    <div className={styles.refeicao} key={index}>
                        <h3 key={index}> { item.nome}</h3>
                        <p> 
                            {item.gramas}g / {converterEmColher(item.gramas)} col / {item.calorias} Kcal
                        </p>
                    </div>
                ))}
            </div>
            <h2 className={styles.subtitle}>Total calorias: {totalKcal}kcal</h2>
            <span className={styles.text}>Esse é o total de calorias da refeição que você montou.</span>
            
            <div className={styles.lista_alimentos}>
                <p>Lista de Alimentos:</p>
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