import { Image, StyleSheet, Text, View } from "react-native";

type albumProps = {
    imagem: string,
    text: string,
    
}

function Secao({imagem, text}: albumProps) {
    return ( 
        <View style={style.container}>
            <Image style={style.imagem} source={{uri:`${imagem}`}} />
            <Text style={style.texto} >
                {text}
            </Text>
        </View>
     );
}

const style = StyleSheet.create({
    container: {
        width: 100,
        height:180,
        display: "flex",
        color: "white",
        gap: 10,
    },
    imagem: {
        height: 100,
        width: 100,
        objectFit: "cover",
        color: "white"
    },
    texto: {
        fontWeight: 600,
        color: "white"
    }
})

export default secao;