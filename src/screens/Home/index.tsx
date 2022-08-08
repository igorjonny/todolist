import { Image, Text, View } from "react-native";
import rocket from "../../assets/rocket.png";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.rocket} resizeMode="contain" source={rocket} />
        <Text
          style={{
            color: "#4EA8DE",
            fontSize: 40,
            fontFamily: "Inter_700Bold",
          }}
        >
          To
        </Text>
        <Text
          style={{
            color: "#5E60CE",
            fontSize: 40,
            fontFamily: "Inter_700Bold",
          }}
        >
          do
        </Text>
      </View>
    </View>
  );
}
