import styled from 'styled-components';
import media from "styled-media-query";

export const ArtPieceContainer = styled('div')`
	position: relative; 
	width: 20%;
	left: 50%;
	transform: translate(-50%, 0);
	margin-bottom: 20px;
	${media.lessThan("medium")`	    
	/* screen width is less than 768px (medium) */
	width: 90%;
	`}
`;

export const ArtPieceName = styled('h1')`
	font-family: Arial, Helvetica, sans-serif;
`;
export const ArtPieceDate = styled('h2')`
	font-family: Arial, Helvetica, sans-serif;
`;
export const ArtPieceMainDetails = styled('h3')`
	font-family: Arial, Helvetica, sans-serif;
`;


export const ArtPieceContainerImage = styled('img')`
	width: 100%;
`;

export const ArtPieceAdditionalImagesContainer = styled('div').attrs(() => ({
	className: 'art-piece-additional-image-container',
}))`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	width: 100%;
`;

export const ArtPieceAdditionalImagesImages = styled('img').attrs(() => ({
  className: 'art-piece-additional-image',
}))`
	max-width: 20%;
	margin-top: 10px;
	margin-right: 10px;
	width: auto;
	max-height: 100px;
	&:nth-child(4) {
		margin-right: 0;
	}
`;
