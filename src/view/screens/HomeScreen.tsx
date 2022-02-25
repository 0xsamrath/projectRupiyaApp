import AsyncStorage from "@react-native-async-storage/async-storage";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Button,
  Dimensions,
  FlatList,
  ImageBackground,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";
import courses, {Course} from "../../const/courses";

type RootStackParamList = {};

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList>) => {
  const [width] = useState(Dimensions.get("window").width);
  const [welcome, setWelcome] = useState(false);
  const [language, setLanguage] = useState(false);

  const getItem = (key: string) => {
    const value = AsyncStorage.getItem(`@internnova:${key}`).then((value) => {
      console.log(value);
      return value;
    });
    return value;
  };

  const setItem = (key: string, value: string) => {
    AsyncStorage.setItem(`@internnova:${key}`, value).then(() => {
      console.log("saved");
    });
  };

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
        <Button title="Get Started" onPress={() => setWelcome(true)} />
      </View>
    );
  };

  const LanguageScreen = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string | null>(null);
    const [error, setError] = useState("");
    const [items, setItems] = useState([
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
    ]);

    return (
      <>
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
          // @ts-ignore
          setValue={setValue}
          setItems={setItems}
        />
        <Button
          title="continue"
          onPress={() => {
            if (!value) {
              setError("Please select a language");
            } else {
              setItem("language", value);
              setLanguage(true);
            }
          }}
        />
      </>
    );
  };

  const CourseCard = ({ course }: {course: Course}) => {
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
            {course.totalCourse + " Courses"}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  if (!getItem("welcome_done") || !welcome) {
    return <WelcomeScreen />;
  }

  if (!getItem("language") || !language) {
    return <LanguageScreen />;
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: 20,
      }}
    >
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Hello 👋</Text>
        <Text style={{ fontSize: 22, color: "#61688B", marginTop: 15 }}>
          Find a course you want to learn
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
};

export default HomeScreen;
