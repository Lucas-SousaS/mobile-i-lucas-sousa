import { FaGoogle, FaPlay, FaPlus, FaPlusCircle, FaShare } from "react-icons/fa";
import {} from "react-icons/bi"
import { Image, StyleSheet, Text, View } from "react-native";

function Player() {


  return (
    <View style={style.container}>
      <View style={style.divImg}>
      <Image
        style={style.album}
        source={require("../../assets/images/album.jpg")}
      />

        <View>
          <Text style={{ fontWeight: 600 , color:"white" }}>Cotidiano</Text>
          <Text style={{ fontWeight: 200, fontSize: 14, color:"#D3D3D3" }}>Chico Buarque</Text>
        </View>
      </View>
      <View style={style.divShare}>
        <FaShare style={style.btnShare}/>
        <FaPlusCircle style={style.btnShare}/>
        <FaPlay style={style.btnShare}/>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "90%",
    backgroundColor:"#336633",
    borderRadius: 7,
    cursor: "pointer",
    color: "white"
  },
  divShare: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    color: "white"
  },
  divImg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap:10,
    color: "white"
  },
  album: {
    height:40,
    width: 40,
    objectFit: "cover",
    borderRadius: 5,
    color: "white"
  },
  btnShare: {
    cursor: "pointer",

    color: "white"
  }
});

export default Player;
