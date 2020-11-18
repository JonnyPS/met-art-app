import React from "react";
import * as S from './ArtPiece.styles';

export function ArtPiecePresentation(props) {
	console.log(props)
	return (
		<S.ArtPieceContainer>
			<S.ArtPieceName> 
				{props.highlight.objectName}
			</S.ArtPieceName>
			<S.ArtPieceDate>
				{props.highlight.objectDate}
			</S.ArtPieceDate>
			{
				props.highlight.artistDisplayName ? 
				<S.ArtPieceMainDetails>
					{props.highlight.artistDisplayName}
					<br />
					{props.highlight.artistDisplayBio}
				</S.ArtPieceMainDetails>
				:
				null
			}
		<S.ArtPieceContainerImage 
			src={props.highlight.primaryImageSmall}
		/>
		<S.ArtPieceAdditionalImagesContainer>
			{console.log('props.highlight.additionalImages', props.highlight.additionalImages)}
			{ 
			props.highlight.additionalImages.length > 0 ?
				//check if there are additional images and if so print them
				props.highlight.additionalImages.map((item, index) => {
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