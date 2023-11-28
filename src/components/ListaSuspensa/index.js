import './ListaSuspensa.css'

const ListaSuspensa = (props) => {

    return (
        <div className="listaSuspensa">
            <label>{props.label}</label>
            <select onChange={event => props.Changed(event.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa