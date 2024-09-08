import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { FaBook, FaHome, FaSearch } from "react-icons/fa";
import Player from "../player/player";

function NavBar() {
    return (<View style={style.box}>
    <Player />
    <View style={style.container}>
      <Link href="/" asChild>
        <Pressable style={style.containerLinks}>
          <FaHome style={style.btnLinks} />
          <Text style={{ color: "white" }}>Início</Text>
        </Pressable>
      </Link>

      <Link href="/busca" asChild>
        <Pressable style={style.containerLinks}>
          <FaSearch style={style.btnLinks} />
          <Text style={{ color: "white" }}>Busca</Text>
        </Pressable>
      </Link>

      <Link href="/lib" asChild>
        <Pressable style={style.containerLinks}>
          <FaBook style={style.btnLinks} />
          <Text style={{ color: "white" }}>Biblioteca</Text>
        </Pressable>
      </Link>
    </View>
  </View>
  );
}

const style = StyleSheet.create({

  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "rgba(0, 0, 0, 0.5)", 
    padding:10
  },
  btnLinks: {
    color: "white",
  },
  containerLinks: {
    display: "flex",
    alignItems: "center",
  },
  box:{
    backgroundColor: 'linear-gradient(45deg ,0% rgba(0, 0, 0, 0.2), 100% rgba(0, 0, 0, 1) )',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    left:0,
    right: 0,
  }
});

export default NavBar;
