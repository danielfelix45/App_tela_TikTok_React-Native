import React from 'react';

import {
  Container,
  AreaActivities,
  TextActivities,
  ImgSend,
  ImgComment,
  TextComment,
  AreaComment,
  TextAreaComment
} from './styles'

export default function Inbox() {
  return (
    <Container>

      <AreaActivities>
        <TextActivities>Todas as atividades</TextActivities>
        <ImgSend source={require('../../assets/icon-send.png')} />
      </AreaActivities>

      <ImgComment source={require('../../assets/icon-comment.png')} />
      <TextComment>Todas as notificações</TextComment>
      <AreaComment>
        <TextAreaComment>Todas as atualizações relacionadas á sua conta do TikTok serão mostradas aqui</TextAreaComment>
      </AreaComment>

    </Container>
  );
};
