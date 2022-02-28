import React from "react";
import * as S from './ArtPiece.styles';

export function ArtPiecePresentation(props) {
	console.log('...........')
	console.log('props.additionalImages', props.data.additionalImages)
	console.log('props', props)
	return (
		<S.ArtPieceContainer>
			<S.ArtPieceName> 
				{props.data.objectName}
			</S.ArtPieceName>
			<S.ArtPieceDate>
				{props.data.objectDate}
			</S.ArtPieceDate>
			{
				props.data.artistDisplayName ? 
				<S.ArtPieceMainDetails>
					{props.data.artistDisplayName}
					<br />
					{props.data.artistDisplayBio}
				</S.ArtPieceMainDetails>
				:
				null
			}
		<S.ArtPieceContainerImage 
			src={props.data.primaryImageSmall}
		/>
		<S.ArtPieceAdditionalImagesContainer>
			{console.log('props.additionalImages', props.data.additionalImages)}
			{ 
			props.data.additionalImages.length > 0 ?
				//check if there are additional images and if so print them
				props.data.additionalImages.map((item, index) => {
					return <S.ArtPieceAdditionalImagesImages 
						src={item}
					/>
				})
				:
				null
			}
		</S.ArtPieceAdditionalImagesContainer>
		</S.ArtPieceContainer>
	)
}