import { View, Text, ScrollView, Image, Alert } from "react-native";
import { request_getFavList, request_unFav } from "../utils/request";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Dialog,
  Icon,
  Portal
} from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export default function FavsScreen() {
  const insets = useSafeAreaInsets();
  const [favList, setFavList] = useState<Array<{ [key: string]: any }>>([]);
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(0);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const getFavListRequest = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await request_getFavList({
        sub_id: "lovecatguy",
        limit: 100
      });
      setFavList(data);
      setLoading(false);
    } catch (error) {
      console.log("request_getFavList API error", error);
    }
  }, []);

  const unFavImgRequest = useCallback(async (id: number) => {
    try {
      const { data } = await request_unFav({ favourite_id: id });
      console.log("unfav img: ", data);
      if (data.message?.toUpperCase() === "SUCCESS") {
        getFavListRequest();
      }
    } catch (error) {
      console.log("unFavImgRequest API error", error);
    }
  }, []);

  useEffect(() => {
    getFavListRequest();
  }, [getFavListRequest]);

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: insets.top + 20,
          paddingRight: insets.right,
          paddingBottom: insets.bottom + 20,
          paddingLeft: insets.left
        }}
        className="mx-auto w-[95%]">
        {loading ? (
          <View className="h-[300] items-center justify-center">
            <ActivityIndicator />
          </View>
        ) : favList.length === 0 ? (
          <View className="h-[300] items-center justify-center">
            <Text>No Data</Text>
          </View>
        ) : (
          favList.map(item => {
            return (
              <View key={item.id} className="relative mb-[5]">
                <View
                  style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                  className="absolute bottom-0 left-0 z-[1] h-[60] w-full p-[10]">
                  <Text className="text-white">@{item.sub_id}</Text>
                  <Text className="text-white">
                    fav at{" "}
                    {dayjs(item.created_at)
                      .utc()
                      .local()
                      .format("YYYY-MM-DD HH:mm")}
                  </Text>

                  <Button
                    className="absolute right-0 top-[10]"
                    onPress={() => {
                      setId(item.id);
                      showDialog();
                    }}>
                    <Icon size={20} color="#ce2e2e" source={"heart"} />
                  </Button>
                </View>
                <Image
                  source={{ uri: item.image.url }}
                  className="h-[300] w-full"
                />
              </View>
            );
          })
        )}
      </View>

      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>
            <Icon source={"cat"} size={24} color="#ed6c02" /> Alert
          </Dialog.Title>
          <Dialog.Content>
            <Text>Delete this image ?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cancel</Button>
            <Button
              onPress={() => {
                hideDialog();
                unFavImgRequest(id);
              }}>
              Yes
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </ScrollView>
  );
}
