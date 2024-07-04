import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchingData = () => {
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://dash-backend-glqb.onrender.com/v1/service/provider/owners");
        console.log(response.data.taxiOwners);
        setData(response.data.taxiOwners);
      } catch (error) {
        console.error(error);
      }
    };
    const getUserData = async () => {
      try {

        const response = await axios.get("https://dash-backend-glqb.onrender.com/v1/user/profiles/all")
        console.log(response.data.users)
        setUserData(response.data.users)
        
      } catch (error) {
        console.log("Error fetching data")
      }
    }
    getData();
    getUserData();
  }, []);

  return (
    <View>
    <View>
      <Text>This isTaxiOwner data which is coming from live server</Text>
      {data.map((user, index) => (
        <View key={index} style={styles.userContainer}>
          <Image source={{ uri: user.Avatar }} style={styles.avatar} />
          <Text>Welcome, Mr.{user.DriverName}</Text>
        </View>
      ))}
      </View>
    <View>
      <Text style={{fontSize:25 , fontWeight:'bold'}}>This is User data which is coming from live server</Text>
      {userData.map((user, index) => (
        <View key={index} style={styles.userContainer}>
          <Image source={{ uri: user.Avatar }} style={styles.avatar} />
          <Text>Welcome, Mr.{user.name}</Text>
        </View>
      ))}
      </View>
      </View>
  );
};

export default FetchingData;

const styles = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'gray',
    marginRight: 10,
  },
});
