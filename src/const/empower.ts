import { Course } from "./courses";

const empower: Course = {
  name: "Saving schemes",
  totalVideos: "2",
  description: {
    english: "Understand popular and important ways of saving money",
    hindi: "पैसे बचाने के लोकप्रिय और महत्वपूर्ण तरीकों को समझें",
    kannada: "ಹಣವನ್ನು ಉಳಿಸುವ ಜನಪ್ರಿಯ ಮತ್ತು ಪ್ರಮುಖ ಮಾರ್ಗಗಳನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
    nepali: "पैसा बचत गर्ने लोकप्रिय र महत्त्वपूर्ण तरिकाहरू बुझ्नुहोस्",
  },
  image: require("../assets/image4.png"),
  courseContent: [
    {
      title: "FD and RD",
      links: {
        english: "https://youtu.be/aJku7G2j9BU",
        hindi: "https://youtu.be/FSyuDjJWO8w",
        kannada: "https://youtu.be/QIws8m8CARs",
        nepali: "https://youtu.be/te30mJSgU38",
      },
    },
    {
      title: "PPF",
      links: {
        english: "https://youtu.be/1cdHfk78a5A",
        hindi: "https://youtu.be/RjSXMcfFOmk?t=1",
        kannada: "https://youtu.be/JlpBvHvolGo",
        nepali: "https://youtu.be/RjSXMcfFOmk?t=1",
      },
    },
  ],
};

export default empower;
