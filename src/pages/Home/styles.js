import styled from "styled-components";

export const Background = styled.View`
flex: 1;
background-color: #F3F4F6;
`;

export const TitleText = styled.Text`
font-size: 20px;
font-weight: 700;
color: #6A0DAD;
margin-bottom: 10px;
margin-top: 10px;
margin-left: 10px;
`;
export const EmptyItens = styled.Text`
font-size: 18px;
font-weight: 600;
color:rgb(59, 59, 59);
`;
export const QuickMenu = styled.ScrollView`
height: 50px;
`;

export const BoxActivity = styled.View`
flex: 6;
align-items: center;
justify-content: center;
`;

export const ActivityFeed = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 120,
  },
}))`
background-color: #FFFFFF;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
width: 97%;
padding: 10px;
elevation: 6; /* Android */
shadow-color: #000; /* iOS */
shadow-offset: 0px 2px;
shadow-opacity: 0.3;
shadow-radius: 4px;
`;

export const FloatingButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background-color: #6A0DAD;
  width: 75px;
  height: 75px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  border: 1px;
  border-color: #B4A2C2;

  elevation: 6;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
`;

export const IconFloatBtn = styled.Image`
height: 45px;
width: 45px;
`;

