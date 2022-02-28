import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import { ArtPiecePresentation } from './ArtPiece';

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

	useEffect(() => {
		console.log('useEffect');
		console.log('data', data)
		setSelectedRecord(data);
	}, [status])

	function getRandomNumber(max) {
		return Math.floor(Math.random() * Math.floor(max -1));
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
					<p>{selectedRecord.title}</p>
					<ArtPiecePresentation data={selectedRecord} />
				</>
				: null
			}
		</div>
	)
}