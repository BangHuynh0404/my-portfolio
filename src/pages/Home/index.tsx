import React from 'react';

import StylesHome from './styled';

import HomeContainer from '../../containers/Home';

interface HomeProps {}

const HomePage: React.FC<HomeProps> = (props) => (
  <StylesHome className="p-home">
    <HomeContainer {...props} />
  </StylesHome>
);

export default HomePage;
