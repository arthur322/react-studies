import React, { useState } from 'react';
import { StatusBar, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { loginUser } from '~/store/actions/users';
import {
  Container, Title, Input, Button, ButtonText,
} from './styles';

const Main = () => {
  const [login, setLogin] = useState({ email: '', password: '' });
  const user = useSelector(({ users }) => users);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUser(login));
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="tomato" />
      <Title>Bem-vindo ao To-zim-Do!</Title>

      <Input
        placeholder="E-mail"
        value={login.email}
        onChangeText={txt => setLogin({ ...login, email: txt })}
      />
      <Input
        placeholder="Senha"
        secureTextEntry
        value={login.password}
        onChangeText={txt => setLogin({ ...login, password: txt })}
      />

      <Button onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </Button>

      {/* Só pra ver que tá funcionando kk */}
      <View>
        <Text>{user.email}</Text>
        <Text>{user.password}</Text>
      </View>
    </Container>
  );
};
export default Main;
