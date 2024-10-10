import { Stack } from "expo-router";
import { screensEnabled } from "react-native-screens";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
