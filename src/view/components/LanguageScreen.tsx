import React, { useState } from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { setItem } from "../../lib/asyncStorage";
import Icon from "react-native-vector-icons/MaterialIcons";

const LanguageScreen = ({
  setLanguage,
}: {
  setLanguage: (language: string) => void;
}) => {
  const ScreenHeight = Dimensions.get("window").height;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [items, setItems] = useState([
    { label: "ಕನ್ನಡ - Kannada", value: "kannada" },
    { label: "नेपाली - Nepali", value: "nepali" },
    { label: "हिन्दी- Hindi", value: "hindi" },
    // same thing for punjabi and tamil
    { label: "ਪੰਜਾਬੀ - Punjabi", value: "punjabi" },
    { label: "பஞ்சாபி - Tamil", value: "tamil" },
    { label: "English - अंग्रेज़ी", value: "english" },
  ]);

  return (
    <View
      style={{
        backgroundColor: "white",
        height: ScreenHeight,
        paddingHorizontal: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: "#000",
          marginBottom: 20,
        }}
      >
        अपनी भाषा चुनिए{"\n"}
        ನಿಮ್ಮ ಭಾಷೆಯನ್ನು ಆಯ್ಕೆ ಮಾಡಿ
      </Text>
      <Text
        style={{
          color: "red",
        }}
      >
        {error}
      </Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        placeholder="Select a language"
        // @ts-ignore
        setValue={setValue}
        setItems={setItems}
      />
      <View
        style={{
          marginTop: 200,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableHighlight
          onPress={async () => {
            if (!value) {
              setError("Please select a language");
            } else {
              await setItem("language", value);
              setLanguage(value);
            }
          }}
        >
          <Icon
            name="arrow-forward"
            style={{ fontSize: 35, color: "#61688B" }}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default LanguageScreen;
