import { BaseInputTheme, PaymentInput } from "./styles";

export function BaseInput() {
	return (

	<form action="">
	<PaymentInput>
				<BaseInputTheme type="text" placeholder="CEP" size={17}/>
				<BaseInputTheme type="text" placeholder="Rua" size={58}/>
				<BaseInputTheme type="text" placeholder="Numero" size={17}/>
				<BaseInputTheme type="text" placeholder="Complemento" size={17}/>
				<BaseInputTheme type="text" placeholder="Bairro" size={17}/>
				<BaseInputTheme type="text" placeholder="Cidade" size={25}/>
				<BaseInputTheme type="text" placeholder="UF" size={1}/>
	</PaymentInput>
	</form>

	)
}
