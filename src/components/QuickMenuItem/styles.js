import styled from "styled-components";

export const QuickItem = styled.TouchableOpacity`
align-items: center;
justify-content: center;
background-color: #FFFFFF;
border: 1px;
border-color: #DAD9D9;
border-radius: 5px;
width: 180px;
min-height: 120px;
margin-left: 8px;
`;

export const QuickContentImage = styled.View`
background-color: #9001FF;
border-radius: 100%;
padding: 12px;
`;

export const ImageQuickMenu = styled.Image`
height: 45px;
width: 45px;
`;

export const TextQuickMenu = styled.Text`
margin-top: 5px;
font-size: 15px;
font-weight: 500;
`;