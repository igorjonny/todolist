import { Image, Text, View } from "react-native";
import rocket from "../../assets/rocket.png";

export function Home() {
  return (
    <View>
      <View>
        <Image source={rocket} />
      </View>
    </View>
  );
}
