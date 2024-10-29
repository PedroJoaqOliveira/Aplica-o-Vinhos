function Cards() {
  const Dados_Cards = [
      {
        id: 1,
        nome: "Capitán Tomás",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/28319-01.png",
        preco: 54,
      },
      {
        id: 2,
        nome: "Ballade by Miolo ",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/28526-01.png",
        preco: 41,
      },
      {
        id: 3,
        nome: "Domaine de Lostal ",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/25653-01.png",
        preco: 164,
      },
      {
            id: 4,
        nome: "Baron Philippe",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/26277-01.png",
        preco: 34,
      },
      {
            id: 5,
        nome: "Famille J-M Cazes",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/27274-01.png",
        preco: 499,
      },
      {
        id: 6,
        nome: "Domaine De Lostal",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29570-01.png",
        preco: 164,
      },
      {
        id: 7,
        nome: "Montes Classic Series",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29635-01.png",
        preco: 94,
      },
      {
        id: 8,
        nome: "Porto Burmester Extra",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/14712-01.png",
        preco: 94,
      },
      {
          id: 9,
        nome: "Ropiteau Frères",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30242-01.png",
        preco: 769,
      },
      {
          id: 10,
        nome: "Susana Balbo",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30785-01.png",
        preco: 139,
      },
      {
        id: 11,
        nome: "Esquinas de Argento",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/23509-01.png",
        preco: 219,
      },
      {
        id: 12,
        nome: "MacMurray Ranch",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/25878-01.png",
        preco: 323,
      },
      {
        id: 13,
        nome: "Gallo Signature",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/25881-01.png",
        preco: 577,
      },
      {
        id: 14,
        nome: "Ventisquero Queulat",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30781-01.png",
        preco: 109,
      },
      {
        id: 15,
        nome: "Anduco Winemarkers",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29580-01.png",
        preco: 44,
      },
      {
        id: 16,
        nome: "Ventisquero Queulat ",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29215-01.png",
        preco: 109,
      },
      {
        id: 17,
        nome: "Tenuta di Nozzole Il",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/27638-01.png",
        preco: 1.156,
      },
      {
        id: 18,
        nome: "Sagrado VT Grande",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/28957-01.png",
        preco: 379,
      },
      {
        id: 19,
        nome: "Generation 1905 Vin",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/28110-01.png",
        preco: 44,
      },
      {
        id: 20,
        nome: "Clos de Los Siete",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30107-01.png",
        preco: 96,
      },
      {
        id: 21,
        nome: "Famille J-M Cazes",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29569-01.png",
        preco: 499,
      },
      {
        id: 22,
        nome: "Las Mercedes Remix",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/28988-01.png",
        preco: 99,
      },
      {
        id: 23,
        nome: "Las Mercedes",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/28989-01.png",
        preco: 99,
      },
      {
        id: 24,
        nome: "Turning Leaf ",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/7775-01.png",
        preco: 84,
      },
      {
          id: 25,
        nome: "Secreto Eterno",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/28868-01.png",
        preco: 44,
      },
      {
        id: 26,
        nome: "Cantine Pellegrino",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30301-01.png",
        preco: 86,
      },
      {
        id: 27,
        nome: "Parthenium D.O.C.",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30600-01.png",
        preco: 68,
      },
      {
        id: 28,
        nome: "Tareni D.O.C.",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30303-01.png",
        preco: 93,
      },
      {
          id: 29,
        nome: "Finca Trapezio Grand",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/23946-01.png",
        preco: 74,
      },
      {
          id: 30,
        nome: "Porto Burmester Tawny",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/14711-01.png",
        preco: 74,
      },
      {
        id: 31,
        nome: "Juan Cristóbal Malbec",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/28011-01.png",
        preco: 47,
      },
      {
        id: 32,
        nome: "Dancing Bull Cabernet",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/25861-01.png",
        preco: 104,
      },
      {
        id: 33,
        nome: "Cerro Torre Red Blend",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29668-01.png",
        preco: 34,
      },
      {
          id: 34,
        nome: "Ventisquero Obliqua",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30779-01.png",
        preco: 549,
      },
      {
          id: 35,
        nome: "Letargo D.O.Ca. Rioja",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/26814-01.png",
        preco: 59,
      },
      {
        id: 36,
        nome: "BenMarco Valle de Uco",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30787-01.png",
        preco: 149,
      },
      {
        id: 37,
        nome: "Dark Horse Cabernet",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29807-01.png",
        preco: 72,
      },
      {
        id: 38,
        nome: "Espumante U",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29347-01.png",
        preco: 44,
      },
      {
          id: 39,
        nome: "System Rosenium",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29652-01.png",
        preco: 29,
      },
      {
          id: 40,
        nome: "Juan Cristóbal Shira",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30253-01.png",
        preco: 29,
      },
      {
        id: 41,
        nome: "Partridge Flying",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/27681-01.png",
        preco: 54,
      },
      {
        id: 42,
        nome: "Portillo Valle de Uco",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30103-01.png",
        preco: 39,
      },
      {
        id: 43,
        nome: "Faisán Chardonnay",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/25296-01.png",
        preco: 42,
      },
      {
          id: 44,
        nome: "Baron Philippe",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/26844-01.png",
        preco: 47,
      },
      {
          id: 45,
        nome: "Ventisquero Grey ",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29688-01.png",
        preco: 174,
      },
      {
        id: 46,
        nome: "Finca Dorada",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29054-01.png",
        preco: 42,
      },
      {
        id: 47,
        nome: "1922 Syrah Malbec",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/29897-01.png",
        preco: 44,
      },
      {
        id: 48,
        nome: "Herdade de São Miguel",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/31036-01.png",
        preco: 125,
      },
      {
          id: 49,
        nome: "Torres Purgatori",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/31029-01.png",
        preco: 408,
      },
      {
          id: 50,
        nome: "Albert Bichot",
        imagem:"https://www.wine.com.br/cdn-cgi/image/f=png,h=176,q=99/assets-images/produtos/30783-01.png",
        preco: 628,
      },
  ];

  return (
    <>
          <div className="Cards-conteiner">
            {Dados_Cards.map((element) => (
              <div key={element.nome}>
              <div className="Cards">
              <div className="Cards-img">
                <img src={element.imagem}/>
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
