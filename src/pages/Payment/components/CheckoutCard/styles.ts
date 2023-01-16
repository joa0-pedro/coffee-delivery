import styled from "styled-components";


export const CheckoutContent = styled.div`
		margin-top: -2.375rem;
	h3 {
		margin-bottom: 0.9375rem;
		font-family: "Baloo 2", sans-serif;
		font-size: 18px;
		font-weight: 700;
		line-height: 23px;
	}
`

export const Card = styled.div`
	display: flex;
	background: ${(props) => props.theme["gray-100"]};
	padding: 2.5rem;
	border-radius: 6px;
	border-bottom-left-radius: 44px;
	border-top-right-radius: 44px;
	flex-direction: column;

`
export const PaymentButton = styled.button`
	background: ${(props) => props.theme["yellow-200"]};
	color: ${(props) => props.theme.white};
	display: flex;
	align-items: center;
	justify-content: center;

	width: 368px;
	height: 46px;

	border-radius: 6px;
	margin-top: 1.5rem;
	border: 0;

	:hover{
		cursor: pointer;
		background: ${(props) => props.theme["yellow-300"]};
	}
`
export const OrderInfo = styled.div`
	margin-top: 0.75rem;
	display: flex;
	flex-direction: column;

	div{
		display: flex;
		margin-top: 0.75rem;
		justify-content: space-between;

		:last-child{
			font-weight: 700;
			size: 1.25rem;
			color: ${(props) => props.theme["brown-300"]};
		}
	}


`
