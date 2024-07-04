import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View ,ScrollView} from 'react-native';
import LoginForm from './Auth/LoginForm';
import FetchingData from './Screens/FetchingData';

export default function App() {
  return (
    <SafeAreaView style ={styles.container}>
      <ScrollView showsVerticalScrollIndicator = {false} >
        <Text>hey ! satwik this side database connected</Text>
        <StatusBar style="auto" />
        {/* <LoginForm/><FetchingData/> */}
        <FetchingData />
        <LoginForm/>
      </ScrollView>
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
