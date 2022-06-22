import React from 'react';
import {
  Container,
  AreaUserName,
  TextUserName,
  BtnElipse,
  ImgUser,
  TextUser,
  AreaBtn,
  AreaFollowing,
  TextCounter,
  TextAreaFollowing,
  AreaFollowers,
  TextAreaFollowers,
  AreaLikes,
  TextAreaLikes,
  AreaProfile,
  BtnEditProfile,
  TextEditProfile,
  BtnFavorites
} from './styles';

import Elipse from '../../components/Elipse';
import BookMark from '../../components/BookMark'

export default function Profile() {
  return (
    <Container>

      <AreaUserName>
        <TextUserName>danielfelix6569</TextUserName>
        <BtnElipse>
          <Elipse />
        </BtnElipse>
      </AreaUserName>

      <ImgUser source={require('../../assets/me.jpeg')} />
      <TextUser>@danielfelix6569</TextUser>

      <AreaBtn>
        <AreaFollowing>
          <TextCounter>0</TextCounter>
          <TextAreaFollowing>Seguindo</TextAreaFollowing>
        </AreaFollowing>

        <AreaFollowers>
          <TextCounter>0</TextCounter>
          <TextAreaFollowers>Seguidores</TextAreaFollowers>
        </AreaFollowers>

        <AreaLikes>
          <TextCounter>0</TextCounter>
          <TextAreaLikes>Curtidas</TextAreaLikes>
        </AreaLikes>
      </AreaBtn>

      <AreaProfile>
        <BtnEditProfile>
          <TextEditProfile>Editar Perfil</TextEditProfile>
        </BtnEditProfile>
        <BtnFavorites>
          <BookMark />
        </BtnFavorites>
      </AreaProfile>

    </Container>
  );
};