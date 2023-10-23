import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import * as Animatable from 'react-native';

export default function SignUp() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Animatable.ScrollView
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        <Animatable.View
          animation="fadeInLeft"
          delay={500}
          style={styles.containerHeader}>
          <Text style={styles.message}>Crie sua conta agora!</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <KeyboardAvoidingView>
          <Text style={styles.title}>Nome Completo</Text>
            <TextInput placeholder="Digite seu nome" style={styles.input} />
            <Text style={styles.title}>Email</Text>
            <TextInput placeholder="Digite um email..." style={styles.input} />
            <Text style={styles.title}>Senha</Text>
            <TextInput placeholder="Senha " style={styles.input} />
            <Text style={styles.title}>Confirme sua senha</Text>
            <TextInput placeholder="Senha" style={styles.input} />
            <Text style={styles.title}>Qual seu time?</Text>
            <TextInput placeholder="Canais..." style={styles.input} />
          </KeyboardAvoidingView>

          <TouchableOpacity
            style={styles.buttonLogin}
            onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#47A054',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  containerForm: {
    backgroundColor: '#FFF',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: 'black',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: 'black',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonLogin: {
    backgroundColor: '#A855A0',
    borderRadius: 50,
    paddingVertical: 20,
    width: '60%',
    alignSelf: 'center',
    bottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  registerText: {
    color: 'black',
  },
});