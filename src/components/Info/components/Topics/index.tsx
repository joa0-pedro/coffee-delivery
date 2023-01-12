import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { BaseItems, Block, Items, ItensText, TopicsComponent } from './styles';


export function Topics(){
	return (
		<TopicsComponent id="Topics">
<Block>
		<Items id="Item 1">
			<BaseItems color="yellow-300" >
				<ShoppingCart size={16} weight="fill" />
			</BaseItems>
			<ItensText>
			Compra simples e segura
			</ItensText>
		</Items>

		<Items id="Item 3">
			<BaseItems color="yellow-200" >
				<Timer size={16} weight="fill"/>
			</BaseItems>
			<ItensText>
				Entrega rápida e rastreada
			</ItensText>
		</Items>

</Block>

		<Block>
		<Items id="Item 2">
			<BaseItems color="brown-200" >
				<Package size={16} weight="fill"/>
			</BaseItems>
			<ItensText>
				Embalagem mantém o café intacto
			</ItensText>
		</Items>

		<Items id="Item 4">
			<BaseItems color="purple-200" >
				<Coffee size={18} weight="fill"/>
			</BaseItems>
			<ItensText>
				O café chega fresquinho até você
			</ItensText>
		</Items>
		</Block>

		</TopicsComponent>
	)
}
