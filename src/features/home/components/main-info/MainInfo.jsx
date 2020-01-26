import React from 'react';
import styled from 'styled-components';
import mainBackground from 'assets/backgrounds/main.png';
import { SideTitle, Header, Title } from './components';

const MainInfo = ({ className, children }) => {
	return (
		<section className={className}>
			<SideTitle />
			<Header />
			<Title />
		</section>
	);
};

const StyledMainInfo = styled(MainInfo)`
  background-image: url(${mainBackground});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`;

export default StyledMainInfo;
