import { View, Text, Alert } from "react-native";
import { Button, Card, Snackbar } from "react-native-paper";
import { request_fav, request_unFav } from "../utils/request";
import { useState } from "react";

type ImgCardProps = {
  imgUrl: string;
  id: string;
  favId?: number;
};

export default function ImgCard(props: ImgCardProps) {
  const [isFav, setIsFav] = useState(false);
  const [visible, setVisible] = useState(false);

  const onDismissSnackBar = () => setVisible(false);

  const favImgRequest = async () => {
    setVisible(true);

    try {
      const { data } = await request_fav({
        image_id: props.id,
        sub_id: "lovecatguy"
      });
      console.log("fav img: ", data);
      if (data.message?.toUpperCase() === "SUCCESS") {
        setIsFav(true);
      } else {
        Alert.alert("Please retry");
      }
    } catch (error) {
      Alert.alert(JSON.stringify(error));
    }
  };

  const unFavImgRequest = async () => {
    setVisible(false);

    try {
      const { data } = await request_unFav({
        favourite_id: Number(props.favId)
      });
      console.log("unfav img: ", data);
      if (data.message?.toUpperCase() === "SUCCESS") {
        setIsFav(false);
      } else {
        Alert.alert("Please retry");
      }
    } catch (error) {
      Alert.alert(JSON.stringify(error));
    }
  };

  return (
    <>
      <Card className="relative">
        <Card.Cover source={{ uri: props.imgUrl }} className="h-[400]" />

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
    </>
  );
}
