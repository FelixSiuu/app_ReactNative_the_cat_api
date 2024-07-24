import { BottomNavigation, Button } from "react-native-paper";
import { useState } from "react";
import VotingScreen from "../screens/VotingScreen";
import BreedsScreen from "../screens/BreedsScreen";
import ImagesScreen from "../screens/ImagesScreen";
import FavsScreen from "../screens/FavsScreen";

export default function BottomTab() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "VotingScreen",
      title: "Voting",
      focusedIcon: "thumbs-up-down",
      unfocusedIcon: "thumbs-up-down-outline"
    },
    {
      key: "BreedsScreen",
      title: "Breeds",
      focusedIcon: "format-list-bulleted-square",
      unfocusedIcon: "format-list-checkbox"
    },
    {
      key: "ImagesScreen",
      title: "Images",
      focusedIcon: "image-multiple",
      unfocusedIcon: "image-multiple-outline"
    },
    {
      key: "FavsScreen",
      title: "Favs",
      focusedIcon: "heart-multiple",
      unfocusedIcon: "heart-multiple-outline"
    }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    VotingScreen: VotingScreen,
    BreedsScreen: BreedsScreen,
    ImagesScreen: ImagesScreen,
    FavsScreen: FavsScreen
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
