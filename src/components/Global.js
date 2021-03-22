import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

export const BtnBox = styled.div`
  margin: 1rem 0 4rem 0;
`;
export const ShopBtn = styled(Link)`
  padding: 0.2rem 3rem;
  border-radius: 15rem;
  background: #27af48;
  color: #fff;
  text-decoration: none;
  border: 0;
  outline: none;
  &:hover {
    text-decoration: none;
    background: grey;
    color: #fff;
  }
`;

export const Btn = styled(Button)`
  padding: 0.2rem 3rem;
  border-radius: 15rem;
  background: #27af48;
  color: #fff;
  text-decoration: none;
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
