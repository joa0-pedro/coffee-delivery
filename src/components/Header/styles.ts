import styled from 'styled-components';

export const HeaderContainer = styled.div`
	font-family: 'Roboto', sans-serif;
	font-weight: 700;
	line-height: 130%;

	z-index: 1;

	display: flex;
	margin-left: 10rem;
	margin-right: 10rem;

	height: 104px;

	align-items: center;

	a{
		box-shadow: 0 0 0 0;
	}
`

export const Logo = styled.div`
	margin-right: auto;
	margin-top: 2rem;
	margin-bottom: 2rem;
`

export const Address = styled.div`
	background: ${props => props.theme['purple-100']};
	color: ${props => props.theme['purple-300']};
	border-radius: 8px;

	display: flex;

	svg {
		margin-right: 0.25rem;
		color: ${props => props.theme['purple-200']};

	}

`

export const Content = styled.div`
	margin-top: 0.625rem;
	margin-bottom: 0.625rem;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	align-items: center;
	display: flex;

`

export const Car = styled.div`
	margin-left: 0.75rem;
	background: ${props => props.theme['yellow-100']};
	border-radius: 8px;

	svg {
		color: ${props => props.theme['yellow-300']};
		margin: 0.5rem;
		display: flex;
	}

`
export const AddressContent = styled.div`
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	line-height: 1.125rem;
`
