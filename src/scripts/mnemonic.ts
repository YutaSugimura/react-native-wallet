export const generateMnemonic = async (): Promise<string> => {
  const bip39 = require('react-native-bip39');

  try {
    const newMnemonic: string = await bip39.generateMnemonic(256);
    if (bip39.validateMnemonic(newMnemonic)) {
      return newMnemonic;
    }

    return await generateMnemonic();
  } catch {
    return await generateMnemonic();
  }
};

export const validateMnemonic = (mnemonic: string): boolean => {
  const bip39 = require('react-native-bip39');

  return bip39.validateMnemonic(mnemonic);
};
