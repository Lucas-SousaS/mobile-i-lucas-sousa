import { StyleSheet, Text, View } from "react-native";
import Playlist from "../components/playlists/playlist"

function Home() {
    return ( 
        <View>
            <Playlist />
        </View>
     );
}

const style = StyleSheet.create({

})

export default Home;