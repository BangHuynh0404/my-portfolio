import React from 'react';

import StylesMyGithub from './styled';

import MyGithubContainer from '../../containers/MyGithub';

interface MyGithubProps {}

const MyGithubPage: React.FC<MyGithubProps> = (props) => (
  <StylesMyGithub className="p-myGithub">
    <MyGithubContainer {...props} />
  </StylesMyGithub>
);

export default MyGithubPage;
