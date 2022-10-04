import { getItem } from "./asyncStorage";

const toTitleCase = (str: string) => {
  return str.replace(
    /\w\S*/g,
    (txt: string) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

const getCourses = async () => {
  const language = await getItem("language");
  const courses = await fetch(
    `https://api.projectrupiya.org/api/v1/courses/language/${toTitleCase(
      language || ""
    )}`
  );
  return courses;
};

const getCourse = async (id: string) => {
  const course = await fetch(
    `https://api.projectrupiya.org/api/v1/courses/${id}`
  );
  return course;
};

const getVideo = async (id: string) => {
  const video = await fetch(
    `https://api.projectrupiya.org/api/v1/videos/${id}`
  );
  return video;
};

export { getCourses, getCourse, getVideo, toTitleCase };
