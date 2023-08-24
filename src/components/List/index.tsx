import React from 'react'
import { Container } from './styles'
import { MdAdd } from 'react-icons/md'

import Card from "@components/Card"

type ListProps = {
	title: string
}

const List : React.FC<ListProps> = ({title}) => {
	return (
		<Container
			onDragOver={(e: React.DragEvent) => {
				e.preventDefault();
				console.log("DragOver")
			}}

			onDrop={(e: React.DragEvent) => {
				e.preventDefault();

				const target = e.currentTarget;
				const ul = target.querySelector("#list-cards") as HTMLUListElement;
	
				const list = Array.from(ul.children);

				for(let i = 0; i < list.length; i++) {
				
				}

				console.log(e.currentTarget)
				console.log(e.target)
				console.log(e.relatedTarget)
				console.log(e.dataTransfer)
			}}
		>
			<header>
				<h2>{title}</h2>
				<button>
					<MdAdd size={24} color="#FFF" />
				</button>
			</header>
			<ul id="list-cards">
				<Card name="card 1" index={0} />
				<Card name="card 2" index={1}/>
				<Card name="card 3" index={2}/>
			</ul>
		</Container>
	);
}


export default List;
