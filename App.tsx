import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Switch,
  Button,
  StatusBar,
  TextInput
} from "react-native";
import clsx from "clsx";

export default function App() {
  const [count, setCount] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const toggleSwitch = () => setIsDark(previousState => !previousState);
  const [value, onChangeText] = useState("");

  return (
    <SafeAreaView>
      <ScrollView
        className={clsx("min-h-screen p-[10px] transition-all", {
          "bg-[#121212]": isDark
        })}>
        <StatusBar />
        <Text
          className={clsx("text-[32px] font-bold text-black", {
            "text-white": isDark
          })}>
          React Native
        </Text>

        <View className="items-center justify-center p-[10px]">
          <Text
            className={clsx({
              "text-white": isDark
            })}>
            {isDark ? "Dark Mode" : "Light Mode"}
          </Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isDark ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isDark}
          />
        </View>

        <View
          className={clsx("mb-[10px] bg-[#efeeef] p-[10px]", {
            "bg-[#1e1e1e]": isDark
          })}>
          <Text
            className={clsx("mb-[10px] text-center text-[16px]", {
              "text-white": isDark
            })}>
            {count}
          </Text>

          <Button title="Click Me" onPress={() => setCount(count + 1)} />
        </View>

        <View
          className={clsx("mb-[10px] bg-[#efeeef] px-[10px] py-[10px]", {
            "bg-[#1e1e1e]": isDark
          })}>
          <TextInput
            className={clsx("border-b-[1px] border-[#2b2b2b] text-black", {
              "border-b-white text-white": isDark
            })}
            value={value}
            onChangeText={text => onChangeText(text)}
            placeholder="placeholder..."
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
