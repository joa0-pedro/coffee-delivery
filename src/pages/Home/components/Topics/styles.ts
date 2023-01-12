import styled, { DefaultTheme } from "styled-components"

interface BaseItemsProps {
	color: keyof DefaultTheme;
}

export const TopicsComponent = styled.div`
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 1rem;
	display: flex;
	margin-top: 4.125rem;
	flex-direction: row;
	flex-wrap: wrap;
	column-gap: 2rem;

`

export const Items = styled.div`
	display: flex;
	align-items: center;
`

export const BaseItems = styled.div<BaseItemsProps>`
	height: 2rem;
	width: 2rem;
	border-radius: 999px;
	margin-right: 0.75rem;
	color: ${props => props.theme.background};
	background: ${({theme,color}) => theme[color]};

	display: flex;
  justify-content: center;
  align-items: center;


`
export const ItensText = styled.div`
	color: ${props => props.theme["brown-200"]};
`

export const Block = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
  flex-wrap: wrap;
`
