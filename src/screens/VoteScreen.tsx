import { Text, View, Image, ScrollView } from "react-native";
import { request_getImg } from "../utils/request";
import { Dimensions } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { ActivityIndicator, Button } from "react-native-paper";

export default function VoteScreen() {
  const [url, setUrl] = useState("");
  const [id, setId] = useState("");
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const getImgRequest = useCallback(async () => {
    try {
      const res = await request_getImg();
      const { url, id } = res.data[0];
      setUrl(url);
      setId(id);
    } catch (error) {}
  }, []);

  useEffect(() => {
    getImgRequest();
  }, [getImgRequest]);

  return (
    <ScrollView className="pt-[20]">
      <View className="items-center justify-center gap-[20]">
        <View
          style={{
            flexDirection: "row",
            gap: 20
          }}>
          <Button
            buttonColor="#2e7d32"
            textColor="#ffffff"
            icon="thumb-up"
            mode="contained-tonal"
            onPress={() => {}}>
            LOVE IT
          </Button>

          <Button
            buttonColor="#d32f2f"
            textColor="#ffffff"
            icon="thumb-down"
            mode="contained-tonal"
            onPress={() => {}}>
            NOPE IT
          </Button>
        </View>

        {!url ? null : (
          <Image
            source={{ uri: url }}
            style={{ width: windowWidth * 0.9, height: windowHeight * 0.5 }}
          />
        )}

        <View>
          <Text>Fav</Text>
        </View>
      </View>
    </ScrollView>
  );
}
