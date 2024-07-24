import { View, ScrollView } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { request_getBreedInfo, request_getBreedsList } from "../utils/request";
import { ActivityIndicator, Button, Card, Text } from "react-native-paper";
import RatingList from "../components/RatingList";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import OptionMenu from "../components/OptionMenu";

export default function BreedsScreen() {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState("");
  const [breedInfo, setBreedInfo] = useState<{ [key: string]: any }>({});
  const [id, setId] = useState("");
  const [breedList, setBreedList] = useState<
    Array<{ name: string; id: string }>
  >([{ name: "Abyssinian", id: "abys" }]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await request_getBreedsList();
        let list: Array<{ name: string; id: string }> = [];
        data.forEach((item: { [key: string]: any }) => {
          list.push({
            name: item.name,
            id: item.id
          });
        });
        setBreedList(list);
        setId(list[0].id);
      } catch (error) {
        console.log("request_getBreedsList API error", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await request_getBreedInfo({
          breed_id: id
        });
        if (data[0].breeds.length === 0) return;
        setImgUrl(data[0].url);
        setBreedInfo(data[0].breeds[0]);
        setLoading(false);
      } catch (error) {
        console.log("request_getBreedInfo API error", error);
      }
    })();
  }, [id]);

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: insets.top + 20,
          paddingRight: insets.right,
          paddingBottom: insets.bottom + 20,
          paddingLeft: insets.left
        }}
        className="items-center justify-center gap-[30]">
        <View className="w-[50%] flex-row">
          <OptionMenu
            list={breedList}
            type="Breeds"
            onSelected={selected => {
              setId(selected);
            }}
            currentId={id}
          />
        </View>

        <Card className="w-[90%]">
          {loading ? (
            <View className="h-[300] items-center justify-center">
              <ActivityIndicator />
            </View>
          ) : (
            <Card.Cover source={{ uri: imgUrl }} className="h-[300]" />
          )}

          <Card.Content className="gap-[10] py-[30]">
            <Text variant="headlineLarge" className="text-center font-bold">
              {breedInfo.name}
            </Text>

            <Text variant="titleMedium" className="text-center">
              Origin: {breedInfo.origin}
            </Text>

            <Text variant="bodyMedium">{breedInfo.description}</Text>
            <Text variant="bodyMedium" className="text-center">
              {breedInfo.temperament}
            </Text>
            <Text variant="bodyMedium" className="text-center">
              {breedInfo.weight?.metric} kg
            </Text>
            <Text variant="bodyMedium" className="text-center">
              {breedInfo.life_span} average life span
            </Text>

            <View className="h-[8] w-full bg-[#f2f2f2]"></View>

            <View>
              <RatingList breed_info={breedInfo} />
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}
