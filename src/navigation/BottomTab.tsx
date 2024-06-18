import { BottomNavigation, Button } from "react-native-paper";
import { useState } from "react";
import VoteScreen from "../screens/VoteScreen";
import BreedsScreen from "../screens/BreedsScreen";
import ImagesScreen from "../screens/ImagesScreen";
import FavScreen from "../screens/FavScreen";

export default function BottomTab() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "VoteScreen",
      title: "VOTE",
      focusedIcon: "thumbs-up-down",
      unfocusedIcon: "thumbs-up-down-outline"
    },
    {
      key: "BreedsScreen",
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
    BreedsScreen: BreedsScreen,
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
