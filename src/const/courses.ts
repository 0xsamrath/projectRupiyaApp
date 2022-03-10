import { ImageSourcePropType } from "react-native";

export type Languages = "english" | "hindi" | "kannada" | "nepali";

export interface CourseContent {
  time: string;
  title: string;
  links: {
    english: string;
    hindi: string;
    kannada: string;
    nepali: string;
  };
}

export interface Course {
  name: string;
  totalVideos: string;
  description: string;
  image: ImageSourcePropType;
  courseContent: CourseContent[];
}

const links = {
  english: "https://youtu.be/aJku7G2j9BU",
  hindi: "https://youtu.be/HChBIRBiQFY",
  kannada: "https://youtu.be/QIws8m8CARs",
  nepali: "https://youtu.be/te30mJSgU38",
};

const courseContent: CourseContent[] = [
  {
    time: "5:35 mins",
    title: "video 1",
    links,
  },
  {
    time: "7:35 mins",
    title: "video 2",
    links,
  },
  {
    time: "10:35 mins",
    title: "video 3",
    links,
  },
  {
    time: "5:35 mins",
    title: "video 4",
    links,
  },
];

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const courses: Course[] = [
  {
    name: "Course 1",
    totalVideos: "25",
    image: require("../assets/image1.png"),
    courseContent,
    description,
  },
  {
    name: "Course 2",
    totalVideos: "20",
    image: require("../assets/image2.png"),
    courseContent,
    description,
  },
  {
    name: "Course 3",
    totalVideos: "10",
    image: require("../assets/image3.png"),
    courseContent,
    description,
  },
  {
    name: "Course 4",
    totalVideos: "7",
    image: require("../assets/image4.png"),
    courseContent,
    description,
  },
];

export default courses;
