import styled from "styled-components";

export const FormCard = styled.div`
		margin-top: 2.5rem;
		margin-left: 10rem;

	h3 {
		margin-bottom: 0.9375rem;
		font-family: "Baloo 2", sans-serif;
		font-size: 18px;
		font-weight: 700;
		line-height: 23px;
	}
`

export const AddressForm = styled.div`
	font-family: 'Roboto', sans-serif;
	weight: 400;
	size: 1rem;
	align-items: center;

	color: ${(props) => props.theme["brown-300"]};
	background: ${props => props.theme["gray-100"]};

	width: 40rem;
	border-radius: 4px;
	padding: 2.5rem;
	margin-right: 2rem;

	`
export const PaymentTitle = styled.div`
	display: flex;
	margin-bottom: -0.5rem;

	svg {
		color: ${props => props.theme["yellow-300"]};
	}
`

export const Title = styled.p`
	flex-direction: column;
	color: ${(props) => props.theme["brown-300"]};
	size: 1rem;
	line-height: 1.3125rem;
	margin-left: 0.5rem;
	margin-bottom: 0.125rem;

	h5{
		color: ${(props) => props.theme["brown-200"]};
		size: 0.875rem;
		line-height: 1.125rem;
	}
`
export const InputBlock = styled.div`
	padding-bottom: 0.1px;
`
export const PaymentMethodCard = styled(AddressForm)`
		margin-top: 0.75rem;
`
export const PaymentMethodTitle = styled.div`
	display: flex;

	svg {
		margin-right: 0.5rem;
		color: ${props => props.theme["yellow-300"]};
	}
`
export const PaymentCheckout = styled.div``

export const Cards = styled.div`
	display: flex;
`
