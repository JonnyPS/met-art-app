import React from 'react';

const handleButtonClick = ({id, title, func}) => {
	console.log('AddToFavouritesListButton')
	console.log('btn id prop = ', id)
	console.log('child passCurrentFavourite', func)
	func(id)
	// try and retrieve items from storage
	let myObj = localStorage.getItem('favourites');
	// if it doesn't exist, set item
	if ( myObj === null || myObj === undefined) {
		console.log('not there')
		localStorage.setItem('favourites', JSON.stringify({0: [id, title]}))
	} else {
		// else retrieve the object from storage, parsed it to an obj
		// var retrievedObject = localStorage.getItem('favourites');
		let newObj = JSON.parse(myObj);
		console.log(newObj)
		//get length of obj
		var size = Object.keys(newObj).length;
		let next = size;
		console.log('next', next)
		console.log('size', size)
		// add new key & val
		newObj[size ] = [id, title];
		// Put the new object into same storage
		localStorage.setItem('favourites', JSON.stringify(newObj));
	}	
}

export function AddToFavouritesListButton(id) {
	console.log('id=', id)
	return (
		<button onClick={() => handleButtonClick(id)}>Add to favourites</button>
	)
}