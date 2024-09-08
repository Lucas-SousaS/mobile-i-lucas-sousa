import Album from "@/components/album/album";
import CardHeader from "@/components/cardHeader/cardHeader";
import Playlist from "@/components/playlists/playlist";
import { StyleSheet, Text, View, ScrollView } from "react-native";

function Home() {
  return (
    <ScrollView
      style={style.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {/* header */}
      <View style={style.box}>
        <View style={style.user}>L</View>

        <CardHeader texto="Tudo" tema="green" />
        <CardHeader texto="Música" tema="dark" />
        <CardHeader texto="Podcasts" tema="dark" />
      </View>

      <View style={style.containerPlaylist}>
        <Playlist
          musica="https://imgs.search.brave.com/0cFjIjwp6W-fuMxqSKFCuKthTk6hOP1waXiZ5uShPBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RlcmVvZ3Vt/LmNvbS91cGxvYWRz/LzIwMjQvMDEvMjEt/U2F2YWdlLWFtZXJp/Y2FuLWRyZWFtLTE3/MDUwNzAzNTUuanBl/Zw"
          nome="21 savage"
        />
        <Playlist
          musica="https://imgs.search.brave.com/0cFjIjwp6W-fuMxqSKFCuKthTk6hOP1waXiZ5uShPBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RlcmVvZ3Vt/LmNvbS91cGxvYWRz/LzIwMjQvMDEvMjEt/U2F2YWdlLWFtZXJp/Y2FuLWRyZWFtLTE3/MDUwNzAzNTUuanBl/Zw"
          nome="21 savage"
        />
        <Playlist
          musica="https://imgs.search.brave.com/0cFjIjwp6W-fuMxqSKFCuKthTk6hOP1waXiZ5uShPBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RlcmVvZ3Vt/LmNvbS91cGxvYWRz/LzIwMjQvMDEvMjEt/U2F2YWdlLWFtZXJp/Y2FuLWRyZWFtLTE3/MDUwNzAzNTUuanBl/Zw"
          nome="21 savage"
        />
        <Playlist
          musica="https://imgs.search.brave.com/0cFjIjwp6W-fuMxqSKFCuKthTk6hOP1waXiZ5uShPBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RlcmVvZ3Vt/LmNvbS91cGxvYWRz/LzIwMjQvMDEvMjEt/U2F2YWdlLWFtZXJp/Y2FuLWRyZWFtLTE3/MDUwNzAzNTUuanBl/Zw"
          nome="21 savage"
        />
        <Playlist
          musica="https://imgs.search.brave.com/0cFjIjwp6W-fuMxqSKFCuKthTk6hOP1waXiZ5uShPBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RlcmVvZ3Vt/LmNvbS91cGxvYWRz/LzIwMjQvMDEvMjEt/U2F2YWdlLWFtZXJp/Y2FuLWRyZWFtLTE3/MDUwNzAzNTUuanBl/Zw"
          nome="21 savage"
        />
        <Playlist
          musica="https://imgs.search.brave.com/0cFjIjwp6W-fuMxqSKFCuKthTk6hOP1waXiZ5uShPBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RlcmVvZ3Vt/LmNvbS91cGxvYWRz/LzIwMjQvMDEvMjEt/U2F2YWdlLWFtZXJp/Y2FuLWRyZWFtLTE3/MDUwNzAzNTUuanBl/Zw"
          nome="21 savage"
        />
        <Playlist
          musica="https://imgs.search.brave.com/0cFjIjwp6W-fuMxqSKFCuKthTk6hOP1waXiZ5uShPBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RlcmVvZ3Vt/LmNvbS91cGxvYWRz/LzIwMjQvMDEvMjEt/U2F2YWdlLWFtZXJp/Y2FuLWRyZWFtLTE3/MDUwNzAzNTUuanBl/Zw"
          nome="21 savage"
        />
        <Playlist
          musica="https://imgs.search.brave.com/0cFjIjwp6W-fuMxqSKFCuKthTk6hOP1waXiZ5uShPBQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RlcmVvZ3Vt/LmNvbS91cGxvYWRz/LzIwMjQvMDEvMjEt/U2F2YWdlLWFtZXJp/Y2FuLWRyZWFtLTE3/MDUwNzAzNTUuanBl/Zw"
          nome="21 savage"
        />
      </View>

      <ScrollView
        style={style.containerAlbuns}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
        <Album />
      </ScrollView>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "black",
    paddingBottom:100,
    padding: 26,
    gap: 20,
  },
  user: {
    width: 25,
    height: 25,
    borderRadius: 100,
    backgroundColor: "brown",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
    marginVertical: 30,
  },
  cardGreen: {
    display: "flex",
    backgroundColor: "green",
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  txtCardGreen: {
    fontWeight: 300,
  },
  card: {
    display: "flex",
    backgroundColor: "grey",
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  txtCard: {
    fontWeight: 300,
    color: "white",
  },
  containerPlaylist: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
    width: "100%",
  },
  containerAlbuns: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    overflow: "scroll",
    width: "100%",
    marginVertical: 30,
  },
});

export default Home;
