import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import LoginForm from './Auth/LoginForm';
import FetchingData from './Screens/FetchingData';

export default function App() {
  return (
    <SafeAreaView style ={styles.container}>
      <View >
        <Text>hey ! satwik this side database connected</Text>
        <StatusBar style="auto" />
        {/* <LoginForm/><FetchingData/> */}
        <FetchingData/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    fontWeight: 500,
    paddingHorizontal: 30,
    paddingVertical: 50
  },
});
