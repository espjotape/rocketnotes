import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
  "brand header"
  "menu search"
  "menu content"
  "newnote content";
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const Brand = styled.div`
  grid-area: brand;

  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme}) => theme.COLORS.ORANGE}; 
  }
 
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`
export const Menu = styled.ul`
  grid-area: menu;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  text-align: center;
  padding-top: 64px;
  > li {
    margin-top: 24px
  }
`
export const Search = styled.div`
  grid-area: search;
  border: none;
  padding: 64px 64px 0;
`
export const Content = styled.div`
  grid-area: content;
  padding: 0 64px;
  overflow-y: aut;
`
export const NewNote = styled(Link)`
  grid-area: newnote;
  
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 8px;
  };

  border: none;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`