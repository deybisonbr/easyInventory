import styled from "styled-components";

export const Background = styled.View`
flex: 1;
background-color: #F3F4F6;
justify-content: center;
align-items: center;
`;
export const BackgroundScroll = styled.ScrollView`
height: 100%;
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
min-height: 50px;
`;

export const BoxActivity = styled.View`
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



