import { Text, View } from "react-native";
import { BreedsStackDetailScreenProps } from "../types/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function BreedsDetailScreen({
  navigation,
  route
}: BreedsStackDetailScreenProps) {
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
      <Text>Detail Screen for Breeds</Text>
    </View>
  );
}
