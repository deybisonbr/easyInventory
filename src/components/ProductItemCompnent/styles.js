import styled from "styled-components";

export const ActivityItem = styled.View`
flex-direction: row;
justify-content: space-between;
  border-bottom-width: 1px;
  border-bottom-color: #DAD9D9;
  padding: 5px;
`;

export const DescriptionActivity = styled.View`
flex-direction: column;
`;
export const ActivityTipeContent = styled.View`
flex-direction: row;
align-items: center;
`;
export const IconType = styled.Image`
height: 35px;
width: 35px;
margin-right: 10px;
`;
export const ProductName = styled.Text`
font-size: 20px;
font-weight: 700;
margin-bottom: 5px;
`;
export const IdProduct = styled.Text`
font-size: 20px;
font-weight: 500;
`;
export const DateCreateProduct = styled.Text`
font-size: 16px;
font-weight: 500;
color:rgb(165, 164, 164);
`;
export const ActionButtonsActivity = styled.View`
flex-direction: column;
justify-content: space-between;
margin-top: 5px;
`;
export const ActionButtomEdit = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
margin-bottom: 15px;
`;
export const TextEdit = styled.Text`
font-size: 18px;
margin-left: 5px;
color: #CED907;
font-weight: 600;
`;
export const ActionButtomView = styled.TouchableOpacity`
flex-direction: row;
align-items: center;
`;
export const TextView = styled.Text`
font-size: 18px;
margin-left: 5px;
color: #0048FD;
font-weight: 600;
`;
export const ImageBtn = styled.Image`
height: 30px;
width: 30px;
`;

export const BoxBtnActions = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
`;

export const BtnViewProduct = styled.TouchableOpacity`
border-radius: 5px;
background-color: #A4BEFF;
padding: 5px;
margin-right: 10px;
`;
export const BtnViewIcon = styled.Image`
width: 35px;
height: 35px;
`;
export const BtnEditProduct = styled.TouchableOpacity`
border-radius: 10px;
background-color: #FFEE8E;
padding: 5px;
`;
export const BtnEditIcon = styled.Image`
width: 40px;
height: 40px;
`;
