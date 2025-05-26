import styled from 'styled-components';
import { Colors } from '../../public/Colors/Colors';

export const Background = styled.div`
  background-color: ${Colors.gray400};
  color: ${Colors.gray100};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;


export const Card = styled.div`
  background-color: ${Colors.gray500};
  padding: 1rem;
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  word-break: break-word;
`;
