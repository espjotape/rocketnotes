import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: space-between;

  padding: 0 80px;
  
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    height: 56px; 
    width: 56px;
    border-radius: 50%;
   
    box-shadow: 0px 0px 0px 3px ${({ theme }) => theme.COLORS.ORANGE};
    border: 3px solid #312E38;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100}
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE}
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  
  svg {
    font-size: 36px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    transition: 0.4s;
  }
  svg:hover {
    color: ${({ theme }) => theme.COLORS.ORANGE}
  }
`