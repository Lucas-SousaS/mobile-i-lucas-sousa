import { StyleSheet, Text, View } from "react-native";

type cardHeaderProps = {
    texto: string,
    tema: string
}

function CardHeader({texto, tema }: cardHeaderProps) {

    const IsGreenCard = tema === "green" ? true : false;

    const CardStyle = IsGreenCard ? style.greenCard : style.card;
    const TextStyle = IsGreenCard ? style.greenText : style.txtCard;
  
  return (
    <View style={CardStyle}>
      <Text style={TextStyle}>{texto}</Text>
    </View>
  );
}

const style = StyleSheet.create({
    
    card:{
        display: "flex",
        backgroundColor: "#1f1f1f",
        padding: 4,
        paddingHorizontal: 10,
        borderRadius: 20,
        cursor: "pointer",
        
    },
    txtCard: {
        fontWeight: '400',
        cursor: "pointer",
        color:"white"
    },
    greenCard:{
        display: "flex",
        cursor: "pointer",
        backgroundColor: "green",
        padding: 4,
        paddingHorizontal: 10,
        borderRadius: 20,
        
    },
    greenText: {
        fontWeight: '400',
        color:"black"
    }
})

export default CardHeader;
