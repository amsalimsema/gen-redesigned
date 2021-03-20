import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

export const BtnBox = styled.div`
  margin: 1rem 0 4rem 0;
`;
export const ShopBtn = styled(Button)`
  padding: 0.2rem 3rem;
  border-radius: 15rem;
  background: #27af48;
  border: 0;
  outline: none;
  &:hover {
    background: grey;
    color: inherit;
  }
`;
export const Dot = styled(BiDotsHorizontalRounded)`
  color: #27af48;
  font-size: 4rem;
`;
