import { DeliveryImage, FinishContent, FinishInfo, TextContent } from "./styles";
import delivery from '../../assets/delivery.svg'
import { Infos } from "./components/Infos";

export function FinishOrder() {
		return (
			<FinishContent>
			<TextContent>
				<h1>Uhu! Pedido confirmado</h1>
				<h2>Agora é só aguardar que logo o café chegará até você</h2>
				<FinishInfo>
				<div>
					<Infos />
				</div>
				</FinishInfo>
			</TextContent>
				<DeliveryImage>
					<img src={delivery} />
				</DeliveryImage>
			</FinishContent>
		)
}
