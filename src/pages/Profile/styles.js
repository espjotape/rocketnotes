import styled from 'styled-components'


export const Container = styled.div`
  height: 100vh;
  width: 100%;

  > header {
    width: 100%;
    height: 104px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 124px;

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }
`

export const Form = styled.form`
  margin: 30px auto 0;
  max-width: 340px;

`