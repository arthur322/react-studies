import styled from 'styled-components'

import background from '../../assets/images/relationship-background.jpg'

export const Content = styled.div`
  width: 100%;
  height: -webkit-fill-available;
  position: relative;

  &::after {
    content: '';
    background-image: url(${background});
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    background-color: #ccc;
    opacity: 0.5;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;

    @media (max-width: 768px) {
      background-position: center;
    }
  }

  article {
    width: 500px;
    background: rgba(204, 204, 204, 0.5);
    padding: 50px;
    margin: auto auto auto 0;
    border-radius: 15px;

    @media (max-width: 768px) {
      width: 100%;
      padding: 20px;
    }

    h1 {
      font-size: 36px;
      margin-bottom: 20px;
    }

    p {
      line-height: 1.6;
    }
  }
`
