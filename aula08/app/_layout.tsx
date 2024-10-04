import NavBar from "@/components/navbar/NavBar";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (<>
    <Stack >
      <Stack.Screen name="index" />
      
    </Stack>
    <NavBar />
    </>
  );
}
