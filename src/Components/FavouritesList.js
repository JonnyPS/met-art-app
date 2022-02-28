import React from 'react';
import * as S from './FavouritesList.styles';

export function FavouritesList(id) {
	console.log("FavouritesList")
	console.log("FavouritesList", id)
	let favs = localStorage.getItem('favourites');
	let parsed = JSON.parse(favs)
	console.log('parsed = ', parsed)
	
	return (
		
			parsed === null ?
				<p>No favourites</p>
			:
			<S.Container>
				<h3>
					Favourites list
				</h3>
				<S.UL>
					{
						Object.keys(parsed).map(function(key) {
							console.log('key', parsed[key][0])
							return ( 
								<li value={key[0]}>
									<a href={`https://www.metmuseum.org/art/collection/search/${parsed[key][0]}`}>{parsed[key][1]}</a>
								</li>
							)
						})
					}
				</S.UL>
			</S.Container>
			
	);
}