import React from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyle from './styles/globals'

import Board from '@components/Board';
import Header from '@components/Header';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

const App: React.FC = () => {
	return (
		<DndProvider backend={HTML5Backend}>
			<Header/>
			<Board/>
			<GlobalStyle/>
		</DndProvider>
	)
};


const container = document.getElementById("root");

if(container == null) throw new Error('Failed to find the root element');

const root = createRoot(container);

root.render(<App/>);
