import React, { useContext, useEffect, useState } from "react";
import { StatusBar, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Title, Text, Button, Box, Spacer } from "../../components";

import { AppContext } from "../../contexts/app";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(AppContext);

  const checkLogged = async () => {
    //AsyncStorage.clear();
    setLoading(true);

    const loggedUser = await AsyncStorage.getItem("@user");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
      navigation.replace("Feed");
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLogged();
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Box hasPadding align="center" background="dark">
        <Box align="center" fluid justify="center">
          <Title color="light" variant="big" bold>
            LOOKAPP
          </Title>
          <Spacer />
          <Text align="center">
            Stay on top of the fashion world and buy your favorite looks.
          </Text>
          <Spacer />
          {loading && (
            <>
              <Spacer size="40px" />
              <ActivityIndicator size="large" />
            </>
          )}
        </Box>

        {!loading && (
          <Box align="center" fluid justify="flex-end">
            <Spacer size="150px" />
            <Button block onPress={() => navigation.navigate("Signin")}>
              <Text color="light">Sing my account</Text>
            </Button>
            <Spacer size="20px" />
            <Text
              underline
              color="light"
              onPress={() => navigation.navigate("Signup")}
            >
              Create new account
            </Text>
            <Spacer size="70px" />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Home;
