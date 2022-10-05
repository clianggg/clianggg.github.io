import React from 'react';
import styled from 'styled-components';
import { IoCloseSharp } from 'react-icons/io5';
import { Link } from 'react-scroll';

const TopBarContainer = styled.aside`
	position: fixed;
	z-index: 999;
	width: 100%;
	height: 100%;
	background: #f6f6f6;
	display: grid;
	align-items: center;
	top: 0;
	left: 0;
	transform: 0.3s ease-in-out;
	opacity: ${({ open }) => (open ? '100%' : '0')};
	top: ${({ open }) => (open ? '0' : '-100%')};
`;

const Icon = styled.div`
	position: absolute;
	top: 1.2rem;
	right: 1.5rem;
	font-size: 2rem;
	cursor: pointer;
	background: transparent;
	outline: none;
`;

const TopBarWrapper = styled.div``;

const TopBarMenu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 80px);
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(4, 60px);
	}
`;

const TopBarLink = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	text-decoration: none;
	list-style: none;
	transition: 0.2s ease-ease-in-out;
	cursor: pointer;

	&:hover {
		color: #f6b58f;
		transition: 0.2s ease-in-out;
	}
`;

const TopBar = ({ open, toggle }) => {
	return (
		<TopBarContainer open={open}>
			<Icon onClick={toggle}>
				<IoCloseSharp />
			</Icon>
			<TopBarWrapper>
				<TopBarMenu>
					<TopBarLink to='about' onClick={toggle}>
						ABOUT
					</TopBarLink>
					<TopBarLink to='projects' onClick={toggle}>
						PROJECTS
					</TopBarLink>
					<TopBarLink to='resume' onClick={toggle}>
						RESUME
					</TopBarLink>
					<TopBarLink to='contact' onClick={toggle}>
						CONTACT
					</TopBarLink>
				</TopBarMenu>
			</TopBarWrapper>
		</TopBarContainer>
	);
};

export default TopBar;
