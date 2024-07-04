import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FetchingData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://192.168.1.5:8000/v1/service/provider/owners");
        console.log(response.data.taxiOwners);
        setData(response.data.taxiOwners);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);

  return (
      <View>
      {data.map((user, index) => (
        <View key={index} style={styles.userContainer}>
          <Image source={{ uri: user.Avatar }} style={styles.avatar} />
              <Text>Welcome, Mr.{user.DriverName}</Text>
        </View>
      ))}
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
    backgroundColor:'gray',
    marginRight: 10,
  },
});
