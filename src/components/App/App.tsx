import { FC } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Game from '../Game';
import Title from 'antd/lib/typography/Title';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  background-color: #151516;
  border-bottom: 1px solid #444444;
  padding: 15px;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 2rem;
`;

const App: FC = () => {
  return (
    <Layout>
      <StyledHeader>
        <Title style={{ color: '#fff' }}>TIC-TAC-TOE</Title>
      </StyledHeader>
      <Game />
    </Layout>
  );
};

export default App;
