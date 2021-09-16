import { useEffect, useRef, useState } from "react";

import { api } from "../../services/api";

import Card from "../Card/Card";
import { Container } from "./styles";

type ICardData = {
  id: string;
  name: string;
  image: string;
  secondary_image: string;
  race: string;
  type: string;
  level: number;
}

type ICardsData = Array<ICardData>

interface IHandleClick {
  card: ICardData;
  i: number;
}

export default function Layout() {
  const cardRef = useRef(new Array(3));

  const [ cardDetails, setCardDetails ] = useState<ICardData>()
  const [data, setData] = useState<ICardsData>([])

  const handleClick = ({card, i}: IHandleClick) => {
    setCardDetails(card)

    if(cardRef.current[i]?.classList[2]){
      return cardRef.current[i]?.classList.remove('current-card')
    }

    cardRef.current.map(card => card.classList.remove('current-card'))
    return cardRef.current[i]?.classList.add('current-card')
  }

  useEffect(() => {
    api.get(`?name=Dark Magician|Baby Dragon|Time Wizard`).then(
      response => {        
        setData(response.data.data)
        
        setData(prevState => (
          prevState.map((state,i)=> ({
            ...state,
            image: response.data.data[i].card_images[0].image_url,
            secondary_image: response.data.data[i].card_images[1]?.image_url
          }))
        ))
      }
    ).catch(err => console.log)
  },[])

  return (
    <Container>
      <div className="grid">grid</div>
      <div className="card-details">
        <h1>{cardDetails?.name}</h1>
        <h3>Race: {cardDetails?.race}</h3>
        <h3>Type: {cardDetails?.type}</h3>
      </div>
      <div className="cards-container">
        {data.map((card, i)=> (
          <Card
            key={card.id}
            ref={element => cardRef.current[i] = element}
            image={card.image}
            name={card.name}
            onClick={() => handleClick({ card, i })}
          />
        ))}
      </div>
    </Container>
  );
}
