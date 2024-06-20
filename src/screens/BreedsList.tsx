import { View, Text, ScrollView } from "react-native";
import { BreedsListScreenProps } from "../types/navigation";
import { Button } from "react-native-paper";
import { request_getBreedsList } from "../utils/request";
import { useCallback, useEffect, useState } from "react";
import clsx from "clsx";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BreedsList({
  navigation,
  route
}: BreedsListScreenProps) {
  const insets = useSafeAreaInsets();
  const [breedList, setBreedList] = useState<Array<{ [key: string]: any }>>([]);

  const getBreedsListRequest = useCallback(async () => {
    try {
      const { data } = await request_getBreedsList();
      setBreedList(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  }, []);

  useEffect(() => {
    getBreedsListRequest();
  }, [getBreedsListRequest]);

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: insets.top,
          paddingRight: insets.right,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left
        }}
        className="gap-[10]">
        {breedList.map((item, index) => {
          return (
            <Text
              key={index}
              className={clsx("px-[10] py-[5]", {
                "bg-[#3874cb] text-white": item.id === route.params.breed_id
              })}
              onPress={() =>
                navigation.navigate("Breeds", {
                  breed_id: item.id
                })
              }>
              {item.name}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}
