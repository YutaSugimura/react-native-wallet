export const generateMnemonic = async () => {
  const bip39 = require('react-native-bip39');
  const newMnemonic = await bip39.generateMnemonic(256);

  return newMnemonic;
};
