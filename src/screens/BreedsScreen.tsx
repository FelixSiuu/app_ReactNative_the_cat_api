import { View, Text, ScrollView } from "react-native";
import { BreedsScreenProps } from "../types/navigation";
import { useEffect, useState } from "react";
import { Button } from "react-native-paper";

export default function BreedsScreen({ navigation, route }: BreedsScreenProps) {
  return (
    <ScrollView className="pt-[20]">
      <View className="items-center justify-center gap-[30]">
        <Text>Hello, Breeds Screen</Text>

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
