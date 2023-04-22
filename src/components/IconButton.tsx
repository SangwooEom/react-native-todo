import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {images, Images} from '../Images';
import {Theme} from '../theme';

const Icon = styled.Image<{
  source: keyof Images;
  theme: Theme;
  completed?: boolean;
}>`
  tint-color: ${props =>
    props.completed ? props.theme.done : props.theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const IconButton = ({
  type,
  onPressOut,
  id,
  completed,
}: {
  type: keyof typeof images;
  onPressOut?: (id: any) => void;
  id?: string;
  completed?: boolean;
}) => {
  const _onPressOut = () => {
    if (onPressOut) {
      onPressOut(id);
    }
  };
  return (
    <TouchableOpacity onPressOut={_onPressOut}>
      <Icon source={type} completed={completed} />
    </TouchableOpacity>
  );
};

export default IconButton;
