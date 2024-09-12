import { FaCamera, FaSearch, FaSlash } from "react-icons/fa";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

function Busca() {
  return (
    <ScrollView
      style={style.container}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={style.box}>
        <View style={style.containerUser}>
          <View style={style.user}>
            <Text style={{ color: "white" }}>L</Text>
          </View>

          <Text style={style.titleBuscar}>Buscar</Text>
        </View>

        <View style={style.boxIconCamera}>
          <FaCamera style={style.iconCamera} />
        </View>
      </View>

      <View style={style.boxInputSearch}>
        <FaSearch />
        <TextInput
          style={style.inputSearch}
          placeholder="O que você quer ouvir?"
          keyboardType="web-search"
        />
      </View>

      <View style={style.boxGeneros}>
        <Text style={style.txtGeneros}>Explore seus gêneros</Text>

        <View style={style.containerGen}>
          <View style={style.boxImg}>
            <Image
              style={style.img}
              source={{
                uri: "https://imgs.search.brave.com/_egE6ke2cBypg6LaG-MOh0qDivpjyqr61AHZRTpGv6c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzExLzU1LzQ2/LzM2MF9GXzMxMTU1/NDY4MV9OOGhZMVZT/WGh1elZ5eTFza1Mw/cElzcnBoVHg2Tkk5/YS5qcGc",
              }}
            />

            <Text style={style.txtGen}>#Fantasy metal</Text>
          </View>

          <View style={style.boxImg}>
            <Image
              style={style.img}
              source={{
                uri: "https://imgs.search.brave.com/SKhpGsw9yPWJ8hVV9_bx67MJqVveQMOYP7K-ccZ0KJA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODM5/MTI2NzUvcGhvdG8v/c2luZ2VyLWFuZC1n/dWl0YXJpc3QtamFt/ZXMtaGV0ZmllbGQt/aW4tY29uY2VydC13/aXRoLWFtZXJpY2Fu/LWhlYXZ5LW1ldGFs/LXJvY2stYmFuZC1t/ZXRhbGxpY2EuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUIw/SHgyRWc1LVRjSGwx/ZEg2OUl4QVh6c2Jp/NkduNHlOTmhvT3NY/Z2NjbFU9",
              }}
            />

            <Text style={style.txtGen}>#Trash Metal</Text>
          </View>

          <View style={style.boxImg}>
            <Image
              style={style.img}
              source={{
                uri: "https://imgs.search.brave.com/TPdAu7U_kmi2VWD8PwuH3oVEsWF-LX7pk-j1hP6iPsU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aGVi/YWNrc3RhZ2UtZGVl/emVyLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8xMS9t/dXNpY2EtZWxldHJv/bmljYS1hdmljaWkt/MS5qcGc",
              }}
            />

            <Text style={style.txtGen}>#Eletrônica</Text>
          </View>
        </View>
      </View>

      <Text style={style.titleSection}>Navegar por todas as seções</Text>

      <View style={style.containerSecao}>
        <View style={[style.boxSecao, { backgroundColor: "#4281A4" }]}>
          <Text style={style.txtSecao}>Brasil</Text>
          <Image
            style={style.imgSecao}
            source={{
              uri: "https://imgs.search.brave.com/u4pAQjUXy45iBhbPqRl6S25bIgkJJh2hrOrZRg3eazE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wb3J0/YWxwb3BsaW5lLmNv/bS5ici93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMS8xMS9tYXJp/bGlhLW1lbmRvbmNh/LWdyYW1teS0yLmpw/Zw",
            }}
          />
        </View>

        <View style={[style.boxSecao, { backgroundColor: "#220C10" }]}>
          <Text style={style.txtSecao}>Música</Text>
          <Image
            style={style.imgSecao}
            source={{
              uri: "https://imgs.search.brave.com/IX4QRd9qnXMxiBRkGrRCHSAvMcnhi-kZF1kyQwVJoIs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmFnYWx1bWUuY29t/LmJyL3RoZS13ZWVr/bmQvZGlzY29ncmFm/aWEvc3RhcmJveS53/ZWJw",
            }}
          />
        </View>
        <View style={[style.boxSecao, { backgroundColor: "#202030" }]}>
          <Text style={style.txtSecao}>Podcast</Text>
          <Image
            style={style.imgSecao}
            source={{
              uri: "https://i.scdn.co/image/ab67656300005f1f7fbf5d3b676ba83b4a1867b3",
            }}
          />
        </View>
        <View style={[style.boxSecao, { backgroundColor: "#36213E" }]}>
          <Text style={style.txtSecao}>Eventos Ao Vivo</Text>
          <Image
            style={style.imgSecao}
            source={{
              uri: "https://imgs.search.brave.com/xpQQUh91yJQAe5MzGTnO3M9CWSh38KDCg7oWMSRAxRA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/NC8xMC8xNi81NS9s/aXZlLW11c2ljLTIy/MTkwMzZfNjQwLmpw/Zw",
            }}
          />
        </View>
        <View style={[style.boxSecao, { backgroundColor: "#220C10" }]}>
          <Text style={style.txtSecao}>Feito para você</Text>
          <Image
            style={style.imgSecao}
            source={{
              uri: "https://imgs.search.brave.com/XiQTHMlRFfESIC8AUo2zzsZ-vUoG3aciTNRLKywr2kg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmFnYWx1bWUuY29t/LmJyL3NsaXBrbm90/L2ltYWdlcy9zbGlw/a25vdC5qcGc",
            }}
          />
        </View>
        <View style={[style.boxSecao, { backgroundColor: "#4281A4" }]}>
          <Text style={style.txtSecao}>Lançamentos</Text>
          <Image
            style={style.imgSecao}
            source={{
              uri: "https://i.scdn.co/image/ab67616d00001e02229a333e30908975e7724646",
            }}
          />
        </View>
        <View style={[style.boxSecao, { backgroundColor: "rgb(45, 70, 185)" }]}>
          <Text style={style.txtSecao}>São João</Text>
          <Image
            style={style.imgSecao}
            source={{
              uri: "https://i.scdn.co/image/ab67fb8200005cafaee353b8cd0f7f14197c5565",
            }}
          />
        </View>
        <View style={[style.boxSecao, { backgroundColor: "rgb(30, 50, 100)" }]}>
          <Text style={style.txtSecao}>Originais do Spotify</Text>
          <Image
            style={style.imgSecao}
            source={{
              uri: "https://i.scdn.co/image/ab67656300005f1fb02b40e89324364b8b5f75b2",
            }}
          />
        </View>

        {/* background-color: rgb(45, 70, 185); */}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  titleSection: {
    color: "white",
    marginTop: 20,
    fontWeight: 600,
  },
  txtSecao: {
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 600,
    fontSize: 17,
    color: "white",
  },
  imgSecao: {
    height: 60,
    width: 60,
    borderRadius: 5,
    transform: [{ rotate: "25deg" }],
    marginTop: 10,
    marginLeft: 20,
  },
  boxSecao: {
    display: "flex",
    backgroundColor: "pink",
    width: "45%",
    flexDirection: "row",
    justifyContent: "space-between",
    cursor: "pointer",
    height: 75,
    borderRadius: 5,
    overflow: "hidden",
  },
  containerSecao: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    gap: 15,
    width: "100%",
    flexWrap: "wrap",
    marginBottom: 50,
  },
  containerGen: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
  },
  txtGeneros: {
    color: "white",
    fontWeight: 600,
  },
  boxGeneros: {
    display: "flex",
    gap: 20,
    marginTop: 20,
  },
  boxImg: {
    display: "flex",
    position: "relative",
    cursor: "pointer",
    width: 120,
  },
  txtGen: {
    color: "white",
    position: "absolute",
    bottom: 5,
    left: 5,
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
  },
  img: {
    height: 160,
    width: 120,
    borderRadius: 5,
  },
  boxInputSearch: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    padding: 5,
    borderRadius: 5,
    gap: 5,
  },
  inputSearch: {
    backgroundColor: "white",
    padding: 5,
    fontSize: 15,
    borderWidth: 0,
    fontWeight: 600,
    width: "100%",
    borderColor: "white",
    borderRightWidth: 0,
  },
  boxIconCamera: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iconCamera: {
    height: 20,
    width: 20,
    color: "white",
  },
  containerUser: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  titleBuscar: {
    color: "white",
    fontWeight: 600,
    fontSize: 20,
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

export default Busca;
