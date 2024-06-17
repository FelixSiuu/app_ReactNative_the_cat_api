import { Text, View } from "react-native";
import { VoteStackDetailScreenProps } from "../types/navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function VoteDetailScreen({
  navigation,
  route
}: VoteStackDetailScreenProps) {
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
      <Text>Detail Screen for Vote</Text>
    </View>
  );
}
