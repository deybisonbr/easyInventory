import styled from "styled-components";

export const ContentModalForm = styled.TouchableOpacity`
flex:1;
align-items: center;
justify-content: center;
background-color:rgba(0, 0, 0, 0.55);
`;

export const BoxFormRegister = styled.Pressable`
width: 97%;
min-height: 10%;
border-radius: 10px;
background-color:rgb(255, 255, 255);
align-items: center;
`;

export const TitleForm = styled.Text`
color: #737272;
font-size: 22px;
font-weight: 600;
margin-top: 10px;
margin-bottom: 20px;
`;

export const BoxInputs = styled.KeyboardAvoidingView`
width: 95%;
align-items: center;
justify-content: center;
`;

export const InputForm = styled.TextInput`
width: 100%;
height: 45px;
border-color: #BFBEBE;
border-width: 1px;
border-radius: 5px;
font-size: 18px;
padding-left: 10px;
margin-bottom: 10px;
font-weight: 500;
`;
export const BoxFormActionButtons = styled.View`
width: 95%;
flex-direction: row;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
margin-top: 10px;
`;
export const BtnActionsForm = styled.TouchableOpacity`
`;
export const BtnActionsText = styled.Text`
color: #0041AA;
font-size: 18px;
font-weight: 500;
`;