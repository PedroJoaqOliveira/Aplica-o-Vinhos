import Header from "../components/Header/Header"
import Barra from "../components/Barra/Barra"
import Body from "../components/Body/Body"
import Body2 from "../components/Body-2/Body-2"

function Home() {
    return(
        <>
        <Header/>
        <div className="Conteiner">
        <Barra/>
        <Body/>
        <Body2/>
        </div>
        </>
    )
}

export default Home