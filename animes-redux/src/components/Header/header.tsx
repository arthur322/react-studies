import React from 'react';
import * as S from './styled';

const Header: React.FC = () => (
  <S.Header>
    <S.Title>AnimeList</S.Title>
    <input type="text" placeholder="Search" />
    <S.UserImage />
  </S.Header>
);

export default Header;
