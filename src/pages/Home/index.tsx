import { Topics } from "./components/Topics";
import {  CoffeePicture, InfoComponent, SubTitle, Title  } from "./styles";
import coffeeDesign from '../../assets/coffeeDesign.svg';

export function Home(){
	return (
	<InfoComponent>
			<Title id="Title">
				Encontre o café perfeito para qualquer hora do dia
				<SubTitle id="SubTitle">
					Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
				</SubTitle>
				<Topics />
			</Title>
			<CoffeePicture>
				<img src={coffeeDesign} alt="" />
			</CoffeePicture>
			</InfoComponent>
	)
}
