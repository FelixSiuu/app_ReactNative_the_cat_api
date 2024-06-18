import { View, Text } from "react-native";
import { SettingScreenProps } from "../types/navigation";

export default function SettingsScreen({
  navigation
}: {
  navigation: SettingScreenProps;
}) {
  return (
    <View className="flex-1 items-center justify-center gap-[10]">
      <Text>Settings Screen</Text>
    </View>
  );
}
