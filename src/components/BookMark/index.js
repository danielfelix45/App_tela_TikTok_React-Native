import React from "react";
import Feather from 'react-native-vector-icons/Feather';

import { BookMarkArea } from './styles';

export default function BookMark() {
  return (
    <BookMarkArea>
      <Feather name="bookmark" size={22} color='#000' />
    </BookMarkArea>
  );
};