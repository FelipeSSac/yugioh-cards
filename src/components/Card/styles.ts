import styled from 'styled-components'

export const Container = styled.article`
  display: inline-block;

  border-radius: 10px;
  perspective: 1000px;
  animation: toBack 2s ease forwards;

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
      -webkit-box-shadow:0 0 30px #B037D4; 
      -moz-box-shadow: 0 0 30px #B037D4;  
      box-shadow: 0 0 30px #B037D4;
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
    animation: toFront 2s ease forwards;
    transform: scale(1.3);
    
    .card{
      -webkit-box-shadow:0 0 30px #B037D4; 
      -moz-box-shadow: 0 0 30px #B037D4;  
      box-shadow: 0 0 30px #B037D4;

      transform: rotateY(180deg);
    }
  }

  @keyframes toBack {
    from {z-index: 10;}
    to {z-index: 8;}
  }

  @keyframes toFront {
    from {z-index: 8;}
    to {z-index: 10;}
  }
`