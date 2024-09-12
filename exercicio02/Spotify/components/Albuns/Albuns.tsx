import { ScrollView, StyleSheet, Text, View } from "react-native";
import Album from "../album/Album";

type playlistAlbunsPorps = {
    title: string,
    tema: string
}

type albumProps = {
    title: string;
    imageUrl: string;
  };

function Albuns({title, tema}: playlistAlbunsPorps) {
    const albunsPagode: albumProps[] = [
        { title: "Raça Negra e Amigos II (Ao Vivo)", imageUrl: "https://imgs.search.brave.com/MYrBYJPs_S0xAX6hdkB5cwtd4ghUrfdVCtGOZW5PDFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTI3NDdj/YjY2LTMxY2UtNDIy/Ny04NjczLTc0NzVk/NjM3MGFhZC0wLXQ1/MDB4NTAwLmpwZw" },
        { title: "Sorriso 15 Anos (Ao Vivo)", imageUrl: "https://imgs.search.brave.com/SY6G_ux_SxF3mbOaIqNMiX68rEVLB3CRAPfh0HjxJGw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmFnYWx1bWUuY29t/LmJyL3NvcnJpc28t/bWFyb3RvL2Rpc2Nv/Z3JhZmlhL3NvcnJp/c28tMTUtYW5vcy53/ZWJw" },
        { title: "Prazer, Eu Sou Ferrugem", imageUrl: "https://imgs.search.brave.com/2r6D1nT6_0qrru5egnWVRzyomV3AhFmaD_Wjc49WVjM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucW9idXouY29t/L2ltYWdlcy9jb3Zl/cnMvcGMva2IvdWF6/Mjk0MXF3a2JwY182/MDAuanBn" },
        { title: "Ao Vivo No Morro", imageUrl: "https://imgs.search.brave.com/AHTW_JUZBMyBniGDrkiDU1HOX4RsePaKXfK7tsKswno/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLWhSdkdk/eVpsRVhDdW85dDYt/dG45MHpBLXQ1MDB4/NTAwLmpwZw" },
        { title: "O Canto da razão", imageUrl: "https://imgs.search.brave.com/9V4KZeP_TbMZySY5OAnlDTanrumsUK6znjCGw1DsOEI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pczIt/c3NsLm16c3RhdGlj/LmNvbS9pbWFnZS90/aHVtYi9NdXNpYzcv/djQvYzcvZTkvOTIv/YzdlOTkyMWUtNTcw/Yi0yMjk2LWIzMzQt/YTExMTQ4NGNlYjJi/LzAuanBnLzI0OHgy/NDhjYy53ZWJw" },
        { title: "Ousadia & Alegria (Ao Vivo) ", imageUrl: "https://imgs.search.brave.com/Xmwp0ScBcmZL8LwSvwVcOPdrD0NGruwjuLHSBW5E1QU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnNj/ZG4uY28vaW1hZ2Uv/YWI2NzYxNmQwMDAw/YjI3M2JhYmJjOTRl/MWI5YTFkYjI3MmJl/ODFkMg.jpeg" },
        { title: "Nos Arcos da Lapa", imageUrl: "https://imgs.search.brave.com/HQyoL1J5dCHmb1kdtcPrKiJT3Lp3l5xZVXAZGldMrCs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmFnYWx1bWUuY29t/LmJyL3BlcmljbGVz/L2Rpc2NvZ3JhZmlh/L25vcy1hcmNvcy1k/YS1sYXBhLmpwZw" },
        { title: "Livre Pra Voar", imageUrl: "https://imgs.search.brave.com/xgxJIPJHpje8HtxRuEWkf1o-NseaF-9wFXc3Vc_bQzM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucW9idXouY29t/L2ltYWdlcy9jb3Zl/cnMvNTgvNjgvNTA5/OTk1MDIwNjg1OF82/MDAuanBn" },
        { title: "Sambista Perfeito", imageUrl: "https://akamai.sscdn.co/letras/360x360/albuns/6/7/4/d/25802.jpg" },
        { title: "Eu Sou o Samba", imageUrl: "https://imgs.search.brave.com/tOf7tFR4nBMcEsaaLSzm70mTcpemRzrxaxc4hg399uc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE0alJ0WXdRcUwu/anBn" },
    ]

    const albunsRock: albumProps[] = [
        { title: "The Beatles - Abbey Road", imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg" },
        { title: "Pink Floyd - The Dark Side of the Moon", imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png" },
        { title: "Nirvana - Nevermind", imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg" },
        { title: "Michael Jackson - Thriller", imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png" },
        { title: "AC/DC - Back in Black", imageUrl: "https://imgs.search.brave.com/SZXI6GkEJKj3_VoJFZPv2MfFhm9qrJXvWK1cdLmhoN4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzYxc0pJZnVVU2lM/LmpwZw" },
        { title: "Led Zeppelin - IV", imageUrl: "https://imgs.search.brave.com/sJJl_YsYKPyYMzsoUc9Sqqxck7-dnyaZ73t62jAbX_Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dmFnYWx1bWUuY29t/LmJyL2xlZC16ZXBw/ZWxpbi9kaXNjb2dy/YWZpYS9sZWQtemVw/cGVsaW4taXYud2Vi/cA" },
        { title: "Queen - A Night at the Opera", imageUrl: "https://imgs.search.brave.com/wEG5jR-MK-qLlsB75_Xs3bflOHI1UzZSY4IRtSrhFQg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dWRpc2NvdmVybXVz/aWMuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzA3L1F1/ZWVuLUEtTmlnaHQt/QXQtVGhlLU9wZXJh/LWFsYnVtLWNvdmVy/LXdpdGgtYm9yZGVy/LXdlYi1vcHRpbWlz/ZWQtODIwLTgyMHg4/MjAuanBn" },
        { title: "The Rolling Stones - Sticky Fingers", imageUrl: "https://imgs.search.brave.com/DgSk2qTc2v1Ug5sJuC8694h5gh3wjicYJzA9F73oPEU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFod1pIUTU3K0wu/anBn" },
        { title: "David Bowie - The Rise and Fall of Ziggy Stardust and the Spiders from Mars", imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/01/ZiggyStardust.jpg" },
        { title: "The Clash - London Calling", imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/00/TheClashLondonCallingalbumcover.jpg" },    
    ];
    const albunsBlues: albumProps[] = [
        { title: "Stevie Ray Vaughan & Double Trouble – Texas Flood (1983)", imageUrl: "https://i0.wp.com/newronio.espm.br/wp-content/uploads/2015/05/Texas_Flood_album_cover.jpg?w=1000&ssl=1" },
        { title: "John Mayall – Bluesbreakers with Eric Clapton (1966)", imageUrl: "https://i0.wp.com/newronio.espm.br/wp-content/uploads/2015/05/blues-breakers-with-eric-clapton-4f81941a5141d.jpg?w=1000&ssl=1" },
        { title: "John Lee Hooker – House of the Blues (1960)", imageUrl: "https://i0.wp.com/newronio.espm.br/wp-content/uploads/2015/05/John-Lee-Hooker-front.jpg?resize=1013%2C1024&ssl=1" },
        { title: "Howlin’ Wolf – Moanin’ in the Moonlight", imageUrl: "https://i0.wp.com/newronio.espm.br/wp-content/uploads/2015/05/DOL1434_1.jpg?resize=1024%2C1024&ssl=1" },
        { title: "Clarence “Gatemouth” Brown – The Original Peacock Recordings", imageUrl: "https://i0.wp.com/newronio.espm.br/wp-content/uploads/2015/05/01166120392.jpg?w=900&ssl=1" },
        { title: "T-Bone Walker – T-Bone Blues (1960)", imageUrl: "https://i0.wp.com/newronio.espm.br/wp-content/uploads/2015/05/t-bone_walker_-_t-bone_blues.jpg?w=900&ssl=1" },
        { title: "B.B. King – Live at the Regal", imageUrl: "https://i0.wp.com/newronio.espm.br/wp-content/uploads/2015/05/008811164614.jpg?resize=1024%2C989&ssl=1" },
        { title: "Muddy Waters at Newport", imageUrl: "https://i0.wp.com/newronio.espm.br/wp-content/uploads/2015/05/muddywaters1.jpg?resize=1018%2C1024&ssl=1" },
        { title: "Robert Johnson – King of the Delta Blues Singers", imageUrl: "https://i0.wp.com/newronio.espm.br/wp-content/uploads/2015/05/968full-king-of-the-delta-blues-singers-cover.jpg?w=930&ssl=1" },    
    ];

    if(tema == "pagode"){
        var albumLista = albunsPagode
    } else if(tema=="rock") {
        var albumLista = albunsRock
    } else {
        var albumLista = albunsBlues
    }


  return (
    <>
      <Text style={style.titleAlbuns}>{title}</Text>

      <ScrollView
        style={style.containerAlbuns}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        
        {albumLista.map((item, index) => (
            <View style={style.Album} key={index}>
                <Album imagem={item.imageUrl} text={item.title} />
            </View>
        ))}

      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({
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
        color: "white"
      },
      Album:{
        padding: 10,
        color: "white"
      },
      titleAlbuns:{
        color: "white",
        marginTop: 30,
        fontWeight: '700',
        fontSize: 20
      }
});

export default Albuns;
