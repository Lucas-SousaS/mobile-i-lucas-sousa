import {Image, StyleSheet, View, Text} from "react-native"

function playlist({musica, nome}) {

    const img = require(musica)
    return ( 
        <View style={style.container}>
            <Image
            style={style.img}
            source={img}/>
             <Text style={style.txt}>
                {nome}
             </Text>
        </View>
     );
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#212121",
        color: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingRight: 10,
        borderRadius: 6,
        gap: 10
    },
    img:{
        height: 60,
        width: 60,
        objectFit: "cover"
    },
    txt:{
        color:"#fff",
        fontWeight: 600
    }
})

export default playlist;