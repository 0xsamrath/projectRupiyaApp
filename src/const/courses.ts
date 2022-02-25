import { ImageSourcePropType } from "react-native";

export interface CourseContent {
  time: string;
  title: string;
  link: string;
}

export interface Course {
  name: string;
  totalCourse: string;
  description: string;
  image: ImageSourcePropType;
  courseContent: CourseContent[];
}

const courseContent: CourseContent[] = [
  {
    time: "5:35 mins",
    title: "Welcome to the Course",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    time: "7:35 mins",
    title: "Design Thinking - Intro",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    time: "10:35 mins",
    title: "Design Thinking Process",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    time: "5:35 mins",
    title: "Customer Perspective",
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const description =
  "DUMMY DESCRIPTION DUMMY DESCRIPTION DUMMY DESCRIPTION DUMMY DESCRIPTION DUMMY DESCRIPTION ";

const courses: Course[] = [
  {
    name: "UX Design",
    totalCourse: "25",
    image: require("../assets/image1.png"),
    courseContent,
    description,
  },
  {
    name: "Marketing",
    totalCourse: "20",
    image: require("../assets/image2.png"),
    courseContent,
    description,
  },
  {
    name: "Photography",
    totalCourse: "10",
    image: require("../assets/image3.png"),
    courseContent,
    description,
  },
  {
    name: "Business Photography",
    totalCourse: "7",
    image: require("../assets/image4.png"),
    courseContent,
    description,
  },
];

export default courses;
