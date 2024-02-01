import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal} from 'react-native';
import {ModalPlayer} from './src/components/modal'

const colors = ['#d33833', '#ea6a3f', '#706f6b', '#32312f'];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  function click() {
    console.log("Clicado e aprovado, chefe!")
  };

  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")} style={styles.logo}/>
      <Text style={styles.title}>Minder</Text>
      <TouchableOpacity style={styles.button} onPress={click}>
        <Text style={styles.buttonText}>Jogar</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType='fade'>
        <ModalPlayer/>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: -25,
    width: 300,
    height: 320
  },
  title: {
    marginBottom: 60,
    fontSize: 35,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: colors[0],
    width: "30%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 'bold'
  },
}); 
