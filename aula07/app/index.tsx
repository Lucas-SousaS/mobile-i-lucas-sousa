import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Página de testes de rotas </Text>

      <Link href="/home" asChild>
        <Pressable><Text>home</Text></Pressable>
      </Link>
      <Link href="/sobre" asChild>
        <Pressable><Text>sobre</Text></Pressable>
      </Link>
    </View>
  );
}
