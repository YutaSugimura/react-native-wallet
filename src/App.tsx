/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import crypto from 'crypto';
import bip39 from 'react-native-bip39';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [mnemonic, setMnemonic] = useState<string>('');

  const generateMnemonic = async () => {
    const newMnemonic = await bip39.generateMnemonic(256);
    setMnemonic(newMnemonic);
  };

  useEffect(() => {
    generateMnemonic();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text style={styles.sectionDescription}>
          Random: {crypto.randomBytes(32).toString('base64')}
        </Text>

        <Text>Mnemonci: {mnemonic}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
