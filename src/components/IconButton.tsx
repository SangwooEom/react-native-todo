import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {images, Images} from '../Images';
import {Theme} from '../theme';

const Icon = styled.Image<{
  source: keyof Images;
  theme: Theme;
}>`
  tint-color: ${props => props.theme.text};
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const IconButton = ({
  type,
  onPressOut,
}: {
  type: keyof typeof images;
  onPressOut?: (event: GestureResponderEvent) => void;
}) => {
  return (
    <TouchableOpacity onPressOut={onPressOut}>
      <Icon source={type} />
    </TouchableOpacity>
  );
};

export default IconButton;
