import './App.css';
import React, { useEffect } from "react";
import { ArtPiecePresentation } from "./Components/ArtPiece";
import { SeeSomethingElseButton } from "./Components/SeeSomethingElseButton";
import { Home } from "./Components/Home";

import * as S from './Components/styles';
import { 
	QueryClient,
	QueryClientProvider 
} from 'react-query';

// Create a client
const queryClient = new QueryClient()
 
function App() {
		return (
			<QueryClientProvider client={queryClient}>
				<Home />
			</QueryClientProvider>
			// <div className="App">
			// 	{
			// 		this.state.isLoaded === false ?
			// 		<h1>Loading...</h1>
			// 		:
			// 		<>
			// 		<ArtPiecePresentation highlight={this.state.artPiece} />
			// 		<S.MetLink href={this.state.artPiece.objectURL} target="_blank">
			// 			See it on the Met's website &rarr;
			// 		</S.MetLink>
			// 		<S.SeeSomethingElseButton onClick={this.handleClick}>
			// 			See Something Else
			// 		</S.SeeSomethingElseButton>
			// 		</>
			// 	}
			// </div>
		)
}

export default App;
