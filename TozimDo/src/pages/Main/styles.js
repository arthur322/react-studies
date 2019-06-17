import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput.attrs({
  autoCapitalize: 'none',
  placeholderTextColor: '#ccc',
})`
  width: 80%;
  font-size: 18px;
  border: 1px solid #fff;
  padding: 5px 15px;
  color: #fff;
  background: #ffffff20;
  margin-top: 15px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5,
})`
  border-radius: 5px;
  width: 50%;
  background: #fff;
  padding: 10px 15px;
  margin-top: 15px;
`;

export const ButtonText = styled.Text`
  color: tomato;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
