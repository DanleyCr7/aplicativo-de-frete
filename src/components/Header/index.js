import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../styles/colors';
import avatar from '../../assets/avatar.jpg'
import { Container, Avatar, AvatarImage, ButtoIcon, TextTitle } from './styles';

const Header = () => {
  return (
    <Container>
      <ButtoIcon>
        <MaterialCommunityIcons
          size={20}
          name="dots-horizontal"
          color={colors.text_black_title}
        />
      </ButtoIcon>
      <TextTitle>shipment</TextTitle>
      <Avatar>
        <AvatarImage source={avatar}/>
      </Avatar>
    </Container>
  );
};

export default Header;
