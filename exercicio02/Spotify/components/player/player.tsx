import { FaCheck, FaPlay, FaShare } from "react-icons/fa";
import { StyleSheet, Text, View } from "react-native";

function Player() {
  return (
    <View style={style.container}>
      <View style={style.divImg}>
        image
        <View>
          <Text style={{ fontWeight: 600 }}>Cotidiano</Text>
          <Text style={{ fontWeight: 200, fontSize: 14 }}>Chico Buarque</Text>
        </View>
      </View>
      <View style={style.divShare}>
        <FaShare />
        <FaCheck />
        <FaPlay />
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 20,
    paddingLeft: 20,
    padding: 5,
  },
  divShare: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  divImg: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap:10 
  },
});

export default Player;
