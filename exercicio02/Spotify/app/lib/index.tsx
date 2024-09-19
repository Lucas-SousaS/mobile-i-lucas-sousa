import CardHeader from "@/components/cardHeader/cardHeader";
import PlaylistLib from "@/components/PlaylistLib/PlaylistLib";
// import {
//   FaArrowsAltH,
//   FaArrowsAltV,
//   FaCamera,
//   FaFirstOrder,
//   FaPlus,
//   FaQrcode,
//   FaSearch,
// } from "react-icons/fa";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";

function Library() {
  return (
    <ScrollView
      style={style.container}
      scrollEnabled={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={style.box}>
        <View style={style.containerUser}>
          <View style={style.user}>
            <Text style={{ color: "white" }}>L</Text>
          </View>

          <Text style={style.titleBuscar}>Sua Biblioteca</Text>
        </View>

        <View style={style.boxIconCamera}>
          {/* <FaSearch style={style.iconCamera} /> */}
          <Icon name="search" type="font-awesome" color="#fff" size={20} />
          <Icon name="plus" type="font-awesome" color="#fff" size={20} />
          {/* <FaPlus style={style.iconCamera} /> */}
        </View>
      </View>

      <View style={style.boxNav}>
        <CardHeader texto="Playlist" tema="dark" />
        <CardHeader texto="Podcasts" tema="dark" />
        <CardHeader texto="Albuns" tema="dark" />
        <CardHeader texto="Artistas" tema="dark" />
      </View>

      <View style={style.boxRecentes}>
        <Text style={style.titleRecentes}>
          {/* <FaArrowsAltV /> */}
          <Icon name="home" type="font-awesome" color="#fff" size={20} />
          
          <Text>
            Recentes
          </Text>

        </Text>

        {/* <FaQrcode style={style.iconQr} /> */}
        <Icon name="qrcode" type="font-awesome" color="#fff" size={20} />
      </View>

      <View style={style.boxPlaylistLib}>
        <PlaylistLib
          primeiroTexto="Músicas Curtidas"
          segundoTexto="Playlist 4 Músicas"
          imagem="https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84d7d9b8d1221657e499dd50af"
        />
        <PlaylistLib
          primeiroTexto="Novos Episódios"
          segundoTexto="Atualizado ontem"
          imagem="https://i.scdn.co/image/ab67656300005f1f7fbf5d3b676ba83b4a1867b3"
        />
        <PlaylistLib
          primeiroTexto="Rust In Place"
          segundoTexto="Album megadeth"
          imagem="https://imgs.search.brave.com/-Tw_tjuA4eSR2Sh7NynVsYFS-765ZhNyPowSotGG904/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sYXN0/Zm0uZnJlZXRscy5m/YXN0bHkubmV0L2kv/dS81MDB4NTAwL2Vl/OTZhMjQ0YTliZDMz/YTM5NzhjYTFmZjM0/ZDgwNDgzLmpwZw"
        />
        <PlaylistLib
          primeiroTexto="Mix Melancólico"
          segundoTexto="Playlist: feita para Lucas Sousa"
          imagem="https://imgs.search.brave.com/pAGTmI4JiZ4Au3RORDWuCJIY9OndxRmsDrAIJFfvx-I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy83/Lzc3L0NhcnRvbGFf/cG9yX0N5bnRoaWFf/QnJpdG8uanBn"
        />
        <PlaylistLib
          primeiroTexto="All hope is gone"
          segundoTexto="Album Slipknot"
          imagem="https://imgs.search.brave.com/bHud7w3p4qILVNz-3WSva4p5K5DFgMX1OUOV2dwpuPo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFGWWpMU1VkSEwu/anBn"
        />
        <PlaylistLib
          primeiroTexto="Rock Internacional"
          segundoTexto="Playlist Lucas Sousa"
          imagem="https://imgs.search.brave.com/VmsIlvd770Aw72UwD2FaU_EOLCwsQM7e153oMq3jaMY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90b3du/c3F1YXJlLm1lZGlh/L3NpdGUvMzY2L2Zp/bGVzLzIwMTMvMDcv/RGVhdGguanBnP3c9/OTgwJnE9NzU"
        />
        <PlaylistLib
          primeiroTexto="Rock Brasileiro"
          segundoTexto="Playlist Lucas Sousa"
          imagem="https://imgs.search.brave.com/ocDXdxfPpJ-Xjq3W3Lmct_B_2_1Tu_fa7In8apyhIoA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb3Zp/bXVzaWMucm92aWNv/cnAuY29tL2ltYWdl/LmpwZz9jPWtqRW05/cy1TN2VVdzBKWmpG/ZmZ6UlE0UTFnaFk4/VmFQeWxubTdQd2NL/Tlk9JmY9NA"
        />
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  boxPlaylistLib: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 50,
  },
  iconQr: {
    color: "white",
  },

  titleRecentes: {
    color: "white",
    fontWeight: '600',
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  boxRecentes: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 20,
    gap: 20
  },
  boxNav: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  boxIconCamera: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  iconCamera: {
    height: 20,
    width: 20,
    color: "white",
  },
  titleBuscar: {
    color: "white",
    fontWeight: '600',
    fontSize: 20,
  },
  containerUser: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 10,
    marginVertical: 30,
  },
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
});

export default Library;
