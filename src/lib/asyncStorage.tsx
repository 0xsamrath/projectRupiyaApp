import AsyncStorage from "@react-native-async-storage/async-storage";

export const getItem = async (key: string) => {
  return await AsyncStorage.getItem(`@internnova:${key}`);
};

export const setItem = async (key: string, value: string) => {
  await AsyncStorage.setItem(`@internnova:${key}`, value).then(() => {
    console.log("saved");
  });
};
