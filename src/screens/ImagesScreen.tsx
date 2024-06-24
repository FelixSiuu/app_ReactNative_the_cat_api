import { View, Text, ScrollView } from "react-native";
import {
  request_getBreedsList,
  request_getCategoriesList
} from "../utils/request";
import { useCallback, useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import OptionMenu from "../components/OptionMenu";

export default function ImagesScreen() {
  const insets = useSafeAreaInsets();
  const [breedList, setBreedList] = useState<
    Array<{ name: string; id: string }>
  >([]);
  const [cateList, setCateList] = useState<Array<{ name: string; id: string }>>(
    []
  );

  useEffect(() => {
    const getBreedsListRequest = async () => {
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
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getBreedsListRequest();
  }, []);

  useEffect(() => {
    const getCategoriesRequest = async () => {
      try {
        const { data } = await request_getCategoriesList();
        let list: Array<{ name: string; id: string }> = [];
        data.forEach((item: { [key: string]: any }) => {
          list.push({
            name: item.name,
            id: item.id
          });
        });
        setCateList(list);
      } catch (error) {
        console.log(error);
      } finally {
      }
    };

    getCategoriesRequest();
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: insets.top + 20,
          paddingRight: insets.right,
          paddingBottom: insets.bottom + 20,
          paddingLeft: insets.left
        }}>
        <Text>ImagesScreen</Text>
      </View>

      <OptionMenu list={breedList} />
      <OptionMenu list={cateList} />
    </ScrollView>
  );
}
