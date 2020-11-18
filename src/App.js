import './App.css';
import React from "react";
import { ArtPiecePresentation } from "./Components/ArtPiece";

class App extends React	.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoaded: false,
			artPieceRecords: null,
			artPiece: null,
			artPieceHistory: []
		}
		this.getRandomNumber = this.getRandomNumber.bind(this);
		this.getArtPiece = this.getArtPiece.bind(this);
	} 

	// on component loading make two fetch requests:
	// 1. to get the number of objects available to retrieve
	// 2. retrieve a random item from that objects list
	componentDidMount() {
		console.log('componentDidMount')
		fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects')
		.then(response => response.json())
		.then((data) => {
			console.log(data)
			this.setState({
				artPieceRecords: data.total
			})
			this.getArtPiece();
		})
	}

	getArtPiece = () => {
		// get art piece using url and random number generated
		console.log(this.getRandomNumber(this.state.artPieceRecords))
		fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + this.getRandomNumber(this.state.artPieceRecords))
		.then(response => response.json())
		.then((data) => {
			// check to see if response has an image attached
			// if not, run this function again
			data.primaryImageSmall === "" || data.message === "ObjectID not found" || data.message === "Not a valid object" ? 
			this.getArtPiece() 
			:
			
			// else stick with this art piece and set state
			this.setState({
				isLoaded: true,
				artPiece: data
			})
			console.log('this.state', this.state)
		})
	}

	getRandomNumber = (max) => {
		// console.log('getRandomNumber');
		// console.log(Math.floor(Math.random() * Math.floor(max)));
		return Math.floor(Math.random() * Math.floor(max -1));
	}

	render() {
		return (
			<div className="App">
				{
					this.state.isLoaded === false ?
					<h1>Loading...</h1>
					:
					<ArtPiecePresentation highlight={this.state.artPiece} />
					
				}
				
			</div>
		)
	}
}

export default App;
