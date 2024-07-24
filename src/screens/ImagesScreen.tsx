import { View, ScrollView, Image, Text } from "react-native";
import {
  request_getBreedsList,
  request_getCategoriesList,
  request_getFilterImages
} from "../utils/request";
import { useCallback, useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import OptionMenu from "../components/OptionMenu";
import { ActivityIndicator, Button, Card } from "react-native-paper";
import ImgCard from "../components/ImgCard";

type ListType = Array<{ name: string; id: string }>;

export default function ImagesScreen() {
  const insets = useSafeAreaInsets();
  const [breedList, setBreedList] = useState<ListType>([
    { name: "None", id: "" }
  ]);
  const [cateList, setCateList] = useState<ListType>([
    { name: "None", id: "" }
  ]);
  const [params, setParams] = useState({
    breed_id: "",
    category_ids: "",
    mime_types: "jpg",
    limit: "6"
  });
  const [loading, setLoading] = useState(true);
  const [filterList, setFilterList] = useState<Array<{ [key: string]: any }>>(
    []
  );

  const getFilterImagesRequest = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await request_getFilterImages(params);
      setFilterList(data);
      setLoading(false);
    } catch (error) {
      console.log("request_getFilterImages API error", error);
    }
  }, [params]);

  useEffect(() => {
    getFilterImagesRequest();
  }, [getFilterImagesRequest]);

  useEffect(() => {
    const getBreedsListRequest = async () => {
      try {
        const { data } = await request_getBreedsList();
        let list = breedList;
        data.forEach((item: { [key: string]: any }) => {
          list.push({
            name: item.name,
            id: item.id
          });
        });
        setBreedList(list);
      } catch (error) {
        console.log("request_getBreedsList API error", error);
      }
    };

    const getCategoriesRequest = async () => {
      try {
        const { data } = await request_getCategoriesList();
        let list = cateList;
        data.forEach((item: { [key: string]: any }) => {
          list.push({
            name: item.name,
            id: item.id
          });
        });
        setCateList(list);
      } catch (error) {
        console.log("request_getCategoriesList API error", error);
      }
    };

    getBreedsListRequest();
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
        }}
        className="mx-auto w-[95%]">
        <View className="mb-[20] flex-row">
          <OptionMenu
            list={breedList}
            type="Breeds"
            onSelected={val => {
              setParams({
                ...params,
                breed_id: val
              });
            }}
            currentId={params.breed_id}
          />
          <OptionMenu
            list={cateList}
            type="Categories"
            onSelected={val => {
              setParams({
                ...params,
                category_ids: val
              });
            }}
            currentId={params.category_ids}
          />
        </View>

        <View className="mb-[30] flex-row">
          <OptionMenu
            list={[
              { name: "static", id: "jpg" },
              { name: "animated", id: "gif" }
            ]}
            type="Type"
            onSelected={val => {
              setParams({
                ...params,
                mime_types: val
              });
            }}
            currentId={params.mime_types}
          />
          <OptionMenu
            list={[
              { name: "6", id: "6" },
              { name: "10", id: "10" },
              { name: "18", id: "18" },
              { name: "24", id: "24" }
            ]}
            type="Limit"
            onSelected={val => {
              setParams({
                ...params,
                limit: val
              });
            }}
            currentId={params.limit}
          />
        </View>

        <View className="gap-[5]">
          {loading ? (
            <View className="h-[300] items-center justify-center">
              <ActivityIndicator />
            </View>
          ) : filterList.length === 0 ? (
            <View className="h-[300] items-center justify-center">
              <Text>No Data</Text>
            </View>
          ) : (
            filterList.map(item => {
              return (
                <View key={item.id} className="mb-[20]">
                  <ImgCard imgUrl={item.url} id={item.id} />
                </View>
              );
            })
          )}
        </View>

        <Button
          onPress={() => getFilterImagesRequest()}
          className="mt-[30]"
          mode="contained">
          Change
        </Button>
      </View>
    </ScrollView>
  );
}
