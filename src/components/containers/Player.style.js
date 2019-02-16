import styled from "styled-components"

export const StyledPlayer = styled.div`
  background: ${props => props.theme.bgcolor};
  border: ${props => props.theme.border};
  max-width: 1800px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  max-height: 544px;
  transition: all 1.62s ease;

  @media screen and (max-width: 1400px) {
    display: block;
    max-height: 10000px;
  }
`

export const Header = styled.div`
	height: 50px;
	background: ${props => props.nightMode ? '#232323': '#2196f3'};
	color: #fff;
	line-height: 50px;
	padding-left: 10px;
	font-size: 40px;
	transition: all 1.62s ease;
`
export const Logo = styled.img`
	height: 29px;
	width: 35px;
	margin-top: 8px;
`
