import './Formulario.css'
import CampoTexto from '../CampoTexto'
import Botao from '../Botao'
import { useState } from 'react'
import ListaSuspensa from '../ListaSuspensa'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImage] = useState('')
    const [time, setTime] = useState('')


    const Saved = (event) => {
        event.preventDefault()
        props.addColaborador({
            nome: nome,
            cargo: cargo,
            imagem: imagem,
            time: time
        })

        setNome('')
        setCargo('')
        setImage('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={Saved}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" obrigatorio={true} placeholder="Digite o seu nome" valor={nome} Changed={valor => setNome(valor)}/>
                <CampoTexto label="Cargo" obrigatorio={true} placeholder="Digite o seu cargo" valor={cargo} Changed={valor => setCargo(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} Changed={valor => setImage(valor)}/>
                <ListaSuspensa label="Time" obrigatorio={true} itens={props.times} valor={time} Changed={valor => setTime(valor)}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario