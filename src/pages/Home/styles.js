import styled from 'styled-components'

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
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const Content = styled.div`
  grid-area: content;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`
export const NewNote = styled.button`
  grid-area: newnote;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`