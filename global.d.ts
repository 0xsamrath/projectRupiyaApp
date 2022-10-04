declare type Languages =
  | "english"
  | "hindi"
  | "kannada"
  | "nepali"
  | "tamil"
  | "punjabi";

declare type LanguageDict = {
  english: string;
  hindi: string;
  kannada: string;
  nepali: string;
  tamil: string;
  punjabi: string;
};

declare interface CourseFields {
  Name: string;
  ID: number;
  Videos: string[];
  VideoNames: string[];
  Language: string[];
}

declare interface Course {
  id: string;
  fields: CourseFields;
}

declare interface VideoAttachment {
  id: string;
  url: string;
  filename: string;
  size: number;
  type: string;
}

declare interface VideoFields {
  ID: number;
  Language: string;
  Courses: string[];
  VideoAttachment: VideoAttachment[];
  Name: string;
  CourseID: number[];
}

declare interface VideoPR {
  id: string;
  fields: VideoFields;
}

declare type RootStackParamList = {
  Root: undefined;
};
