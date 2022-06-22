import React from "react";

import {
  Container,
  ImageBackground,
  AreaTextHome,
  TextLeft,
  TextRight,
  AreaUser,
  ImgUser,
  AreaLike,
  ImgLike,
  TextLike,
  AreaComments,
  ImgComments,
  TextComments,
  AreaShare,
  ImgShare,
  TextShare,
  TextUser,
  TextTitle
} from './styles';

import ButtonUser from '../../components/ButtonUser';

export default function Home() {
  return (
    <Container>
      <ImageBackground source={require('../../assets/Por_do_sol.png')}>

        <AreaTextHome>
          <TextLeft>Seguindo</TextLeft>
          <TextRight>Para você</TextRight>
        </AreaTextHome>

        <TextUser>@daniel_felix</TextUser>
        <TextTitle>Lindo por do sol❤️ #pordosol #natureza</TextTitle>

        <AreaUser>
          <ImgUser source={require('../../assets/me.jpeg')} />
          <ButtonUser />
        </AreaUser>

        <AreaLike>
          <ImgLike source={require('../../assets/icon-heart-red.png')} />
          <TextLike>3.3M</TextLike>
        </AreaLike>

        <AreaComments>
          <ImgComments source={require('../../assets/icon-comments.png')} />
          <TextComments>27.5K</TextComments>
        </AreaComments>

        <AreaShare>
          <ImgShare source={require('../../assets/icon-share.png')} />
          <TextShare>648.4K</TextShare>
        </AreaShare>

      </ImageBackground>
    </Container>
  );

};