import React from "react";
import EntypoIcons from 'react-native-vector-icons/Entypo';

import { ButtonIcon } from './styles';

export default function ButtonUser() {
  return (
    <ButtonIcon>
      <EntypoIcons name="plus" size={20} color='#fff' />
    </ButtonIcon>
  );
};