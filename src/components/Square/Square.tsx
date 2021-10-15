import { FC, MouseEventHandler } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';
import 'antd/dist/antd.css';

const StyledButton = styled(Button)`
  width: 100px;
  height: 100px;
  border: 1px solid #a5a2a2;
  cursor: pointer;
  outline: none;
  font-size: 60px;
  :hover {
    background: #f0f0f0;
    transition: 0.3s all ease;
    color: #080808;
  }
`;

type SquareProps = {
  value: string | null;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Square: FC<SquareProps> = ({ onClick, value }) => {
  return <StyledButton onClick={onClick}>{value ? value : ' '}</StyledButton>;
};

export default Square;
