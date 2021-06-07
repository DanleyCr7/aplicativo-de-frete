import React from "react";
import { Text } from "react-native";
import {
  Wrapper,
  ContainerDescription,
  ContainerTack,
  TextTitle,
  ButtonIcon,
  TextButon,
  ContainerAbout,
  TextAbout,
  List,
  ContainerTask,
  ButtonIconTask,
  RightSide,
  TextDescribeTask,
  TextTitleTask,
  ButtonIconNone,
  ContainerActivity,
  ContainerIcon,
  ContainerFilter,
  ContainerCheck,
  TextCheck
} from "./styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import colors from "../../styles/colors";
import Header from "../../components/Header";
import { ScrollView } from "react-native-gesture-handler";
export default function Welcome() {
  return (
    <ScrollView>
      <Wrapper>
        <Header />
        <ContainerDescription>
          <TextTitle>Universal{"\n"}Parcel Traking</TextTitle>
          <ContainerTack>
            <TextButon>Enter track number</TextButon>
            <ButtonIcon>
              <MaterialCommunityIcons
                name="truck"
                size={26}
                color={colors.background}
              />
            </ButtonIcon>
          </ContainerTack>
          <ContainerAbout>
            <MaterialCommunityIcons
              name="information"
              size={18}
              color={colors.text_black_describe}
            />
            <TextAbout>
              Enter the number and we will check where is your package
            </TextAbout>
          </ContainerAbout>
        </ContainerDescription>
        <List>
          <ContainerTask primary={false}>
            <ButtonIconTask iconTask={false}>
              <FontAwesome5
                name="box-open"
                size={20}
                color={colors.background}
              />
            </ButtonIconTask>
            <RightSide>
              <TextTitleTask>Traking</TextTitleTask>
              <TextDescribeTask>20 active</TextDescribeTask>
            </RightSide>
          </ContainerTask>
          <ContainerTask primary={true}>
            <ButtonIconTask iconTask={true}>
              <FontAwesome5
                name="history"
                size={20}
                color={colors.background}
              />
            </ButtonIconTask>
            <RightSide>
              <TextTitleTask text>Story</TextTitleTask>
              <TextDescribeTask text>40 completed</TextDescribeTask>
            </RightSide>
          </ContainerTask>
        </List>
        <ContainerActivity>
          <TextTitleTask>Recent Activity</TextTitleTask>
          <ButtonIconNone>
            <FontAwesome5
              name="sort-amount-down"
              size={20}
              color={colors.text_black_title}
            />
          </ButtonIconNone>
        </ContainerActivity>
        <ContainerFilter>
          <ContainerIcon>
            <FontAwesome5
              name="tshirt"
              size={20}
              color={colors.text_black_title}
            />
          </ContainerIcon>
          <RightSide>
            <TextTitleTask>Mubike Store</TextTitleTask>
            <ContainerCheck>
            <FontAwesome5
              name="check-circle"
              size={15}
              color={colors.text_black_title}
            />
            <TextCheck text={false}>40 completed</TextCheck>
            </ContainerCheck>
          </RightSide>
          <TextCheck text={false}>20 min ago</TextCheck>
        </ContainerFilter>
        <ContainerFilter>
          <ContainerIcon>
            <MaterialCommunityIcons
              name="clock"
              size={20}
              color={colors.text_black_title}
            />
          </ContainerIcon>
          <RightSide>
            <TextTitleTask>Smile Store</TextTitleTask>
            <ContainerCheck>
            <FontAwesome5
              name="check-circle"
              size={15}
              color={colors.text_black_title}
            />
            <TextCheck text={false}>15 completed</TextCheck>
            </ContainerCheck>
          </RightSide>
          <TextCheck text={false}>2 hour ago</TextCheck>

        </ContainerFilter>
      </Wrapper>
    </ScrollView>
  );
}
