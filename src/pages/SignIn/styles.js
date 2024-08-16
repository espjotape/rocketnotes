import styled from "styled-components";
import BackgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  
  display: flex;
  align-items: stretch;

 
`

export const Form = styled.div`
  padding: 0 136px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    margin-top: 18px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    margin-bottom: 48px;
  }

  > h2 {
    font-size: 24px;
    margin-bottom: 48px;
  }

  > a {
    margin-top: 70px;
    color: ${({ theme }) => theme.COLORS.ORANGE};

  };
`

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center center;
  background-size: cover;
`