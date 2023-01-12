import { Address, AddressContent, Car, Content, HeaderContainer, Logo } from "./styles";
import {MapPin, ShoppingCart} from 'phosphor-react'
import logoCoffee from "../../assets/logoCoffee.svg"

export function Header(){
	return (
		<HeaderContainer>
			<Logo id="logo">
				<img src={logoCoffee}/>
			</Logo>
			<Address id="Endereço">
			<Content >
			<MapPin size={22} weight="fill"/>
				<AddressContent>
				Bocaiuva, MG
				</AddressContent>
			</Content>
			</Address>
			<Car id="Carrinho">
				<ShoppingCart size={22} weight="fill" />
			</Car>
		</HeaderContainer>

	)
}
