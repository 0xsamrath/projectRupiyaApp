import { Course } from "./courses";

const educate: Course = {
  name: "Basics",
  totalVideos: "3",
  description: {
    english: "Learn the building blocks of responsible spending and saving",
    hindi: "जिम्मेदार खर्च और बचत की मूल बातें जानें",
    kannada: "ಜವಾಬ್ದಾರಿಯುತ ಖರ್ಚು ಮತ್ತು ಉಳಿತಾಯದ ಮೂಲಭೂತ ಅಂಶಗಳನ್ನು ತಿಳಿಯಿರಿ",
    nepali: "जिम्मेवार खर्च र बचतको आधारभूत कुराहरू सिक्नुहोस्",
  },
  image: require("../assets/image1.png"),
  courseContent: [
    {
      title: "50/30/20",
      links: {
        english: "https://youtu.be/HQzoZfc3GwQ",
        hindi: "https://youtu.be/2j_NXIRDcDI",
        kannada: "https://youtu.be/uH2C75o6VYU",
        nepali: "https://youtu.be/yPJ-YIjfQ3s",
      },
    },
    {
      title: "Tips for saving money",
      links: {
        english: "https://youtu.be/Z1bU3dE7Rdc",
        hindi: "https://youtu.be/zzXIeHwTROs",
        kannada: "https://youtu.be/x2xmvCednC8",
        nepali: "https://youtu.be/HgPPIEmI350",
      },
    },
    {
      title: "Power of compounding",
      links: {
        english: "https://youtu.be/7zf7zob1Xdc",
        hindi: "https://youtu.be/cosjtcWyWlI",
        kannada: "https://youtu.be/qZiLFbA1ch8",
        nepali: "https://youtu.be/SX_x_onyya4",
      },
    },
  ],
};

export default educate;
