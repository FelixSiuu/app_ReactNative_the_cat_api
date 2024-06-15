import { View, Text } from "react-native";
import { Button } from "react-native-paper";
import { BreedsScreenProps } from "../navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BreedsScreen({ navigation, route }: BreedsScreenProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left
      }}
      className="flex-1 items-center justify-center">
      <Text>Hello, Breeds Screen</Text>
    </View>
  );
}
