import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

function Home() {
    return ( 
        <View style={style.container}>
            {/* header */}
            <Header>
            <View>
                    <Text>
                        Tudo
                    </Text>
                </View>

                <View>
                    <Text>
                        Tudo
                    </Text>
                </View>
                <View>
                    <Text>
                        Música
                    </Text>
                </View>
                <View>
                    <Text>
                        Playlist
                    </Text>
                </View>
            </Header>

        </View>
     );
}

const style = StyleSheet.create({
    container:{
        display: "flex",
    }
})

export default Home;