import React from 'react';

import CardBack from '../../assets/images/back-card.jpg'

import { Container } from './styles'

interface ICardProps {
  image: string;
  name: string;
  onClick: () => void;
}

const Card = React.forwardRef<HTMLElement, ICardProps>((props, ref) => {
  return(
    <Container
      ref={ref}
      onClick={props.onClick}
    >
      <div className="card">
        <img 
            src={props.image} 
            alt={props.name}
            className="card-front"
          />
          <img 
            src={CardBack} 
            alt="Back Side Card" 
            className="card-back"
          />
      </div>
    </Container>
  )
})

export default Card;