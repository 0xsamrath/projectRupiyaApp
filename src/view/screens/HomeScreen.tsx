import React, { useState } from "react";
import { useEffect } from "react";
import {
  Dimensions,
  View,
  Image,
} from "react-native";
import { getItem } from "../../lib/asyncStorage";
import CourseList from "../components/CourseList";
import LanguageScreen from "../components/LanguageScreen";
import WelcomeScreen from "../components/WelcomeScreen";

// @ts-ignore
const HomeScreen = ({navigation}) => {
  const [width] = useState(Dimensions.get("window").width);
  const [welcome, setWelcome] = useState<boolean | undefined>(undefined);
  const [language, setLanguage] = useState<Languages | string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      const welcome = await getItem("welcome");
      const language = await getItem("language");
      setWelcome(welcome ? true : false);
      setLanguage(language as Languages || "");
    })();
  }, [language, welcome]);


  if (welcome === undefined || language === undefined) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          style={{
            width: width * 0.5,
            height: width * 0.5,
            resizeMode: "contain",
            marginBottom: 20,
          }}
        />
      </View>
    );
  }

  if (language === "") {
    return <LanguageScreen setLanguage={setLanguage}/>;
  } else if (welcome === false) {
    return <WelcomeScreen 
      setWelcome={setWelcome}
      language={language as Languages}
      />;
  } else {
    // return <Text>Home screen</Text>;
    return <CourseList navigation={navigation} />
  }
};

export default HomeScreen;
