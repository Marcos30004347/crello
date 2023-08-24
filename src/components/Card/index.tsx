import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'

import { Container, Label } from './styles'

type CardProps = {
	name: string;
	index: number;
};


const Card: React.FC<CardProps> = ({ name, index }) => {
  const ref = useRef<HTMLDivElement>(null);
	
	const [{ isDragging }, dragRef] = useDrag({
		type: 'CARD',
		item: { index },
		collect: (monitor: any) => ({
			isDragging: monitor.isDragging(),
		}),
	});

  const [, dropRef] = useDrop({
		accept: 'CARD',

		hover(item: any, monitor: any) {
			console.log(item.index);
			console.log(index);
		}
	});

	dragRef(dropRef(ref));
	
	return (
		<Container ref={ref} is_being_dragged={isDragging.toString()}>
			<header>
				<Label color="#7159c1" />
			</header>
			<p>{name}</p>
		</Container>
	);
}

export default Card;
