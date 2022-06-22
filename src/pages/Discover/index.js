import React from 'react';

import {
  Container,
  AreaSearch,
  InputSearch,
  BtnSearch,
  TextSearch,
  ImageEleicoes,
  AreaTech,
  AreaImgHashtag,
  ImgHashtag,
  AreaTechNews,
  TextTechNews,
  TextHashtag,
  AreaImgTech, Img1, Img2, Img3, Img4
} from './styles';

export default function Discover() {
  return (
    <Container>

      <AreaSearch>
        <InputSearch placeholder='Procurar' />
        <BtnSearch>
          <TextSearch>Procurar</TextSearch>
        </BtnSearch>
      </AreaSearch>

      <ImageEleicoes source={require('../../assets/eleicoes.jpg')} />

      <AreaTech>
        <AreaImgHashtag>
          <ImgHashtag source={require('../../assets/hashtag.png')} />
        </AreaImgHashtag>
        <AreaTechNews>
          <TextTechNews>TechNews</TextTechNews>
          <TextHashtag>Hashtag Popular</TextHashtag>
        </AreaTechNews>
      </AreaTech>
      <AreaImgTech>
        <Img1 source={require('../../assets/img1.jpg')} />
        <Img2 source={require('../../assets/img2.jpg')} />
        <Img3 source={require('../../assets/img3.jpg')} />
        <Img4 source={require('../../assets/img4.jpg')} />
      </AreaImgTech>

    </Container>
  );
};