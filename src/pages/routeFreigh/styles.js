import styled from "styled-components/native";

import { Platform } from "react-native";

import colors from "../../styles/colors";

const statusBarHeight =
  Platform.OS === "android" ? 0 : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.background};
  padding-top: ${statusBarHeight + "px"};
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const Text = styled.Text`
  font-size: 16px;
  color: ${colors.text_black_title};

`
