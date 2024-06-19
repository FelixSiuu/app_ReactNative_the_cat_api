import { BottomNavigation, Button } from "react-native-paper";
import { useState } from "react";
import VoteScreen from "../screens/VoteScreen";
import BreedsStack from "./BreedsStack";
import ImagesScreen from "../screens/ImagesScreen";
import FavScreen from "../screens/FavScreen";

export default function BottomTab() {
  const [index, setIndex] = useState(1);
  const [routes] = useState([
    {
      key: "VoteScreen",
      title: "VOTE",
      focusedIcon: "thumbs-up-down",
      unfocusedIcon: "thumbs-up-down-outline"
    },
    {
      key: "BreedsStack",
      title: "BREEDS",
      focusedIcon: "format-list-bulleted-square",
      unfocusedIcon: "format-list-checkbox"
    },
    {
      key: "ImagesScreen",
      title: "IMAGES",
      focusedIcon: "image-multiple",
      unfocusedIcon: "image-multiple-outline"
    },
    {
      key: "FavScreen",
      title: "FAV",
      focusedIcon: "heart-multiple",
      unfocusedIcon: "heart-multiple-outline"
    }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    VoteScreen: VoteScreen,
    BreedsStack: BreedsStack,
    ImagesScreen: ImagesScreen,
    FavScreen: FavScreen
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
