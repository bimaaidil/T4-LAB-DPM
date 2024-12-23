import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TeamScore = ({ teamName, score, onScoreChange }) => (
  <View style={styles.container}>
    <Text style={styles.teamName}>{teamName}</Text>
    <Text style={styles.score}>{score}</Text>
    <View style={styles.buttons}>
      <TouchableOpacity
        style={[styles.button, styles.incrementButton]}
        onPress={() => onScoreChange(1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.decrementButton]}
        onPress={() => onScoreChange(-1)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#16213e',
    margin: 10,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f5f5f5',
    marginBottom: 10,
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#e94560',
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  incrementButton: {
    backgroundColor: '#22c55e',
  },
  decrementButton: {
    backgroundColor: '#ef4444',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default TeamScore;
