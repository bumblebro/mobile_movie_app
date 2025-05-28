import { Link } from "expo-router";
import { Text, View } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-5xl font-bold text-dark-100">Welcome!</Text>
      <Link href={"/onboarding"}>onboarding</Link>
    </View>
  );
}
