import styled from "styled-components";

export const ButtonBlock = styled.div`
	display: flex;
	justify-content: center;
`

export const PaymentMethodButtonSelect = styled.button`
	background: ${props => props.theme["gray-300"]};
	color: ${props => props.theme["brown-200"]};
	padding: 1rem;
	border-radius: 6px;
	border: 0;
	width: 178px;
	height: 51px;
	font-size:12px;
	font-weight: 400;
	line-height:19px;
	margin-right:0.75rem;
	margin-top: 2rem;
	display: flex;
	align-items: center;

	svg{
		margin-right:0.75rem;
		color: ${props => props.theme["purple-200"]};
	}

	:hover{
		cursor: pointer;
		background-color: ${props => props.theme["gray-400"]};
	}

	:focus{
		cursor: pointer;
		background-color: ${props => props.theme["purple-100"]};
		box-shadow: 0 0 0 1px ${props => props.theme["purple-200"]};
	}

`
