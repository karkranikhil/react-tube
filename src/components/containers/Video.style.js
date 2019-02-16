import styled from "styled-components"

export const StyledVideo = styled.section`
  position: relative;
  -webkit-box-flex: 2;
  -ms-flex: 2 0 900px;
  flex: 2 0 900px;
  background-color: ${props => props.theme.bgcolor};
  transition: all 1.62s ease;


  @media screen and (max-width: 1400px) {
    width: 100%;
    display: block;
  }
`

export const StyledVideoWrapper = styled.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;
`
