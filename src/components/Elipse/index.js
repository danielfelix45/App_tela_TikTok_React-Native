import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { ButtonElipse } from './styles';

export default function Elipse() {
  return (
    <ButtonElipse>
      <Feather name='more-vertical' size={25} color='#000' />
    </ButtonElipse>
  );
};