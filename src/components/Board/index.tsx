import React from 'react'
import { Container } from './styles'

import List from '@components/List'

const Board : React.FC = () => {
	return (
		<Container>
			<List title="Todo" />
			<List title="In progress" />
			<List title="Done" />
		</Container>
	);
}


export default Board;
