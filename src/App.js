import './App.css';
import React from "react";
import { Home } from "./Components/Home";
import { 
	QueryClient,
	QueryClientProvider 
} from 'react-query';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
	ul {
		padding: 0;
	}
`;
 

// Create a client
const queryClient = new QueryClient()
 
function App() {
		return (
			<QueryClientProvider client={queryClient}>
				<GlobalStyle />
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
