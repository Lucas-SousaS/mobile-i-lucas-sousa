import { StyleSheet, Text, View } from "react-native";


function Home() {
    return (
        <View style={style.container}>
            {/* header */}
            <View style={style.box}>
                <View style={style.user}>
                    L
                </View>

                <View style={style.card}>
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
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "black",
        padding: 26
    },
    user:{
        width: 20,
        height: 20,
        borderRadius: 100,
        backgroundColor: "brown",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent:"center",
    },
    box:{
        display: "flex",
        flexDirection: "row",
        gap: 6,
        marginTop:10
    },
    card:{
        display: "flex",
        backgroundColor: "green",
        color: "#fff",
        padding: 4,
        paddingHorizontal: 10,
        borderRadius: 20
    }
})

export default Home;