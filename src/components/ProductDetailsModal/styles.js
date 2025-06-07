import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5); /* fundo semitransparente */
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  width: 90%;
  background-color: #fff;
  padding: 15px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const CloseButton = styled.TouchableOpacity`
  padding: 5px;
`;

export const Content = styled.View`
  width: 90%;
  background-color: #fff;
  padding: 20px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 600;
  margin-top: 15px;
  color: #666;
`;

export const ValueText = styled.Text`
  font-size: 16px;
  margin-top: 5px;
  color: #000;
`;

export const Input = styled.TextInput`
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  color: #000;
`;

export const ButtonSave = styled.TouchableOpacity`
  margin-top: 25px;
  background-color: #007bff;
  padding: 12px;
  border-radius: 6px;
  align-items: center;
`;

export const ButtonSaveText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
export const ButtonDelete = styled.TouchableOpacity`
  margin-top: 25px;
  background-color: rgb(182, 0, 0);
  padding: 12px;
  border-radius: 6px;
  align-items: center;
`;

export const ButtonDeleteText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;
