import React from "react";
import EntypoIcons from 'react-native-vector-icons/Entypo';

import { ButtonIcon } from './styles';

export default function Button() {
  return (
    <ButtonIcon>
      <EntypoIcons name="plus" size={22} color='#000' />
    </ButtonIcon>
  );
};