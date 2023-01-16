import { Card, CheckoutContent, OrderInfo, PaymentButton } from "./styles";

export function CheckoutCard(){
	return (
		<CheckoutContent>
			<h3>Cafés selecionados</h3>
			<Card>
				teste
				<OrderInfo>
				<div>
					<p>Total de Itens</p>
					<p>R$ 29,70</p>
				</div>
				<div>
					<p>Entrega</p>
					<p>R$ 3,50</p>
				</div>
				<div>
					<p>Total</p>
					<p>R$ 33,20</p>
				</div>
				</OrderInfo>
				<PaymentButton>Confirmar Pedido</PaymentButton>
			</Card>
		</CheckoutContent>
	)
}
