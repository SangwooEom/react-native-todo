import React from 'react';
import styled from 'styled-components/native';
import {Theme} from '../theme';
import {useWindowDimensions} from 'react-native';

const StyledInput = styled.TextInput.attrs(({theme}: {theme: Theme}) => ({
  placeholderTextColor: theme.main,
}))<{width: number; theme: Theme}>`
  width: ${props => props.width - 40}px;
  height: 60px;
  margin: 3px 0;
  padding: 15px 20px;
  border-radius: 10px;
  background-color: ${props => props.theme.itemBackground};
  font-size: 25px;
  color: ${props => props.theme.text};
`;

const Input = ({
  placeholder,
  value,
  onChangeText,
  onSubmitEditing,
}: {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  onSubmitEditing: () => void;
}) => {
  const width = useWindowDimensions().width;
  return (
    <StyledInput
      width={width}
      placeholder={placeholder}
      maxLength={50}
      autoCapitalize="none"
      autoCorrect={false}
      returnKeyType="done"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
    />
  );
};

export default Input;
