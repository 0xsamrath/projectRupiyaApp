import React, { useState } from "react";
import { useEffect } from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { getItem, setItem } from "../../lib/asyncStorage";
import Icon from "react-native-vector-icons/MaterialIcons";
import CourseList from "../components/CourseList";

// const intros = {
//   english: "Start from the basics and work your way up to applications. Best of luck on your journey!",
//   hindi: "बुनियादी बातों से शुरू करें और अनुप्रयोगों तक अपना काम करें। आपकी यात्रा पर शुभकामनाएँ!",
//   nepali: "आधारभूत कुराहरूबाट सुरु गर्नुहोस् र अनुप्रयोगहरूमा आफ्नो बाटो काम गर्नुहोस्। तपाईको यात्रामा शुभकामना!",
//   kannada: "ಬೇಸಿಕ್ಸ್ನಿಂದ ಪ್ರಾರಂಭಿಸಿ ಮತ್ತು ಅಪ್ಲಿಕೇಶನ್ಗಳವರೆಗೆ ನಿಮ್ಮ ರೀತಿಯಲ್ಲಿ ಕೆಲಸ ಮಾಡಿ. ನಿಮ್ಮ ಪ್ರಯಾಣದಲ್ಲಿ ಶುಭವಾಗಲಿ!"
// }

const HomeScreen = () => {
  const ScreenHeight = Dimensions.get("window").height;
  const [width] = useState(Dimensions.get("window").width);
  const [welcome, setWelcome] = useState<string | undefined>(undefined);
  const [language, setLanguage] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async () => {
      setWelcome((await getItem("welcome")) || "");
      setLanguage((await getItem("language")) || "");
    })();
  }, [language, welcome]);

  const WelcomeScreen = () => {
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
            setWelcome("done");
            await setItem("welcome", "done");
          }}
        >
          <Icon
            name="arrow-forward"
            style={{ fontSize: 35, color: "#61688B" }}
          />
        </TouchableHighlight>
      </View>
    );
  };

  const LanguageScreen = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string | null>(null);
    const [error, setError] = useState("");
    const [items, setItems] = useState([
      { label: "ಕನ್ನಡ - Kannada", value: "kannada" },
      { label: "नेपाली - Nepali", value: "nepali" },
      { label: "हिन्दी- Hindi", value: "hindi" },
      // same thing for punjabi and tamil
      { label: "ਪੰਜਾਬੀ - Punjabi", value: "punjabi" },
      { label: "பஞ்சாபி - Tamil", value: "tamil" },
      { label: "English - अंग्रेज़ी", value: "english" },
    ]);

    return (
      <View
        style={{
          backgroundColor: "white",
          height: ScreenHeight,
          paddingHorizontal: 10,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#000",
            marginBottom: 20,
          }}
        >
          अपनी भाषा चुनिए{"\n"}
          ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ
        </Text>
        <Text
          style={{
            color: "red",
          }}
        >
          {error}
        </Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          placeholder="Select a language"
          // @ts-ignore
          setValue={setValue}
          setItems={setItems}
        />
        <View
          style={{
            marginTop: 200,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableHighlight
            onPress={async () => {
              if (!value) {
                setError("Please select a language");
              } else {
                await setItem("language", value);
                setLanguage(value);
              }
            }}
          >
            <Icon
              name="arrow-forward"
              style={{ fontSize: 35, color: "#61688B" }}
            />
          </TouchableHighlight>
        </View>
      </View>
    );
  };
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
    return <LanguageScreen />;
  } else if (welcome === "") {
    return <WelcomeScreen />;
  } else {
    // return <Text>Home screen</Text>;
    return <CourseList />
  }
};

export default HomeScreen;
