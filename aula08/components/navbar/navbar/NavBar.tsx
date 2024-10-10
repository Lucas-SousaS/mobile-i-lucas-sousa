
import { StyleSheet, Text, View } from "react-native";

function NavBar() {
    return ( 
        <View style={style.container}>
            <Text>
                Ola
            </Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-around",
    }
})

export default NavBar;