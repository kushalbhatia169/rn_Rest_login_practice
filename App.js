import { StatusBar } from 'expo-status-bar';
import React,{useContext, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Alert, TouchableOpacity } from 'react-native';
import UserContext from './common/global_context';

export default function App() {
  const context = useContext(UserContext),
  defaultValue = {
    name: '' ,
    email: '' ,
    password: '' ,
  },
    [state, setState] = useState(defaultValue),
    setStateData = (stateName, data) => {
      setState(prevState => ({
        ...prevState, [stateName]: data
      }));
    },
    {loginData} = state,
    loginUser = () =>{
      console.log(state);
      Alert.alert("Hmmmmm",`${state.name} and ${state.email} looks like You are trying to login`);
    };
  context.state = state;

  return (
    <View style={styles.container}>
      <Text>Please Enter something here...</Text>
      <TextInput
          value={state.name}
          keyboardType = 'default'
          onChangeText={(name) => setStateData('name',name)}
          placeholder='name'
          placeholderTextColor = 'black'
          style={styles.input}
        />
      <TextInput
          value={state.email}
          keyboardType = 'email-address'
          onChangeText={(email) => setStateData('email',email)}
          placeholder='email'
          placeholderTextColor = 'black'
          style={styles.input}
        />
        <TextInput
          value={state.password}
          onChangeText={(password) => setStateData('password',password)}
          placeholder='password'
          secureTextEntry={true}
          placeholderTextColor = 'black'
          style={styles.input}
        />
        <TouchableOpacity
            style={styles.button}
            onPress={loginUser}
        >
          <Text style={styles.buttonText}> Submit </Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 26,
  },
  titleText:{
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'powderblue',
    width: 200,
    height: 44,
    padding: 1,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
    marginBottom: 10,
  },
  buttonText:{
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  },
  input: {
    width: 200,
    fontSize: 20,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
  },
});
