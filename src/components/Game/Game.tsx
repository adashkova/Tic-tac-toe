import { useState, FC } from 'react';
import { calculateWinner } from '../../calculateWinner';
import { Row, Button, notification, Typography } from 'antd';
import Field from '../Field';
import styled from 'styled-components';

const { Title, Text } = Typography;

const StyledGame = styled(Row)`
  font-family: 'Lato', sans-serif;
  min-height: 100vh;
  width: 100%;
  background-color: #222222;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  margin-bottom: 15px;
  width: 200px;
  height: 40px;
  font-size: 20px;
  :hover {
    border: 2px solid #cccdcf;
    transition: 0.3s all ease;
    color: #a3a0a0;
  }
`;

const Game: FC = () => {
  const [field, setField] = useState<string[]>(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState<boolean>(true);

  const winner = calculateWinner(field);

  const openNotificationWithIcon = (message: string): void => {
    notification.open({
      message: <Text style={{ fontSize: '25px' }}>{message}</Text>,
    });
  };

  const startNewGame = (): void => {
    setField(Array(9).fill(null));
  };

  const stopGame = (message: string): void => {
    openNotificationWithIcon(message);
  };

  winner && stopGame(`Winner is ${winner}`);

  const isInit = field.every(sq => sq === null);
  const isFill = field.every(sq => sq === 'X' || sq === '0');

  !isInit && winner === null && isFill && stopGame('No winner! It is a tie');

  const handleClick = (idx: number) => {
    const fieldCopy: string[] = [...field];
    if (winner || fieldCopy[idx]) return;
    fieldCopy[idx] = xIsNext ? 'X' : '0';
    setField(fieldCopy);
    setIsNext(!xIsNext);
  };

  return (
    <StyledGame justify="center" align="middle">
      <StyledButton ghost onClick={startNewGame}>
        CLEAN
      </StyledButton>
      <Field squares={field} onClick={handleClick} />
      {!winner && (
        <Title level={3} style={{ color: '#fff' }}>
          Next is {xIsNext ? ' X' : ' O'}
        </Title>
      )}
    </StyledGame>
  );
};

export default Game;
