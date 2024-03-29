import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import { KeyboardProvider } from './containers/KeyboardProvider';
import { MarkdownView } from './containers/MarkdownView';

const App: React.FC = () => {

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardProvider>
        <Text style={styles.title}>Markdown Preview</Text>
        <MarkdownView />
      </KeyboardProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    alignSelf: 'center'
  }
});

export default App;
