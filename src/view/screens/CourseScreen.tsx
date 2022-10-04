import { getItem } from "../../lib/asyncStorage";
import React, { useEffect, useState } from "react";
import CourseUI from "../components/Course";

type RootStackParamList = {
  course: { data: Course };
};

const CourseScreen = () => {
  const course = {};

  useEffect(() => {
  }, []);

  return <CourseUI course={course}  />;
};

export default CourseScreen;
