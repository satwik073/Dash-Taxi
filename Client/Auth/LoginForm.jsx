import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const LoginForm = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setpassword] = useState()
    return (

        <View>
            <Text style={[styles.boldTheText, { textAlign: 'center' }]}>Uber<Text style={{fontWeight: 'heavy', fontSize: 70, color:'#4B70F5'}}>.</Text></Text>
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