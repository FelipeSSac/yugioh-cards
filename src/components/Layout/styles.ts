import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;

  background: rgb(0,0,0);
  perspective: 700px;

  .grid {
    width: 200%;
    height: 300px;

    position: fixed;
    bottom: 20%;
    left: -50%;

    transform-style: preserve-3d;
    perspective-origin: top;
    transform: translate3D(0, 0, 0) perspective(150px) rotateX(45deg) ;    
    
    background-color: rgba(20 30 40 0.4);
    background-image: linear-gradient(90deg, transparent 0%, transparent 65%, #B037D4 50%, transparent 90%), linear-gradient(0deg, transparent 0%, transparent 65%, #B037D4 50%, transparent 90%);
    background-size: 18px 12px;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, transparent, black);
    }
  }

  .card-details{
    width: 100%;
    height: 100%;

    position: absolute;
    z-index: 9;
    inset: 0;

    background: rgb(128,0,128);
    background: linear-gradient(65deg, rgba(128,0,128,1) 17%, rgba(97,5,31,1) 52%, rgba(247,122,31,0) 100%);
    animation: showModal 2s ease forwards;

    &.hide-details{
      animation: hideModal 2s ease forwards;
    }
  }

  .cards-container{
    width: 100%;
    
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }

  @keyframes showModal {
    from {opacity: 0;}
    to {opacity: 1;}
  }

  @keyframes hideModal {
    from {opacity: 1;}
    to {opacity: 0;}
  }
`