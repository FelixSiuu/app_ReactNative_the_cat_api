import { View, ScrollView } from "react-native";
import { BreedsScreenProps } from "../types/navigation";
import { useCallback, useEffect, useState } from "react";
import { request_getBreedInfo } from "../utils/request";
import { ActivityIndicator, Button, Card, Text } from "react-native-paper";
import RatingList from "../components/RatingList";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BreedsScreen({ navigation, route }: BreedsScreenProps) {
  const insets = useSafeAreaInsets();
  const [loading, setLoading] = useState(true);
  const [imgUrl, setImgUrl] = useState("");
  const [breedInfo, setBreedInfo] = useState<{ [key: string]: any }>({});

  const getBreedInfoRequest = useCallback(async () => {
    setLoading(true);
    setImgUrl("");

    try {
      const { data } = await request_getBreedInfo({
        breed_id: route.params.breed_id
      });
      // console.log("get breed info:", data[0]);
      setImgUrl(data[0].url);
      setBreedInfo(data[0].breeds[0]);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [route.params.breed_id]);

  useEffect(() => {
    getBreedInfoRequest();
  }, [getBreedInfoRequest]);

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
        <Button
          mode="elevated"
          icon={"arrow-right-drop-circle-outline"}
          contentStyle={{ flexDirection: "row-reverse" }}
          onPress={() =>
            navigation.navigate("BreedsList", {
              breed_id: route.params.breed_id
            })
          }>
          selected: {breedInfo.name}
        </Button>
        <Card className="w-[85%]">
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
