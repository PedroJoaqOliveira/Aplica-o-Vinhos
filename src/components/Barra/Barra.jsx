import { Link } from "react-router-dom"

function Barra() {
    return(

        <>
        <div className="Barra-Conteiner">
        <div className="Barra-total">
        <Link className="buttons-barra" to='/'>
            Home 
        </Link>
        <Link className="buttons-barra" to='/Lista'>
            Lista 
        </Link>
        <Link className="buttons-barra" to='/'>
            Busca 
        </Link>
        <Link className="buttons-barra" to='/'>
            Conta 
        </Link>
        </div>
        </div>
        </>
    )
}

export default Barra