import {CurrencyDollar, MapPinLine} from 'phosphor-react'
import { AddressForm, Cards, FormCard, InputBlock, PaymentCheckout, PaymentMethodCard, PaymentMethodTitle, PaymentTitle, Title } from './styles'
import { BaseInput } from './components/Input'
import { PaymentMethodButton } from './components/PaymentButton'
import { CheckoutCard } from './components/CheckoutCard'

export function Payment(){
	return (
			<FormCard id="Form Card">
				<h3>
				Complete seu pedido
				</h3>
				<Cards>
				<AddressForm id="formulário">
					<PaymentTitle id="Form title">
						<MapPinLine size={22} />
						<Title>
							Endereço de Entrega
							<h5>Informe o endereço onde deseja receber seu pedido</h5>
						</Title>
					</PaymentTitle>
					<InputBlock>
						<BaseInput />
					</InputBlock>
				</AddressForm>

				<PaymentCheckout>
					<CheckoutCard />
				</PaymentCheckout>
				</Cards>

				<PaymentMethodCard>
					<PaymentMethodTitle>
						<CurrencyDollar size={22}/>
						<Title>
							Pagamento
							<h5>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h5>
						</Title>
					</PaymentMethodTitle>
					<PaymentMethodButton />
				</PaymentMethodCard>



			</FormCard>
	)
}
