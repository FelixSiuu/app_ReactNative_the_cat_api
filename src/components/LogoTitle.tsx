import { Image } from "react-native";

export default function LogoTitle() {
  return (
    <Image
      className="h-[40px] w-[40px]"
      source={require("../assets/images/react-logo.png")}
    />
  );
}
