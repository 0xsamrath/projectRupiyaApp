import { getItem } from "../../lib/asyncStorage";
import React, { useEffect, useState } from "react";
import CourseUI from "../components/Course";

type RootStackParamList = {
  course: { data: Course };
};

//@ts-ignore
const CourseScreen = ({route, navigation}) => {
  const {course} =  route.params;

  useEffect(() => {
    navigation.setOptions({ title: course.title });
  }, []);

  return <CourseUI course={course} navigation={navigation} />;
};

export default CourseScreen;
