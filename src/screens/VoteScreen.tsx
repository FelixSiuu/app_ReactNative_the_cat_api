import { useQuery } from "@tanstack/react-query";
import { Text, View, Image, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { request_getImg } from "../utils/request";
import { Dimensions } from "react-native";
import { useState } from "react";
import { ActivityIndicator, Button } from "react-native-paper";

export default function VoteScreen() {
  const {
    isPending,
    error,
    data: img
  } = useQuery({
    queryKey: ["getImg"],
    queryFn: () => request_getImg()
  });
  if (isPending) return <ActivityIndicator />;
  if (error) return <Text>An error has occurred: + {error.message}</Text>;

  const insets = useSafeAreaInsets();
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const { id, url, width, height } = img.data[0];

  return (
    <ScrollView
      style={{
        paddingTop: insets.top + 20,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left
      }}>
      <View className="items-center justify-center gap-[20]">
        <View className="flex-row justify-center gap-[20]">
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

        <Image
          source={{ uri: url }}
          style={{ width: windowWidth * 0.9, height: windowHeight * 0.5 }}
        />

        <View>
          <Text>Fav</Text>
        </View>
      </View>
    </ScrollView>
  );
}
