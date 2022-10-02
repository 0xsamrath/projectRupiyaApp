import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import courses, { Course } from "../../const/courses";
import { getItem, setItem } from "../../lib/asyncStorage";
import Icon from "react-native-vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RootStackParamList = {};

const intros = {
  english: "Start from the basics and work your way up to applications. Best of luck on your journey!",
  hindi: "बुनियादी बातों से शुरू करें और अनुप्रयोगों तक अपना काम करें। आपकी यात्रा पर शुभकामनाएँ!",
  nepali: "आधारभूत कुराहरूबाट सुरु गर्नुहोस् र अनुप्रयोगहरूमा आफ्नो बाटो काम गर्नुहोस्। तपाईको यात्रामा शुभकामना!",
  kannada: "ಬೇಸಿಕ್ಸ್ನಿಂದ ಪ್ರಾರಂಭಿಸಿ ಮತ್ತು ಅಪ್ಲಿಕೇಶನ್ಗಳವರೆಗೆ ನಿಮ್ಮ ರೀತಿಯಲ್ಲಿ ಕೆಲಸ ಮಾಡಿ. ನಿಮ್ಮ ಪ್ರಯಾಣದಲ್ಲಿ ಶುಭವಾಗಲಿ!"
}

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
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
          Welcome to Project Rupiya
        </Text>
        <Text
          style={{
            fontSize: 15,
            color: "#000",
            marginBottom: 10,
          }}
        >
          Learn how to handle your{" "}
          <Text style={{ fontWeight: "bold", color: "#2f944f" }}>rupiya</Text>
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
      { label: "ಚ Kannada", value: "kannada" },
      { label: "🇳🇵 Nepali", value: "nepali" },
      { label: "🇮🇳 Hindi", value: "hindi" },
      { label: "🇬🇧 English", value: "english" },
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
          Choose a language
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
            marginTop: 180,
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

  const CourseCard = ({ course }: { course: Course }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        // @ts-ignore
        onPress={() => navigation.navigate("Course", { data: course })}
      >
        <ImageBackground
          source={course.image}
          style={{
            marginVertical: 10,
            marginHorizontal: 5,
            width: width - 50,
            height: 100,
            paddingTop: 25,
            paddingLeft: 20,
            borderRadius: 15,
            overflow: "hidden",
          }}
          imageStyle={{ opacity: 0.5 }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingBottom: 5,
            }}
          >
            {course.name}
          </Text>
          <Text style={{ color: "#000000", fontWeight: "600" }}>
            {course.totalVideos + " Videos"}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
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
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#000",
            marginBottom: 10,
          }}
        >
          Loading...
        </Text>
      </View>
    );
  }

  if (welcome === "") {
    return <WelcomeScreen />;
  } else if (language === "") {
    return <LanguageScreen />;
  } else {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingHorizontal: 20,
        }}
      >
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "#2f944f" }}>
            Welcome to Rupiya
          </Text>
          <Text style={{ fontSize: 18, color: "#61688B", marginTop: 15 }}>
            {/* @ts-ignore */}
            {intros[language]}
          </Text>
          <View style={{ marginBottom: 40 }} />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            key="_"
            showsVerticalScrollIndicator={false}
            data={courses}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <CourseCard course={item} />}
          />
        </View>
      </SafeAreaView>
    );
  }
};

export default HomeScreen;
