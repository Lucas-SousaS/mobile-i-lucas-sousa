import {Image, StyleSheet, View, Text} from "react-native"

type playlistProps = {
    musica: string,
    nome: string
}

function Playlist({musica, nome}: playlistProps) {

    return ( 
        <View style={style.container}>
            <Image
            style={style.img}
            source={{ uri: musica }}/>
             <Text style={style.txt}>
                {nome}
             </Text>
        </View>
     );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#1f1f1f",
        cursor: "pointer",
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10,
        borderRadius: 6,
        gap: 10,
        overflow:"hidden",
        width: "48%"
    },
    img:{
        height: 60,
        width: 60,
        objectFit: "cover"
    },
    txt:{
        color:"#fff",
        fontWeight: '600'
    }
})

export default Playlist;