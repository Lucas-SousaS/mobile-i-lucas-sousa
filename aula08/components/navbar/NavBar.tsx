import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

function NavBar() {
    return ( 
        <View style={style.container}>
            <Link href="/Acelerometro">
                Acelerômetro
            </Link>
            <Link href="/Barometro">
                Barômetro
            </Link >
            <Link href="/DeviceMotion">
                DeviceMotion
            </Link>
            <Link href="/Giroscopio">
                Giroscópio
            </Link >
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    }
})

export default NavBar;