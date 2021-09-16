import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

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

  .cards-container{
    width: 100%;

    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);  
    
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
  }
`