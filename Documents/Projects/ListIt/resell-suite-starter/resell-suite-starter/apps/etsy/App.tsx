
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [message, setMessage] = React.useState<string | null>(null);

  async function fetchTest() {
    try {
      const res = await fetch('http://localhost:4000/api/listings');
      const json = await res.json();
      setMessage(`Loaded: ${json.title} for ${json.price} ${json.currency}`);
    } catch (e) {
      setMessage('Could not reach backend. Is it running on :4000?');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>ResellSnap – etsy</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={fetchTest}
        >
          <Text style={styles.buttonText}>Start Listing</Text>
        </TouchableOpacity>
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    color: '#000000',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  message: {
    marginTop: 10,
    color: '#000000',
    textAlign: 'center',
  },
});
