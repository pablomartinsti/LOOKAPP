import { Box, Text, Touchable, Spacer } from "../../components/index";
import { StyleSheet } from "react-native";
import { colors } from "../../styles/theme.json";
import { useEffect, useState } from "react";

const Picker = ({
  options = [],
  initialValue = "",
  title = "",
  onchange = (value) => {},
}) => {
  const [selected, setSelected] = useState("");
  useEffect(() => {
    setSelected(initialValue);
  }, []);
  return (
    <>
      <Text bold color="dark">
        {title}
      </Text>
      <Box row fluid height="50px">
        {options?.map((opt) => (
          <Touchable
            onPress={() => {
              setSelected(opt?.value);
              onchange(opt?.value);
            }}
            style={[
              styles.base,
              styles[selected === opt?.value ? "checked" : "unchecked"],
            ]}
          >
            <Text
              style={selected === opt?.value ? styles.textChecked : undefined}
            >
              {opt?.label}
            </Text>
          </Touchable>
        ))}
      </Box>
    </>
  );
};

export default Picker;

const styles = StyleSheet.create({
  base: {
    maxWidth: 45,
    height: 45,
    marginRight: 10,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  unchecked: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: colors.muted,
  },
  checked: {
    backgroundColor: colors.primary,
  },
  textChecked: {
    color: colors.light,
  },
});
