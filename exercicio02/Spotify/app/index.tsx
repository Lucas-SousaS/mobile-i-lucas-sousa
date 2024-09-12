import Album from "@/components/album/album";
import Albuns from "@/components/Albuns/Albuns";
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
        <View style={style.user}>
          <Text style={{ color: "white" }}>L</Text>
        </View>

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
          musica="https://imgs.search.brave.com/qDXokP0kKgjE-WH8QM-jMVPPe1eNPm9I5nZ0b0t5f7k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2stc3RhdGlj/LmNvbS9pbWFnZXMv/bWVkaWEvaW1nL2Nv/bDMvMjAyNDA0MzAt/MTQ0MTUxLTg3MDg1/Mi5qcGc"
          nome="Mix Sliknot"
        />
        <Playlist
          musica="https://imgs.search.brave.com/eXg8qv4CMm5PeZQG6zxoqeRsze7Fx9pQyNCLSBVVmgI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFhQkx2TU50aUwu/anBn"
          nome="The Predator"
        />
        <Playlist
          musica="https://imgs.search.brave.com/bHud7w3p4qILVNz-3WSva4p5K5DFgMX1OUOV2dwpuPo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFGWWpMU1VkSEwu/anBn"
          nome="All hope is gone"
        />
        <Playlist
          musica="https://imgs.search.brave.com/-Tw_tjuA4eSR2Sh7NynVsYFS-765ZhNyPowSotGG904/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS81MDB4NTAwL2Vl/OTZhMjQ0YTliZDMz/YTM5NzhjYTFmZjM0/ZDgwNDgzLmpwZw"
          nome="Rust In Peace"
        />
        <Playlist
          musica="https://imgs.search.brave.com/VmsIlvd770Aw72UwD2FaU_EOLCwsQM7e153oMq3jaMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3du/c3F1YXJlLm1lZGlh/L3NpdGUvMzY2L2Zp/bGVzLzIwMTMvMDcv/RGVhdGguanBnP3c9/OTgwJnE9NzU"
          nome="Death"
        />
        <Playlist
          musica="https://imgs.search.brave.com/tk5h5I0TZeLg6sZ1YVT3lIqIWLZ_PulsHEZ8qJ0brH8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pY2hl/Zi5iYmNpLmNvLnVr/L2FjZS93cy82NDAv/Y3BzcHJvZHBiLzgx/N2YvbGl2ZS9jNDM5/Y2E5MC02YzJiLTEx/ZWYtYjMwYS04MzQ0/NWFmMWNiMmIuanBn/LndlYnA"
          nome="This is Chico Buarque"
        />
        <Playlist
          musica="https://imgs.search.brave.com/CJ4hSmazb3pHz1p5IkHTmtUQMS2Qa7M_NSppR9ib6Tc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/Lzgxd2FqbUJqKzZM/LmpwZw"
          nome="The Number of The Beast"
        />
      </View>

      <Albuns title="Suas playlists estão com saudade" tema="rock" />
      <Albuns title="Suas playlists estão com saudade" tema="blues" />
      <Albuns title="Suas playlists estão com saudade" tema="pagode" />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    backgroundColor: "black",
    paddingBottom: 100,
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
    marginVertical: 20,
  },
  Album: {
    padding: 10,
  },
  titleAlbuns: {
    color: "white",
    marginTop: 30,
    fontWeight: 700,
    fontSize: 20,
  },
});

export default Home;
