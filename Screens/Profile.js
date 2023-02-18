import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Profile() {
  const numConnections = 10; //replace with actual number of connections
  return (
    <View style={styles.container}>
      {/* <Image style={styles.profileImage} source={require('./assets/profile-image.png')} /> */}
      <Text style={styles.profileName}>John Doe</Text>
      <Text style={styles.profileBio}>Frontend Developer</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoLabel}>Connections Made:</Text>
        <Text style={styles.infoValue}>{numConnections}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 10,
//   },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileBio: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  infoValue: {
    color: '#9370db',
  },
});
