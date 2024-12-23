import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import TeamScore from './src/components/TeamScore';

export default function App() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const checkWinner = (teamName) => {
    if (teamName === 'A' && teamAScore + 1 === 10) {
      Alert.alert('Ini Adalah Team Sang Juara!', 'Team A Memenangkan Match Ini!', [{ text: 'OK' }]);
    } else if (teamName === 'B' && teamBScore + 1 === 10) {
      Alert.alert('Ini Adalah Team Sang Juara!', 'Team B Memenangkan Match Ini!', [{ text: 'OK' }]);
    }
  };

  const handleScoreChange = (team, change) => {
    if (team === 'A') {
      const newScore = Math.max(0, teamAScore + change);
      if (newScore === 10) checkWinner('A');
      setTeamAScore(newScore);
    } else if (team === 'B') {
      const newScore = Math.max(0, teamBScore + change);
      if (newScore === 10) checkWinner('B');
      setTeamBScore(newScore);
    }
  };

  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Futsal Score</Text>
      <View style={styles.scoreContainer}>
        <TeamScore
          teamName="Team A"
          score={teamAScore}
          onScoreChange={(change) => handleScoreChange('A', change)}
        />
        <TeamScore
          teamName="Team B"
          score={teamBScore}
          onScoreChange={(change) => handleScoreChange('B', change)}
        />
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Scores</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1a1a2e',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#f5f5f5',
    marginBottom: 20,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: '#e94560',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
