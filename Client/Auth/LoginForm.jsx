import { StyleSheet, Text, TextInput, View , Button, ScrollView} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const handleSubmitResponse = () => {
        const data = {
            name, email, password
        }
        axios.post("https://dash-backend-glqb.onrender.com/v1/user/register", data)
            .then(response => {
                console.log('Success:', response.data)
            })
            .catch(error => {
                console.error('Error:', error)
                Alert.alert('Error', 'Something went wrong')
            });

    }
    return (

        <View>
            <Text style={[styles.boldTheText, { textAlign: 'center' }]}>Uber<Text style={{ fontWeight: 'heavy', fontSize: 70, color: '#4B70F5' }}>.</Text></Text>
            <Text style={styles.boldTheText}>Name</Text>
            <TextInput
                placeholder='Enter your name'
                value={name}
                style={styles.boldTheTextForm}
                onChangeText={setName}
            />
            <Text style={styles.boldTheText}>Email</Text>
            <TextInput
                placeholder='Enter your email'
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.boldTheText}>Password</Text>
            <TextInput
                placeholder='Enter your password'
                value={password}
                onChangeText={setpassword}

            />
            <Button title='Register' onPress={handleSubmitResponse}/>


        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    boldTheText: {
        fontWeight: 'bold',
        fontSize: 30,

    },
    boldTheTextForm: {
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'gray'


    }
})