import { useEffect, useRef, useState } from "react";

import Card from "../Card/Card";

import { api } from "../../services/api";

import { handleDetailsClick } from "../../helpers/handlers/handleDetailsClick";
import { handleHideModal } from "../../helpers/handlers/handleHideModal";

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
  const detaislRef = useRef<HTMLDivElement>(null);

  const [ showModal, setShowModal ] = useState(false)
  const [ cardDetails, setCardDetails ] = useState<ICardData>()
  const [ data, setData ] = useState<ICardsData>([])

  const handleClick = ({card, i}: IHandleClick) => {
    setCardDetails(card)

    if(cardRef.current[i]?.classList[2]){
      return handleHideModal({detaislRef,cardRef ,setShowModal})
    }
    setShowModal(prevState => (!prevState))

    cardRef.current.map(card => card.classList.remove('current-card'))
    return cardRef.current[i]?.classList.add('current-card')
  }
 
  useEffect(() => {
    api.get(`?name=Dark Magician|Blue-Eyes White Dragon|Dark Magician Girl`).then(
      response => {        
        setData(response.data.data)
        
        setData(prevState => (
          prevState.map((state,i)=> ({
            ...state,
            image: response.data.data[i].card_images[0].image_url,
            secondary_image: response.data.data[i].card_images[2]?.image_url
          }))
        ))
      }
    ).catch(err => console.log)
  },[])

  return (
    <Container>
      <div className="grid">grid</div>
      <div className="cards-container">
        {showModal && (
          <div 
            ref={detaislRef} 
            className="card-details"
            onClick={() => handleDetailsClick({cardRef, detaislRef, setShowModal})}
          >
            <img className="card-details__image" src={cardDetails?.secondary_image} alt="card" />
          </div>
        )}
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
