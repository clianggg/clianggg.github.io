import React from 'react';
import styled from 'styled-components';
import { Typewriter } from 'react-simple-typewriter';

const TitleContainer = styled.div`
	background-color: #f6f6f6;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 600px;
	z-index: 1;
`;

const Title = styled.h1`
	font-size: 130px;
	text-align: center;
	color: #73b0e9;
	margin-bottom: 0;
`;

const Welcome = styled.h2`
	font-size: 40px;
	font-weight: normal;
`;

const TitleSection = () => {
	return (
		<TitleContainer id='home'>
			<Title>CHRISTINA LIANG.</Title>
			<Welcome>
				<Typewriter
					words={['welcome']}
					loop='false'
					cursor='true'
					cursorStyle='|'
					typeSpeed={70}
					deleteSpeed={50}
					delaySpeed={1000}
				/>
			</Welcome>
		</TitleContainer>
	);
};

export default TitleSection;
