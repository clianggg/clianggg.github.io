import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const ContactContainer = styled.div`
	margin-top: 100px;
	display: flex;
	background-color: #f6f6f6;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	height: 100px;
	font-size: 1.8rem;
	font-weight: bolder;
	color: #73b0e9;
`;

const ContactIcon = styled.div`
	margin: 20px;
	cursor: pointer;
	font-size: 2.3rem;
`;

const Contact = () => {
	return (
		<ContactContainer id='contact'>
			Let's talk!
			<ContactIcon>
				<a href='http://github.com/clianggg' style={{ color: '#73b0e9' }}>
					<FaGithub />
				</a>
			</ContactIcon>
			<ContactIcon>
				<a
					href='http://linkedin.com/in/christinaliangg'
					style={{ color: '#73b0e9' }}
				>
					<FaLinkedin />
				</a>
			</ContactIcon>
			<ContactIcon>
				<a
					href='mailto:christina.liang@outlook.com'
					style={{ color: '#73b0e9' }}
				>
					<AiOutlineMail />
				</a>
			</ContactIcon>
		</ContactContainer>
	);
};

export default Contact;
