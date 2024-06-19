import { View, Image, ScrollView } from "react-native";
import {
  request_getImg,
  request_vote,
  request_fav,
  request_unFav
} from "../utils/request";
import { Dimensions } from "react-native";
import { useState, useEffect, useCallback } from "react";
import { ActivityIndicator, Button } from "react-native-paper";
import Toast from "../components/Toast";

export default function VoteScreen() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const [url, setUrl] = useState("");
  const [imgId, setImgid] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFav, setIsFav] = useState(false);
  const [favId, setFavid] = useState(0);
  const [showToast, setShowToast] = useState(false);

  const getImgRequest = useCallback(async () => {
    setLoading(true);
    setIsFav(false);
    setFavid(0);

    try {
      const { data } = await request_getImg();
      console.log("get img: ", data);
      setUrl(data[0].url);
      setImgid(data[0].id);
    } catch (error) {
    } finally {
      setLoading(false);
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
    } catch (error) {}
  };

  const favImgRequest = async () => {
    try {
      const { data } = await request_fav({
        image_id: imgId,
        sub_id: "lovecatguy"
      });
      console.log("fav img: ", data);
      if (data.message?.toUpperCase() === "SUCCESS") {
        setFavid(data.id);
        setIsFav(true);
      }
    } catch (error) {}
  };

  const unFavImgRequest = async () => {
    try {
      const { data } = await request_unFav({
        favourite_id: favId
      });
      console.log("unfav img: ", data);
      if (data.message?.toUpperCase() === "SUCCESS") {
        setIsFav(false);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getImgRequest();
  }, [getImgRequest]);

  return (
    <ScrollView className="relative pt-[20]">
      <View className="items-center justify-between gap-[30]">
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

        <View className="items-center justify-center">
          {loading ? (
            <ActivityIndicator
              style={{
                paddingTop: windowHeight * 0.25,
                paddingBottom: windowHeight * 0.25
              }}
            />
          ) : (
            <Image
              source={{ uri: url }}
              style={{ width: windowWidth * 0.9, height: windowHeight * 0.5 }}
            />
          )}
        </View>

        <View>
          {isFav ? (
            <Button
              icon={"heart"}
              textColor="#ce2f2f"
              onPress={() => {
                unFavImgRequest();
              }}>
              FAV IT
            </Button>
          ) : (
            <Button
              icon={"heart-outline"}
              textColor="#222222"
              onPress={() => {
                favImgRequest();
                setShowToast(true);
                setTimeout(() => {
                  setShowToast(false);
                }, 2000);
              }}>
              FAV IT
            </Button>
          )}
        </View>

        <Toast show={showToast} />
      </View>
    </ScrollView>
  );
}
