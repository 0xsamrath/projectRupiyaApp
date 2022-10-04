import React, { useState, useEffect } from "react";
import { getItem } from "../../lib/asyncStorage";
import { View, Text, FlatList, TouchableOpacity } from "react-native";

const CourseList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<Course[]>([]);
  const [language, setLanguage] = useState<string | undefined>(undefined);

    const title: LanguageDict = {
      english: "Project Rupiya",
      hindi: "परियोजना रुपिया",
      kannada: "ಯೋಜನೆ ರೂಪಿಯಾ",
      nepali: "परियोजना रुपिया",
      tamil: "திட்டம் ரூபியா",
      punjabi: "ਪ੍ਰੋਜੈਕਟ ਰੁਪਿਆ",
    };

  useEffect(() => {
    (async () => {
      // conver to title case
      const lang = (await getItem("language")) || "";
      setLanguage(lang.substring(0, 1).toUpperCase() + lang.substring(1));
    })();
  }, [language]);

  useEffect(() => {
    // get lanuage
    if (language) {
      fetch(`https://api.projectrupiya.org/api/v1/courses/language/${language}`)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(language ? false : true));
    }
  }, [language]);

  return (
    <View
      style={{
        flex: 1,
        padding: 24,
      }}
    >
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }) => id}
          renderItem={({item: course}) => (
            <TouchableOpacity
              style={{
                backgroundColor: "#fff",
                padding: 20,
                borderRadius: 8,
                marginBottom: 16,
                borderWidth: 1,
              }}
              onPress={() => {
              }
          }
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                {course.fields.Name}
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default CourseList;
