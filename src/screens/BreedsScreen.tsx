import { View, ScrollView } from "react-native";
import { BreedsScreenProps } from "../types/navigation";
import { useCallback, useEffect, useState } from "react";
import { request_getBreedInfo } from "../utils/request";
import { ActivityIndicator, Button, Card, Text } from "react-native-paper";

export default function BreedsScreen({ navigation, route }: BreedsScreenProps) {
  const [loading, setLoading] = useState(true);
  const [breedInfo, setBreedInfo] = useState({ url: "", name: "" });

  const getBreedInfoRequest = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await request_getBreedInfo({
        breed_id: route.params.breed_id
      });
      const { url, name } = data[0];
      console.log(data[0]);

      setBreedInfo({
        url: url,
        name: name
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }, [route.params.breed_id]);

  useEffect(() => {
    getBreedInfoRequest();
  }, [getBreedInfoRequest]);

  return (
    <ScrollView className="pt-[20]">
      <View className="items-center justify-center gap-[30]">
        <Card className="w-[85%]">
          <Card.Title title={breedInfo.name} subtitle="Card Subtitle" />
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Card.Cover source={{ uri: breedInfo.url }} className={"px-[10]"} />
          )}

          <Card.Content>
            <Text variant="titleLarge">Card title</Text>
            <Text variant="bodyMedium">Card content</Text>
          </Card.Content>
        </Card>

        <Button
          onPress={() =>
            navigation.navigate("BreedsList", {
              breed_id: route.params.breed_id
            })
          }>
          choose
        </Button>
      </View>
    </ScrollView>
  );
}
