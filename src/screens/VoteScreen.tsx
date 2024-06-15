import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { VoteScreenProps } from "../navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function VoteScreen({ navigation, route }: VoteScreenProps) {
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
      <Text>Hello, Vote Screen</Text>
    </View>
  );
}
