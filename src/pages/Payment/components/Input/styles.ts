import styled from "styled-components";

export const BaseInputTheme = styled.input`
	height: 2.625rem;
	background: ${(props) => props.theme["gray-200"]};
	border: 1px solid ${(props) => props.theme["gray-300"]};
	border-radius: 6px;
	color: ${(props) => props.theme["brown-100"]};
	padding: 0.75rem;
	margin-bottom: 1rem;
	margin-right: 0.75rem;
`
export const PaymentInput = styled.div`
	margin-top: 2rem;
	margin-right: -1.25rem;
`
