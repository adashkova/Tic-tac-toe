import { useState, FC } from 'react';
import { calculateWinner } from '../../calculateWinner';
import { Row, Button, notification, Typography } from 'antd';
import Field from '../Field';
import styled from 'styled-components';

const { Title, Text } = Typography;

const StyledGame = styled(Row)`
  font-family: 'Lato', sans-serif;
  min-height: 94vh;
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
  const [field, setField] = useState<any>(Array(9).fill(null));
  const [xIsNext, setIsNext] = useState<boolean>(true);

  const winner = calculateWinner(field);

  const handleClick = (idx: number) => {
    const fieldCopy: any[] = [...field];
    if (winner || fieldCopy[idx]) return;
    fieldCopy[idx] = xIsNext ? 'X' : '0';
    setField(fieldCopy);
    setIsNext(!xIsNext);
  };

  const close = (): void => {
    setField(Array(9).fill(null));
  };

  const openNotificationWithIcon = (): void => {
    notification.open({
      message: (
        <Text style={{ fontSize: '25px' }}>{`Winner is ${winner}`}</Text>
      ),
      onClose: close,
    });
  };

  const startNewGame = () => {
    return (
      <StyledButton ghost onClick={() => setField(Array(9).fill(null))}>
        CLEAN
      </StyledButton>
    );
  };

  return (
    <StyledGame justify="center" align="middle">
      {startNewGame()}
      <Field squares={field} onClick={handleClick} />
      {!winner && (
        <Title level={3} style={{ color: '#fff' }}>
          {`Next is ${xIsNext ? ' X' : ' O'}`}
        </Title>
      )}
      {winner ? openNotificationWithIcon() : null}
    </StyledGame>
  );
};

export default Game;
