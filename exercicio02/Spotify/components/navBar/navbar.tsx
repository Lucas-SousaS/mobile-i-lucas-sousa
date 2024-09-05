import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { FaBook, FaHome, FaSearch } from "react-icons/fa";
import Player from "../player/player";

function NavBar() {
    return (<>
    <Player />
    <View style={style.container}>
      <Link href="/" asChild>
        <Pressable style={style.containerLinks}>
          <FaHome style={style.btnLinks} />
          <Text style={{ color: "white" }}>Início</Text>
        </Pressable>
      </Link>

      <Link href="busca" asChild>
        <Pressable style={style.containerLinks}>
          <FaSearch style={style.btnLinks} />
          <Text style={{ color: "white" }}>Busca</Text>
        </Pressable>
      </Link>

      <Link href="lib" asChild>
        <Pressable style={style.containerLinks}>
          <FaBook style={style.btnLinks} />
          <Text style={{ color: "white" }}>Biblioteca</Text>
        </Pressable>
      </Link>
    </View>
  </>
  );
}

const style = StyleSheet.create({

  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    backgroundColor: "black",
    marginTop:10
  },
  btnLinks: {
    color: "white",
  },
  containerLinks: {
    display: "flex",
    alignItems: "center",
  },
});

export default NavBar;
