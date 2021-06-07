import styled from "styled-components/native";

import { Platform } from "react-native";

import colors from "../../styles/colors";

const statusBarHeight =
  Platform.OS === "android" ? 0 : 0;

export const Wrapper = styled.SafeAreaView`
  background: ${colors.background};
  padding-top: ${statusBarHeight + "px"};
`;
export const ContainerDescription = styled.View`
  margin-top: 25px;
  padding-left: 15px;
`
export const TextTitle = styled.Text`
  color: ${colors.text_black_title};
  font-size: 18px;
  font-weight: bold;
`
export const ContainerTack = styled.View`
  padding: 10px 15px 20px;
  border-width: 1px;
  border-radius: 5px;
  border-color: ${colors.active};
  flex-direction: row;
  width: 95%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const TextButon = styled.Text`
  color: ${colors.active};
  font-size: 16px;
  font-weight: bold;
`
export const ButtonIcon = styled.TouchableOpacity`
  background: ${colors.active};
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`

export const ContainerAbout = styled.View`
  border-color: ${colors.active};
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin-top: 15px;
  padding: 0px 0px 10px 0px;
`
export const TextAbout = styled.Text`
  color: ${colors.text_black_describe};
  font-size: 15px;
  margin-left: 4px;
`
export const List = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  padding: 8px 0 24px;
`;

export const ContainerTask = styled.TouchableOpacity`
 background: ${props => props.primary ?  colors.active: colors.invative};
 flex-direction: row;
 justify-content: center;
 width: 180px;
 height: 110px;
 margin: 10px 10px 0 10px;
 border-radius: 10px;
 align-items: center;
`
export const ButtonIconTask = styled.View`
  background: ${props => props.iconTask ?'rgba(0, 0, 0, 0.1)': colors.text_black_title };
  width: 50px;
  height: 50px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`
export const RightSide = styled.View`
`
export const TextTitleTask = styled.Text`
  color: ${props => props.text ? colors.background : colors.text_black_title};
  font-size: 15px;
  font-weight: bold;
`
export const TextDescribeTask = styled.Text`
  color: ${props => props.text ? colors.background : colors.text_black_describe};
  font-size: 14px;
  font-weight: 300;
`

export const ContainerActivity = styled.View`
  width: 95%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  background: ${colors.background};
`
export const ButtonIconNone = styled.View`
  padding: 10px;
`
export const ContainerIcon = styled.View`
  width: 80px;
  height: 80px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: ${colors.invative};
`
export const ContainerFilter = styled.TouchableOpacity`
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px 15px;
  background: ${colors.background};
`
export const ContainerCheck = styled.View`
  flex-direction: row;
  align-items: center;
  background: ${colors.background};
  margin-top: 5px;
`
export const TextCheck = styled.Text`
  color: ${props => props.text ? colors.background : colors.text_black_describe};
  font-size: 14px;
  font-weight: 300;
  margin-left: 5px;
`


