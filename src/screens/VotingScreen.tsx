import { View, Image, ScrollView } from "react-native";
import {
  request_getImg,
  request_vote,
  request_fav,
  request_unFav
} from "../utils/request";
import { Dimensions } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { ActivityIndicator, Button, Snackbar, Card } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ImgCard from "../components/ImgCard";

export default function VotingScreen() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const insets = useSafeAreaInsets();
  const [imgUrl, setImgUrl] = useState("");
  const [imgId, setImgid] = useState("");
  const [loading, setLoading] = useState(true);

  const getImgRequest = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await request_getImg();
      console.log("get img: ", data);
      setImgUrl(data[0].url);
      setImgid(data[0].id);
      setLoading(false);
    } catch (error) {
      console.log("request_getImg API error", error);
    }
  }, []);

  const voteImgRequest = async (value: number) => {
    try {
      const { data } = await request_vote({
        image_id: imgId,
        sub_id: "lovecatguy",
        value: value
      });
      console.log("vote img: ", data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImgRequest();
  }, [getImgRequest]);

  return (
    <ScrollView>
      <View
        style={{
          minHeight: windowHeight * 0.8,
          paddingTop: insets.top + 20,
          paddingRight: insets.right,
          paddingBottom: insets.bottom + 20,
          paddingLeft: insets.left
        }}
        className="flex-1 items-center justify-center gap-[30]">
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20
          }}>
          <Button
            buttonColor="#d32f2f"
            textColor="#ffffff"
            icon="thumb-down"
            mode="contained-tonal"
            contentStyle={{ flexDirection: "row-reverse" }}
            onPress={() => {
              voteImgRequest(-1);
              getImgRequest();
            }}>
            NOPE IT
          </Button>

          <Button
            buttonColor="#2e7d32"
            textColor="#ffffff"
            icon="thumb-up"
            mode="contained-tonal"
            onPress={() => {
              voteImgRequest(1);
              getImgRequest();
            }}>
            LOVE IT
          </Button>
        </View>

        <View className="w-[90%]">
          {loading ? (
            <View className="h-[400] items-center justify-center">
              <ActivityIndicator />
            </View>
          ) : (
            <ImgCard imgUrl={imgUrl} id={imgId} />
          )}
        </View>
      </View>
    </ScrollView>
  );
}
