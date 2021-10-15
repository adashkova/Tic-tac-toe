import { FC } from 'react';
import { Row } from 'antd';
import styled from 'styled-components';
import Square from '../Square';

const StyledSpace = styled(Row)`
  width: 300px;
  height: 300px;
  background: #f3f0f0;
  margin-bottom: 30px;
`;

type FieldProps = {
  squares: string[];
  onClick(idx: number): void;
};

const Field: FC<FieldProps> = ({ onClick, squares }) => {
  return (
    <StyledSpace wrap>
      {squares &&
        squares.map((square, idx) => (
          <Square key={idx} value={square} onClick={() => onClick(idx)} />
        ))}
    </StyledSpace>
  );
};

export default Field;
