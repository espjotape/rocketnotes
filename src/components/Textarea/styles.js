import styled from "styled-components";

export const Container = styled.textarea`
 width: 100%;
 height: 150px;

 background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
 color: ${({ theme }) => theme.COLORS.WHITE};

 resize: none;
 border: none;
 border-radius: 10px;
 padding: 16px;
 margin-bottom: 8px;

 &::placeholder {
  color: ${({ theme }) => theme.COLORS.GRAY_300};
 }
`