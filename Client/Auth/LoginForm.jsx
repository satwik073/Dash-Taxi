// import { StyleSheet, Text, TextInput, View , Button, ScrollView} from 'react-native'
// import React, { useState } from 'react'
// import axios from 'axios'

// const LoginForm = () => {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setpassword] = useState('')
//     const handleSubmitResponse = () => {
//         const data = {
//             name, email, password
//         }
//         axios.post("https://dash-backend-glqb.onrender.com/v1/user/register", data)
//             .then(response => {
//                 console.log('Success:', response.data)
//             })
//             .catch(error => {
//                 console.error('Error:', error)
//                 Alert.alert('Error', 'Something went wrong')
//             });

//     }
//     return (

//         <View>
//             <Text style={[styles.boldTheText, { textAlign: 'center' }]}>Uber<Text style={{ fontWeight: 'heavy', fontSize: 70, color: '#4B70F5' }}>.</Text></Text>
//             <Text style={styles.boldTheText}>Name</Text>
//             <TextInput
//                 placeholder='Enter your name'
//                 value={name}
//                 style={styles.boldTheTextForm}
//                 onChangeText={setName}
//             />
//             <Text style={styles.boldTheText}>Email</Text>
//             <TextInput
//                 placeholder='Enter your email'
//                 value={email}
//                 onChangeText={setEmail}
//             />
//             <Text style={styles.boldTheText}>Password</Text>
//             <TextInput
//                 placeholder='Enter your password'
//                 value={password}
//                 onChangeText={setpassword}

//             />
//             <Button title='Register' onPress={handleSubmitResponse}/>


//         </View>
//     )
// }

// export default LoginForm

// const styles = StyleSheet.create({
//     boldTheText: {
//         fontWeight: 'bold',
//         fontSize: 30,

//     },
//     boldTheTextForm: {
//         borderWidth: 1,
//         paddingVertical: 10,
//         paddingHorizontal: 10,
//         borderRadius: 10,
//         borderColor: 'gray'


//     }
// })

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import FloatingLabelInput from '../Components/FloatingLabelInput';

import { MdLockOutline } from 'react-icons/md';
// import axios from 'axios';
// import { apiUrl } from '../../utils/app.utils'; // Ensure this path is correct

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {/* <MdLockOutline size={50} color="#1976d2" /> */}
      </View>
      {/* <Text style={styles.title}>Sign in</Text> */}
      <FloatingLabelInput
        label="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.passwordContainer}>
        <FloatingLabelInput
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={handleClickShowPassword} style={styles.eyeIcon}>
          {/* {showPassword ? <RiEyeFill size={20} /> : <RiEyeOffFill size={20} />} */}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.rememberMeContainer}>
        <Text style={styles.rememberMe}>Remember me</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.linksContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Don't have an account? <Text style={styles.linkSignUp}>Sign Up</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  avatarContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMe: {
    color: '#1976d2',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#1976d2',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  linksContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  link: {
    color: '#1976d2',
  },
  linkSignUp: {
    color: '#1976d2',
    fontWeight: 'bold',
  },
});

export default LoginForm;

