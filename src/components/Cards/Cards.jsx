import { dadosCards } from "../../data";

function Cards() {

    return (
        <>
            <div className="Cards-conteiner">
                {
                    dadosCards.map((element) => (
                        <div key={element.nome}>
                            <div className="Cards">
                                <div className="Cards-img">
                                    <img src={element.imagem} />
                                </div>
                                <div className="Cards-nome">
                                    <h2>{element.nome}</h2>
                                </div>
                                <div className="Cards-Preco">
                                    <h1>R${element.preco}</h1>
                                    <h2>ID: {element.id}</h2>
                                </div>
                                <button className="Cards-Btn">Ver Item</button>
                            </div>
                        </div>

                    ))}
            </div>
        </>
    );

}

export default Cards;