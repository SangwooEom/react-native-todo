import React from 'react';
import {TouchableOpacity} from 'react-native';
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
  id,
}: {
  type: keyof typeof images;
  onPressOut?: (id: string) => void;
  id?: string;
}) => {
  const _onPressOut = () => {
    if (onPressOut && id) {
      onPressOut(id);
    }
  };
  return (
    <TouchableOpacity onPressOut={_onPressOut}>
      <Icon source={type} />
    </TouchableOpacity>
  );
};

export default IconButton;
