import styled from 'styled-components';

export const Container = styled('div')`
	display: inline-block;
	float: left;
	position: absolute;
	top: 0;
	left: 0;
	margin-left: 20px;
	width: 25%;
	height: 100%;

	h3, p {
		text-align: left;
	}

`;

export const UL = styled('ul')`
	text-align: left;
	list-style-type: none;
	list-style-position: inside;
	padding-inline-start: none !important;
`;
