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
import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme } from 'react-native';
import { ethers } from 'ethers';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [mnemonic, setMnemonic] = useState<string>('none');

  const getMnemonic = () => {
    const wallet = ethers.Wallet.createRandom();
    const newMnemonic = wallet.mnemonic;
    setMnemonic(newMnemonic.phrase);

    const hdnode = ethers.utils.HDNode.fromMnemonic(newMnemonic.phrase);
    const nodeA = hdnode.derivePath("m/44'/60'/0'/0");
    const nodeB = hdnode.derivePath("m/44'/60'/0'/1");
    console.log('1', nodeA.address);
    console.log('2', nodeB.address);
  };

  useEffect(() => {
    getMnemonic();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Mnemonci: {mnemonic}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
