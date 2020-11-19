import styled from 'styled-components';

export const SeeSomethingElseButton = styled('button')`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px;
	padding: 30px; 
	background-color: lightblue;
	border: 0;
	margin-top: 30px;
	&:hover {
		background-color: lightgreen;
		cursor: pointer;
	}
`;

export const MetLink = styled('a')`
	font-family: Arial, Helvetica, sans-serif;
	font-size: 16px;
	position: relative;
	margin-bottom: 30px; 
	color: black;
	border: 0;
	display: block;
	&:hover {
		text-decoration: none;
	}
`;