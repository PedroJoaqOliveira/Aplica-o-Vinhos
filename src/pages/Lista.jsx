import Header from "../components/Header/Header"
import Barra from "../components/Barra/Barra"
import Body from "../components/Body/Body"
import Body2 from "../components/Body-2/Body-2"
import Cards from "../components/Cards/Cards"


function Lista() {
    return(
        <>
            <div className="Fixed">
                <Header/>
            </div>
            <div className="Conteiner">
                <Barra/>
                <Body/>
                <Body2/>
            </div>
            <div className="Fixed">
                <Cards/>
            </div>
        </>
    )   
}

export default Lista