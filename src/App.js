import React, { useState } from 'react';
import styled from 'styled-components';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import TitleSection from './components/TitleSection';
import TopBar from './components/TopBar';
import ChatApp from './images/ChatApp.png';
import CherryPicker from './images/CherryPicker.png';
import GoodDay from './images/GoodDay.png';

const Project = styled.div`
	display: flex;
	flex-direction: row;
	padding-top: 150px;
`;

const ProjectInfo = styled.p`
	letter-spacing: 1.5px;
	line-height: 3em;
	padding: 70px;
	padding-top: 0;
	margin: 0;
	font-size: 20px;
`;

const ProjectImage = styled.div``;

const Highlight = styled.span`
	color: #73b0e9;
	font-weight: 900;
`;

function App() {
	const [open, setOpen] = useState(false);
	const toggle = () => {
		setOpen(!open);
	};
	return (
		<div>
			<TopBar open={open} toggle={toggle} />
			<NavBar toggle={toggle} />
			<TitleSection />
			<Project>
				<ProjectImage>
					<img src={ChatApp} alt='ChatApp' />
				</ProjectImage>
				<ProjectInfo>
					This is a chat app created using <Highlight>React</Highlight> and{' '}
					<Highlight>Reactstrap</Highlight>. It utilizes{' '}
					<Highlight>Microsoft’s Graph API</Highlight>
					to send and receive channel messages in Microsoft Teams. This web app
					authenticates users through <Highlight>Azure AD</Highlight> using the{' '}
					<Highlight>OAuth 2.0 flow</Highlight>.
				</ProjectInfo>
			</Project>
			<Project>
				<ProjectInfo>
					GoodDay is a <Highlight>chrome extension</Highlight> created during{' '}
					<Highlight>Hack the North 2021</Highlight> with a focus on self-care.
					It gives users gentle self-care reminders and generates uplifting
					images based on user's prefernce. It also features a to-do list to
					boost productivity. GoodDay and its landing page was built using{' '}
					<Highlight>
						HTML, CSS, Javascript, Bootstrap, Chrome.storage, and Git.
					</Highlight>
				</ProjectInfo>
				<ProjectImage>
					<a href='https://gooddays.tech/index.html#about'>
						<img src={GoodDay} alt='GoodDay' />
					</a>
				</ProjectImage>
			</Project>
			<Project>
				<ProjectImage>
					<img src={CherryPicker} alt='CherryPicker' />
				</ProjectImage>
				<ProjectInfo>
					This is a <Highlight>tile-based RPG game</Highlight> written in{' '}
					<Highlight>Java</Highlight> with all images and entities created from
					scratch. This game includes{' '}
					<Highlight>2 different difficulty level maps</Highlight> and{' '}
					<Highlight>3 different levels of enemies</Highlight>. Players can
					collect items and battle enemies playing rock-paper-scissors.
				</ProjectInfo>
			</Project>
			<Contact />
		</div>
	);
}

export default App;
