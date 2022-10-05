import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Nav = styled.nav`
	background: #f6f6f6;
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1.2rem;
	position: sticky;
	top: 0;
	z-index: 10;

	@media screen and (max-width: 960px) {
		transition: 0.8s all ease;
	}
`;

const NavBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 80px;
	width: 100%;
	max-width: 90%;
	padding: 0 24px;
	z-index: 1;
`;

const NavLogo = styled(Link)`
	color: black;
	cursor: pointer;
	font-size: 2rem;
	display: flex;
	align-items: center;
	font-weight: bold;
	margin-left: 24px;
	text-decoration: underline;
	text-decoration-color: #f0b5b4;
	text-decoration-thickness: 8px;
`;

const MobileNavIcon = styled.div`
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 1.8rem;
		cursor: pointer;
	}
`;

const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	// margin-right: -22px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavItem = styled.li`
	height: 80px;
	color: black;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
`;

const NavLink = styled(Link)`
	color: black;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
`;

const ExternalLink = styled.a`
	color: black;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
`;

const NavBar = ({ toggle }) => {
	return (
		<>
			<Nav>
				<NavBarContainer>
					<NavLogo activeClass='active' to='home' spy={true} smooth={true}>
						CL.
					</NavLogo>
					<MobileNavIcon onClick={toggle}>
						<FaBars />
					</MobileNavIcon>
					<NavMenu>
						<NavItem>
							<ExternalLink href='https://drive.google.com/file/d/19KI2LFhsK2lopWYBQjbhl-b-g_cz9hM0/view?usp=sharing'>
								RESUME
							</ExternalLink>
						</NavItem>
						<NavItem>
							<NavLink
								activeClass='active'
								to='contact'
								spy={true}
								smooth={true}
							>
								CONTACT
							</NavLink>
						</NavItem>
					</NavMenu>
				</NavBarContainer>
			</Nav>
		</>
	);
};

export default NavBar;
