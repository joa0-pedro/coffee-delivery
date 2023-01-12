import {MapPinLine} from 'phosphor-react'
import { PaymentForm, PaymentTitle, Text } from './styles'
import { BaseInput } from './components/Input'

export function Payment(){
	return (
		<div id="content">
			<div id="Form Card">
			Complete seu pedido
			<PaymentForm id="formulário">
				<PaymentTitle id="Form title">
				<MapPinLine size={22} />
				<Text>
						Endereço de Entrega
						<h5>Informe o endereço onde deseja receber seu pedido</h5>
				</Text>
				</PaymentTitle>
					<BaseInput />
			</PaymentForm>
			</div>
		</div>
	)
}
