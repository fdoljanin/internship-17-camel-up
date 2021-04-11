import styled from "styled-components";

export const CellsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 100px);
  grid-gap: 4px;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 100px);
    margin-bottom: 100px;
  }
`;
