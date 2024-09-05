import { Stack } from "expo-router";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import NavBar from "../components/navBar/navbar";
import Library from "./lib/index";

export default function RootLayout() {
  return (
    <ThemeProvider value={DarkTheme} >
      {/* Envolve todas as páginas dentro do Stack */}
      <Stack screenOptions={{ headerShown: false }} />

      {/* Coloque o NavBar fora do Stack, se quiser que esteja sempre visível */}
      <NavBar />
    </ ThemeProvider >
  );
}
