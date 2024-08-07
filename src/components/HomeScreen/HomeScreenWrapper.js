import styled from "styled-components";

const HomeScreenWrapper = styled.div`
  transform: perspective(550px) translate3d(0, 0, -250px) rotateX(27deg);
  border-radius: 20px;
  box-shadow: 0 100px 40px -20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s linear;
  border: 10px solid transparent;
  --angle: 0deg;
  border-image: conic-gradient(
      from var(--angle),
      #af0fff,
      #af0fff,
      #6a0d91,
      #6a0d91,
      #540090,
      #540090,
      #b05bff,
      #b05bff,
      #af0fff,
      #af0fff,
      #6a0d91,
      #6a0d91,
      #540090,
      #540090,
      #af0fff,
      #af0fff
    )
    1;
  animation: 3s rotate linear infinite;
  background: linear-gradient(45deg, #901169, rgb(51, 0, 131));
  background-size: 100%;
  background-repeat: no-repeat;
  padding: 20px;

  @keyframes hover {
    0%,
    100% {
      transform: perspective(750px) translate3d(0, 0, -250px) rotateX(27deg);
    }
    50% {
      transform: perspective(750px) translate3d(0, 30px, -250px) rotateX(27deg);
      box-shadow: 0 50px 20px -35px rgba(0, 0, 0, 0.2);
    }
  }

  &:hover {
    transform: perspective(750px) translate3d(0, 0, 0) rotateX(0deg);
  }

  @keyframes wave {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .letter {
    display: inline-block;
    animation: wave 1s ease-in-out infinite;
  }

  .letter:nth-child(1) {
    animation-delay: 0s;
  }
  .letter:nth-child(2) {
    animation-delay: 0.1s;
  }
  .letter:nth-child(3) {
    animation-delay: 0.2s;
  }
  .letter:nth-child(4) {
    animation-delay: 0.3s;
  }
  .letter:nth-child(5) {
    animation-delay: 0.4s;
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }

  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  .play {
    transition: transform 1s ease-in-out;
    transition-delay: 0.8s;
  }

  .play.scale-15 {
    transform: scale(15);
  }

  .play-text {
    transition: opacity 1s linear;
  }

  .play-text.opacity-0 {
    opacity: 0;
  }

  @media (max-width: 1920px) {
    transform: perspective(750px) translate3d(0, 0, -250px) rotateX(27deg)
      scale(0.9);
    &:hover {
      transform: perspective(750px) translate3d(0, 0, 0) rotateX(0deg) scale(1);
    }
  }

  @media (max-width: 1280px) {
    transform: perspective(750px) translate3d(0, 0, -250px) rotateX(38deg)
      scale(0.8);
    &:hover {
      transform: perspective(750px) translate3d(0, 0, 0) rotateX(0deg) scale(1);
    }
  }

  @media (max-width: 1024px) {
    transform: perspective(750px) translate3d(0, 0, -250px) rotateX(32deg)
      scaleY(0.7);
    &:hover {
      transform: perspective(750px) translate3d(0, 0, 0) rotateX(0deg) scale(1);
    }
  }

  @media (max-width: 830px) {
    transform: perspective(750px) translate3d(0, 0, 0) rotateX(20deg)
      scale(0.7, 0.4);
    .title {
      font-size: 100px;
    }

    .letters {
      font-size: 60px;
    }

    .letters .letter {
      transform: scale(1);
    }

    &:hover {
      transform: perspective(750px) translate3d(0, 0, 0) rotateX(0deg) scale(1);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100%;
    transform: perspective(750px) translate3d(0, 0, 0) rotateX(0deg) scale(1);
    &:hover {
      transform: perspective(750px) translate3d(0, 0, 0) rotateX(0deg) scale(1);
    }
    .letters span {
      width: 70px;
      font-size: 35px;
      padding: 10px;
    }
    .title {
      font-size: 80px;
      text-align: center;
    }
    button.play {
      transform: scale(0.7);
    }
  }

  @media (max-width: 550px) {
    .wrapper {
      transform: scale(0.7);
    }
  }

  @media (max-width: 360px) {
    .title {
      font-size: 80px;
    }

    .wrapper {
      transform: scale(0.6);
    }
  }
`;

export default HomeScreenWrapper;