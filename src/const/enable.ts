import { Course } from "./courses";

const enable: Course = {
  name: "Applying for schemes",
  totalVideos: "2",
  description: {
    english: "Understand how to apply for popular and important ways of saving money",
    hindi: "समझें कि पैसे बचाने के लोकप्रिय और महत्वपूर्ण तरीकों के लिए आवेदन कैसे करें",
    kannada: "ಹಣವನ್ನು ಉಳಿಸುವ ಜನಪ್ರಿಯ ಮತ್ತು ಪ್ರಮುಖ ಮಾರ್ಗಗಳಿಗಾಗಿ ಹೇಗೆ ಅರ್ಜಿ ಸಲ್ಲಿಸಬೇಕು ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ",
    nepali: "पैसा बचत गर्ने लोकप्रिय र महत्त्वपूर्ण तरिकाहरूको लागि कसरी आवेदन दिने भनेर बुझ्नुहोस्",
  },
  image: require("../assets/image3.png"),
  courseContent: [
    {
      title: "FD and RD",
      links: {
        english: "https://youtu.be/aJku7G2j9BU",
        hindi: "https://youtu.be/Dc9Or1J3X1k",
        kannada: "https://youtu.be/mJLjj39xcUE",
        nepali: "https://youtu.be/Dc9Or1J3X1k",
      },
    },
    {
      title: "PPF",
      links: {
        english: "https://youtu.be/1cdHfk78a5A?t=224",
        hindi: "https://youtu.be/RjSXMcfFOmk?t=191",
        kannada: "https://youtu.be/bDSPUYmrIak",
        nepali: "https://youtu.be/RjSXMcfFOmk?t=191",
      },
    },
  ],
};

export default enable;
