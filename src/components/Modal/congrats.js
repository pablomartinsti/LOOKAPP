import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Text, Title, Spacer, Button, Cover } from "../";

const CongratsModal = () => {
  const { navigate } = useNavigation();
  return (
    <Box
      background="light"
      hasPadding
      justify="center"
      align="center"
      style={{
        position: "absolute",
        zIndex: 999,
        width: "100%",
        height: "100%",
      }}
    >
      <Cover
        width="200px"
        height="200px"
        background="transparent"
        source={require("../../../assets/check-circle.png")}
      />
      <Title>Congratulations!</Title>
      <Spacer />
      <Text style={{ fontSize: 15 }}>
        Your items are on the way and should arrive shortly
      </Text>
      <Spacer size="50px" />
      <Button block onPress={() => navigate("Feed", { screen: "Orders" })}>
        <Text color="light">Track your order</Text>
      </Button>
    </Box>
  );
};

export default CongratsModal;
