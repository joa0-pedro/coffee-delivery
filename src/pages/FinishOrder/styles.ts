import styled from "styled-components";

export const FinishContent = styled.div`
	margin-top: 5rem;
	margin-left: 10rem;
	display: flex;


	h1 {
		font-family: "Baloo 2", sans-serif;
		color: ${props => props.theme["yellow-300"]};
		font-weight: 800;
		size: 2rem;
	}

	h2 {
		color: ${props => props.theme["brown-300"]};
		font-weight: 400;
		size: 1.25rem;
		margin-bottom: 2.5rem;
	}
`
export const TextContent = styled.div`
	width: 526px;
`

export const FinishInfo = styled.div`
	border-radius: 6px;
	border-bottom-left-radius: 36px;
	border-top-right-radius: 36px;

  width: 32.875rem;
  border: double 2px transparent;

  background-origin: border-box;
  background-clip: content-box, border-box;
	background-image: linear-gradient(#FAFAFA,#FAFAFA),linear-gradient(135deg,rgba(219,172,44,1) 10%,rgba(128,71,248,1) 100%);

  >div {
	padding: 2.5rem;
	padding-bottom: 0.5rem
  }
`
export const DeliveryImage = styled.div`
	display: flex;
	margin-left: 6.125rem;
`
