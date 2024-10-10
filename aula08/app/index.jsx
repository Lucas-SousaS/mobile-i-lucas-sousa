import { Text, TouchableOpacity, View } from "react-native";
import DetailsScreen from "./screens/DetailsScreen";
import Giroscopio from "./screens/Giroscopio";
import Acelerometro from "./screens/Acelerometro";
import Barometro from "./screens/Barometro";
import LightSensor from "./screens/LightSensor";
import { Link } from "@react-navigation/native";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Giroscopio />
      <Acelerometro />
      <Barometro />
      <LightSensor />

      <TouchableOpacity>
        <Link to="/screens/HomeScreen">
          <Text>Navegar para a página 2</Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
