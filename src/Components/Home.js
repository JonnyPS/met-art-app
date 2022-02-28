import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { ArtPiecePresentation } from './ArtPiece';
import { AddToFavouritesListButton } from './AddToFavouritiesButton';
import { FavouritesList } from './FavouritesList';

// let fetchRecords = async () => {
// 	const res = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects');
// 	return res.json();
// }

let fetchIndividualRecord = async (num) => {
	const res = await fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + num);
	return res.json();
}



export function Home() {
	// let {data, status} = useQuery('records', fetchRecords);
	const [totalRecords, setTotalRecords] = useState(5000);
	let {data, status} = useQuery('individualRecord', () => fetchIndividualRecord(getRandomNumber(totalRecords)));
	const [selectedRecord, setSelectedRecord] = useState(null);
	const [currentFavourite, setCurrentFavourite] = useState(null);

	useEffect(() => {
		console.log('useEffect');
		console.log('data', data)
		setSelectedRecord(data);
		console.log('selectedRecord', selectedRecord)
		console.log('currentFavourite', currentFavourite)
	}, [status, selectedRecord, currentFavourite])

	function getRandomNumber(max) {
		return Math.floor(Math.random() * Math.floor(max -1));
	}

	function handleCurrentFavourite(fav) {
		setCurrentFavourite(fav);
	}
	


	return (
		<div className="App">
			{ status === 'loading' ?
				<p>Loading....</p> 
				: null
			}
			{ status === 'error' ?
				<p>Error :(</p> 
				: null
			}
			{ status === 'success' && selectedRecord !== undefined ?
				<>
					<p>Success</p>
					<FavouritesList id={currentFavourite} />
					<ArtPiecePresentation data={selectedRecord} />
					<AddToFavouritesListButton id={selectedRecord.objectID} title={selectedRecord.title} func={ handleCurrentFavourite } />
				</>
				: null
			}
		</div>
	)
}