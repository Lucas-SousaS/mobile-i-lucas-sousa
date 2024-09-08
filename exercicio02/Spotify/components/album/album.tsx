import { Image, StyleSheet, Text, View } from "react-native";

function Album() {
    return ( 
        <View style={style.container}>
            <Image style={style.imagem} source={{uri:"https://imgs.search.brave.com/oV-8nK_VMcrhyEe4VUnewQAlZRiCVMT09MxWpLx3J8Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS81MDB4NTAwLzk1/ZjUzOTNmNmY1YzVk/MjVkY2I5MDEzYzJk/ODZiYTcyLmpwZw"}} />
            <Text style={style.texto} >
                All hope is (gone 10th anniversary)
            </Text>
        </View>
     );
}

const style = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        display: "flex",
        gap: 10,
    },
    imagem: {
        height: 100,
        width: 100,
        objectFit: "cover",
    },
    texto: {
        fontWeight: 600,
        color: "white"
    }
})

export default Album;