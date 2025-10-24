
import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }}>
      <Text style={{
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 20
      }}>
        ResellSnap
      </Text>
      <Text style={{
        fontSize: 18,
        color: 'blue',
        textAlign: 'center'
      }}>
        Etsy Integration
      </Text>
      <Text style={{
        fontSize: 14,
        color: 'green',
        textAlign: 'center',
        marginTop: 20
      }}>
        App is working!
      </Text>
    </View>
  );
}
