import styled from "styled-components";

export const PaymentForm = styled.div`
	font-family: 'Roboto', sans-serif;
	weight: 400;
	size: 1rem;
	align-items: center;

	color: ${(props) => props.theme["brown-300"]};
	background: ${props => props.theme["gray-100"]};

	width: 640px;
	margin-left: 10rem;
	`
export const PaymentTitle = styled.div`
	display: flex;
	margin: 2.5rem;

	svg {
		margin-top: 2.5rem;
		color: ${props => props.theme["yellow-300"]};
	}
`

export const Text = styled.p`
		flex-direction: column;
		color: ${(props) => props.theme["brown-300"]};
		size: 1rem;
		line-height: 1.3125rem;
		margin-top: 2.5rem;
		margin-left: 0.5rem;
		margin-bottom: 0.125rem;

		h5{
			color: ${(props) => props.theme["brown-200"]};
			size: 0.875rem;
			line-height: 1.125rem;
		}
`

