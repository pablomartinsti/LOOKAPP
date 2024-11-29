import { SafeAreaView } from "react-native";
import { Box, Title, Touchable } from "../../components";
import { View } from "react-native";
import { colors } from "../../styles/theme.json";
import util from "../../util";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title = "Explore", right = null, goBack = false }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: util.toAlpha(colors.muted, 50),
        backgroundColor: colors.light,
      }}
    >
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Touchable
          width="70px"
          align="center"
          justify="center"
          hasPadding
          onPress={() => navigation[!goBack ? "openDrawer" : "goBack"]()}
        >
          <Icon name={!goBack ? "menu" : "arrow-left"} size={20} />
        </Touchable>
        <Box align="center" justify="center">
          <Title align="center">{title}</Title>
        </Box>
        {right ? right() : <Touchable hasPadding width="70px"></Touchable>}
      </SafeAreaView>
    </View>
  );
};

export default Header;
