import { View, Text } from "react-native";
import { SettingsDrawerScreenProps } from "../types/navigation";
import { Button } from "react-native-paper";
import { useDrawerStatus } from "@react-navigation/drawer";

export default function SettingsScreen({
  navigation
}: SettingsDrawerScreenProps) {
  const isDrawerOpen = useDrawerStatus();

  return (
    <View className="flex-1 items-center justify-center gap-[10]">
      <Text>Settings Screen</Text>
      <Text>is Drawer open: {isDrawerOpen}</Text>
      <Button mode="contained" onPress={() => navigation.openDrawer()}>
        open Drawer
      </Button>
    </View>
  );
}
