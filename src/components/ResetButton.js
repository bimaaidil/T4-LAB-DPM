import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const ResetButton = ({ onReset }) => {
  return (
    <View style={styles.container}>
      <Button title="Reset" onPress={onReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});

export default ResetButton;
