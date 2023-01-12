import { Address, AddressContent, Car, Content, HeaderContainer, Logo } from "./styles";
import {MapPin, ShoppingCart} from 'phosphor-react'
import logoCoffee from "../../assets/logoCoffee.svg"
import { NavLink } from "react-router-dom";

export function Header(){
	return (
		<HeaderContainer>
			<Logo id="logo">
				<NavLink to="/" title="Principal">
					<img src={logoCoffee}/>
				</NavLink>
			</Logo>
			<Address id="Endereço">
				<Content>
					<MapPin size={22} weight="fill"/>
					<AddressContent>
					Bocaiuva, MG
					</AddressContent>
				</Content>
			</Address>
			<Car id="Carrinho">
				<NavLink to="/payment" title="Carrinho">
					<ShoppingCart size={22} weight="fill" />
				</NavLink>
			</Car>
		</HeaderContainer>

	)
}
