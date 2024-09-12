import { Image, StyleSheet, Text, View } from "react-native";

type playlistLibProps = {
    primeiroTexto: string,
    segundoTexto: string,
    imagem: string
}

function PlaylistLib({primeiroTexto, segundoTexto, imagem}: playlistLibProps) {
    return ( 
        <View style={style.boxPlaylist}>
        <View style={style.playlists}>
          <Image
            style={style.imgPlaylist}
            source={{
              uri: `${imagem}`,
            }}
          />
          <View style={style.boxTxtPlaylist}>
            <Text style={style.txtPlaylist}>{primeiroTexto}</Text>
            <Text style={style.txtCinzaPlaylist}>{segundoTexto}</Text>
          </View>
        </View>
      </View>
     );
}

const style = StyleSheet.create({
    boxTxtPlaylist:{
        display: "flex",
        flexDirection:"column",
        gap: 5,
        cursor: "pointer",
        justifyContent: "center"
        
    },
    txtCinzaPlaylist:{
        color: "gray",
        fontSize: 10,
        fontWeight: '400',
    },
  txtPlaylist: {
    color: "white",
    fontSize: 17,
    fontWeight: '600',
  },
  imgPlaylist: {
    height: 60,
    width: 60,
    borderRadius: 5,
  },
  playlists: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  boxPlaylist: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    gap: 10,
    marginTop: 20,
  },
})

export default PlaylistLib;