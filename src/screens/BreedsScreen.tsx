import { View, Text, Platform, AppState } from "react-native";
import type { AppStateStatus } from "react-native";
import { focusManager } from "@tanstack/react-query";
import { useEffect } from "react";

export default function BreedsScreen() {
  function onAppStateChange(status: AppStateStatus) {
    if (Platform.OS !== "web") {
      focusManager.setFocused(status === "active");
    }
  }

  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange);

    return () => subscription.remove();
  }, []);

  return (
    <View className="flex-1 items-center justify-center gap-[10]">
      <Text>Hello, Breeds Screen</Text>
      <Text>Platform: {Platform.OS}</Text>
      <Text>is Focused: {String(focusManager.isFocused())}</Text>
    </View>
  );
}
