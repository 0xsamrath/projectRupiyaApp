import {
  ScrollView,
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import * as Linking from "expo-linking";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getItem } from "../../lib/asyncStorage";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Course, CourseContent, Languages } from "../../const/courses";
import React from "react";

type RootStackParamList = {
  course: Course;
};

const CourseScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<RootStackParamList, "course">) => {
  const course = route.params;

  navigation.setOptions({ title: course.name });

  const CourseContentList = ({
    content,
    index,
  }: {
    content: CourseContent;
    index: number;
  }) => {
    return (
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold", color: "#E4E7F4" }}>
          {"0" + (index + 1)}
        </Text>
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          <Text
            style={{
              fontSize: 15,
              color: "#A0A5BD",
              fontWeight: "500",
              marginBottom: 5,
            }}
          >
            {content.time}
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {content.title}
          </Text>
        </View>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: "#49CC96",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableHighlight
            onPress={async () => {
              Linking.openURL(
                content.links[(await getItem("language")) as Languages]
              );
            }}
          >
            <Icon name="play-arrow" style={{ fontSize: 25, color: "#fff" }} />
          </TouchableHighlight>
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
        <ImageBackground
          source={course.image}
          style={{
            height: 400,
            paddingTop: 40,
            paddingRight: 20,
            paddingLeft: 20,
          }}
          imageStyle={{
            opacity: 0.5,
          }}
        >
          <View
            style={{
              width: 100,
              marginBottom: 100,
            }}
          />
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              top: -35,
            }}
          >
            {course.name}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "#000000", fontWeight: "bold" }}>
              {course.description}
            </Text>
          </View>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            marginTop: -35,
            backgroundColor: "#fff",
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            height: "100%",
          }}
        >
          <Text
            style={{
              marginTop: 40,
              marginBottom: 20,
              marginHorizontal: 20,
              fontSize: 21,
              fontWeight: "bold",
            }}
          >
            Course Content
          </Text>

          <FlatList
            showsVerticalScrollIndicator={false}
            data={course.courseContent}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({
              item,
              index,
            }: {
              item: CourseContent;
              index: number;
            }) => (
              <View>
                <CourseContentList index={index} content={item} />
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CourseScreen;
