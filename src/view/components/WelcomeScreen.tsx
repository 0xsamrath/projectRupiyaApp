import React, { useState } from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { setItem } from "../../lib/asyncStorage";
import Icon from "react-native-vector-icons/MaterialIcons";

const WelcomeScreen = ({
  language,
  setWelcome,
}: {
  language: Languages;
  setWelcome: (welcome: boolean) => void;
}) => {
  const [width] = useState(Dimensions.get("window").width);
  const title: LanguageDict = {
    english: "Welcome to Project Rupiya!",
    hindi: "प्रोजेक्ट रुपिया में आपका स्वागत है!",
    kannada: "ಪ್ರಾಜೆಕ್ಟ್ ರೂಪಿಯಾಗೆ ಸುಸ್ವಾಗತ!",
    nepali: "प्रोजेक्ट रुपिया मा स्वागत छ!",
    tamil: "புராஜெக்ட் ரூபியா க்கு வரவேற்கிறோம்!",
    punjabi: "ਪ੍ਰੋਜੈਕਟ ਰੁਪਿਆ ਵਿੱਚ ਜੀ ਆਇਆਂ ਨੂੰ!",
  };

  const content: LanguageDict = {
    english: "Learn how to handle your money",
    hindi: "अपने पैसे को संभालना सीखें",
    kannada: "ನಿಮ್ಮ ಹಣವನ್ನು ಹೇಗೆ ನಿರ್ವಹಿಸಬೇಕೆಂದು ತಿಳಿಯಿರಿ",
    nepali: "आफ्नो पैसा कसरी ह्यान्डल गर्ने जान्नुहोस्",
    tamil: "உங்கள் பணத்தை எவ்வாறு கையாள்வது என்பதை அறிக",
    punjabi: "ਆਪਣੇ ਪੈਸੇ ਨੂੰ ਸੰਭਾਲਣਾ ਸਿੱਖੋ",
  };

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
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#000",
          marginBottom: 10,
        }}
      >
        {title[(language || "") as Languages]}
      </Text>
      <Text
        style={{
          fontSize: 15,
          color: "#2f944f",
          marginBottom: 10,
        }}
      >
        {content[(language || "") as Languages]}
      </Text>

      <TouchableHighlight
        onPress={async () => {
          setWelcome(true);
          await setItem("welcome", true);
        }}
      >
        <Icon name="arrow-forward" style={{ fontSize: 35, color: "#61688B" }} />
      </TouchableHighlight>
    </View>
  );
};

export default WelcomeScreen;
