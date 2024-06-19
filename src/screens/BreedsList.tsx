import { View, Text, ScrollView } from "react-native";
import { BreedsListScreenProps } from "../types/navigation";
import { Button } from "react-native-paper";

export default function BreedsList({
  navigation,
  route
}: BreedsListScreenProps) {
  return (
    <ScrollView className="pt-[20]">
      <Text>selected: {route.params.breed_id}</Text>
    </ScrollView>
  );
}
