import styled from "styled-components/native";

import { Platform } from "react-native";

import colors from "../../styles/colors";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 0  10px;
`
export const Avatar = styled.TouchableOpacity`
  background: ${colors.active};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const AvatarImage = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 20px;
`;
export const ButtoIcon = styled.TouchableOpacity`
  padding: 10px;
`
export const TextTitle = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.text_black_title};
`