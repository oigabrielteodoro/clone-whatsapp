import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #2c2c2e;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #2c2c2e;

  flex-direction: row;
  align-items: center;

  ${({ isErrored }) =>
    isErrored &&
    css`
      border-color: #c53030;
    `};

  ${({ isFocused }) =>
    isFocused &&
    css`
      border-color: #33a0fc;
    `};
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #fff;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const Icon = styled(Feather)`
  margin-right: 16px;
`;
