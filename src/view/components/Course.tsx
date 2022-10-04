// get video ID from course prop and fetch video data, render a react native component and video player
// import react native components
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, Button } from "react-native";

const CourseUI = ({ course, navigation }:{course:Course, navigation:any}) => {
  // define state for video data
  const [videos, setVideos] = useState<VideoPR[]>();
  // get video ID from course prop
  const videoIds = course.fields.Videos;

  // fetch video data
  useEffect(() => {
    const videos: VideoPR[] = [];
    const fetchVideo = async (videoId: string) => {
      const response = await fetch(
        `https://api.projectrupiya.org/api/v1/courses/${videoId}`
      );
      const video = await response.json();
      videos.push(video);
    };
    videoIds.forEach((videoId) => {
      fetchVideo(videoId);
    });

    setVideos(videos);
  }, [videos]);

  // render a react native component and video player
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#fff",
        padding: 10,
        margin: 10,
      }}
    >
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
<Button title="Go to Home" onPress={() => navigation.navigate("Home")} />

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#000",
              margin: 10,
            }}
          >
            {course.fields.Name}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
              color: "#000",
            }}
          >
            {course.fields.Videos.length} lessons
          </Text>
        </View>
        {/* {videos && */}
        {/*   videos.map((video: VideoPR) => ( */}
        {/*     <View */}
        {/*       style={{ */}
        {/*         flexDirection: "row", */}
        {/*         alignItems: "center", */}
        {/*         justifyContent: "space-between", */}
        {/*         padding: 10, */}
        {/*         borderBottomWidth: 1, */}
        {/*       }} */}
        {/*     > */}
        {/*       <Text */}
        {/*         style={{ */}
        {/*           fontSize: 12, */}
        {/*           fontWeight: "bold", */}
        {/*           color: "#000", */}
        {/*         }} */}
        {/*       > */}
        {/*         {video.fields.Name} */}
        {/*       </Text> */}
        {/*       <TouchableOpacity style={{}} onPress={() => }> */}
        {/*         <Image */}
        {/*           source={require("../../assets/play.png")} */}
        {/*           style={{ width: 30, height: 30 }} */}
        {/*         /> */}
        {/*       </TouchableOpacity> */}
        {/*     </View> */}
        {/*   ))} */}
        {videoIds.map((videoId) => (
          <Text key={videoId}>{videoId}</Text>
    ))}
      </ScrollView>
    </View>
  );
};

export default CourseUI;
