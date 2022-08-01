import styled from 'styled-components'

export const Container = styled.div`
  background-color: #a7e1f8;
  padding: 160px 40px;
  overflow: ${({ $isPanelOpen }) => ($isPanelOpen ? 'hidden' : 'scroll')};
  position: ${({ $isPanelOpen }) => ($isPanelOpen ? 'fixed' : 'unset')};
  top: ${({ $isPanelOpen, $top }) => ($isPanelOpen ? `-${$top}px` : 0)};

  @media (max-width: 800px) {
    padding: 114px 20px;
  }
`

export const H2 = styled.h2`
  font-size: 42px;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 32px;
  }
`

export const H3 = styled.h3`
  font-size: 32px;
  margin: 0 0 10px 0;

  @media (max-width: 800px) {
    font-size: 22px;
  }
`

export const P = styled.p`
  font-family: 'Libre Baskerville', serif;
  font-family: 16px;
  line-height: 1.6;
  margin: 30px 0 0;
`
export const Em = styled.em`
  font-style: italic;
`
export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 120px;
  margin-top: 40px;
  max-width: 1200px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 60px;
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
  }
`
