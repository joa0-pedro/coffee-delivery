import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { BaseItems } from "../../../Home/components/Topics/styles";
import { Info, InfoContent, TextItems } from "./styles";

export function Infos(){
	return (
		<Info>
			<InfoContent>
			<BaseItems color="purple-200">
				<MapPin size={16} weight="fill"/>
			</BaseItems>
			<TextItems>
				<p>Entrega em</p>
				<p>Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre, RS</p>
			</TextItems>
			</InfoContent>
			<InfoContent>
				<BaseItems color="yellow-200">
					<Timer size={16} weight="fill"/>
				</BaseItems>
				<TextItems>
					<p>Previsão de entrega</p>
					<p>20 min - 30 min </p>
				</TextItems>
			</InfoContent>
			<InfoContent>
				<BaseItems color="yellow-300">
					<CurrencyDollar size={16} />
				</BaseItems>
				<TextItems>
					<p>Pagamento na entrega</p>
					<p>Cartão de Crédito</p>
				</TextItems>
			</InfoContent>
		</Info>
	)
}
