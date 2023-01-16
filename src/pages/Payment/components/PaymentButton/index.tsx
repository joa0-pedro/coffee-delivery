import { Bank, CreditCard, Money } from "phosphor-react";
import { ButtonBlock, PaymentMethodButtonSelect } from "./styles";

export function PaymentMethodButton(){
	return (
	<ButtonBlock>
		<PaymentMethodButtonSelect>
		<CreditCard size={16}/>
		CARTÃO DE CRÉDITO
		</PaymentMethodButtonSelect>
		<PaymentMethodButtonSelect>
		<Bank size={16}/>
		CARTÃO DE DÉBITO
		</PaymentMethodButtonSelect>
		<PaymentMethodButtonSelect>
		<Money size={16}/>
		DINHEIRO
		</PaymentMethodButtonSelect>
	</ButtonBlock>
	)
}
