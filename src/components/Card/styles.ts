import styled from 'styled-components'

export const Container = styled.article`
  display: inline-block;

  border-radius: 10px;
  perspective: 1000px;
  z-index: 10;
  transition: transform 2s ease;

  .card{ 
    width: 21.05rem;
    height: 30.7rem;

    position: relative;

    border-radius: 10px;
    transform-style: preserve-3d;   
    transition: transform 2s ease, box-shadow 1s ease;

    transform: rotate3d(10deg, 10deg, 10deg, 10deg);

    &:hover {
      transform: rotateY(180deg);
    }
  }

  .card-front,
  .card-back{
    width: 100%;
    height: 100%;
    
    object-fit: cover;
    position: absolute;
    inset:0;

    border-radius: 10px;
  }

  .card-front{
    transform: rotateY(180deg);
  }

  .card-back{ 
    backface-visibility: hidden;
  }

  &.current-card{
    transform: scale(1.1);
    
    .card{
      -webkit-box-shadow:0 0 30px #B037D4; 
      -moz-box-shadow: 0 0 30px #B037D4;  
      box-shadow: 0 0 30px #B037D4;

      transform: rotateY(180deg);
    }
  }
`