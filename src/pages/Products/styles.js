import styled from "styled-components";

export const Background = styled.View`
flex: 1;
background-color: #F3F4F6;
width: 100%;
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

export const SearchProduct = styled.View`
justify-content: center;
align-items: center;
width: 100%;
height: 45px;
margin-bottom: 10px;
margin-top: 10px;

`;

export const BoxInputSearch = styled.View`
padding-left: 10px;
flex-direction: row;
align-items: center;
width: 95%;
height: 100%;
font-size: 18px;
font-weight: 500;
border-color: #BFBEBE;
border-width: 1px;
border-radius: 5px;
`;

export const InputSearch = styled.TextInput`
padding-left: 10px;
width: 90%;
height: 100%;
font-size: 18px;
font-weight: 500;
`;

export const BtnSearch = styled.TouchableOpacity`

`;

export const IconSearch = styled.Image`
width: 25px;
height: 25px;
`;

export const BoxProducts = styled.View`

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

export const ProductList = styled.ScrollView.attrs(() => ({
  contentContainerStyle: {
    paddingBottom: 120,
  },
}))`
background-color: #FFFFFF;
border-top-left-radius: 5px;
border-top-right-radius: 5px;
width: 100%;
padding: 10px;
elevation: 6; /* Android */
shadow-color: #000; /* iOS */
shadow-offset: 0px 2px;
shadow-opacity: 0.3;
shadow-radius: 4px;
`;
