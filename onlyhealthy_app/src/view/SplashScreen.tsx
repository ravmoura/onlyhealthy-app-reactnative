import React, { useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles/SplashScreen.styles';

export default function SplashScreen({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Logo_OnlyHealthyPizzaria.png')} style={styles.logo} />
      <Text style={styles.title}>Descubra o sabor de ser saudável</Text>
    </View>
  );
}