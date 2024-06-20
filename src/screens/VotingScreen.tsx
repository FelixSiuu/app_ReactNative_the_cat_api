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

export default function VotingScreen() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const insets = useSafeAreaInsets();
  const [imgUrl, setImgUrl] = useState("");
  const [imgId, setImgid] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFav, setIsFav] = useState(false);
  const [favId, setFavid] = useState(0);
  const [visible, setVisible] = useState(false);
  const onDismissSnackBar = () => setVisible(false);

  const getImgRequest = useCallback(async () => {
    setLoading(true);
    setIsFav(false);
    setFavid(0);
    setVisible(false);

    try {
      const { data } = await request_getImg();
      console.log("get img: ", data);
      setImgUrl(data[0].url);
      setImgid(data[0].id);
    } catch (error) {
      console.log(error);
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
    setVisible(true);

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
    setVisible(false);

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
    <ScrollView>
      <View
        style={{
          minHeight: windowHeight * 0.8,
          minWidth: windowWidth,
          paddingTop: insets.top,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
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

        <Card className="w-[85%]">
          {loading ? (
            <View className="h-[400] items-center justify-center">
              <ActivityIndicator />
            </View>
          ) : (
            <Card.Cover source={{ uri: imgUrl }} className="h-[400]" />
          )}

          <View className="py-[20]">
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
                }}>
                FAV IT
              </Button>
            )}
          </View>
        </Card>

        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: "Undo",
            onPress: () => {
              unFavImgRequest();
            }
          }}>
          You love this cat !
        </Snackbar>
      </View>
    </ScrollView>
  );
}
