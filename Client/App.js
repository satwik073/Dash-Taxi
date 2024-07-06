import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import LoginForm from './Auth/LoginForm';
import FetchingData from './Screens/FetchingData';
import DashLight from "./assets/DashLight.png";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.logoContainer}>
          <Image source={DashLight} style={styles.logo} resizeMode="contain" />
        </View>
        {/* <Text>hey ! satwik this side database connected</Text> */}
        <StatusBar style="auto" />
        {/* <FetchingData /> */}
        <LoginForm />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    fontWeight: '500',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 0,
  },
  logo: {
    width: 200, 
    height: 200, 
  },
});
