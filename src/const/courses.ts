import { ImageSourcePropType } from "react-native";
import educate from "./educate";
import empower from "./empower";
import enable from "./enable";

export type Languages = "english" | "hindi" | "kannada" | "nepali";

export type languageDict = {
  english: string;
  hindi: string;
  kannada: string;
  nepali: string;
};

export interface CourseContent {
  title: string;
  links: languageDict;
}

export interface Course {
  name: string;
  totalVideos: string;
  description: languageDict;
  image: ImageSourcePropType;
  courseContent: CourseContent[];
}

const courses: Course[] = [educate, empower, enable];

export default courses;
