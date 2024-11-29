import React from "react";

import { ScrollView, Text, Touchable } from "../index.js";
import { colors } from "../../styles/theme.json";

const Tabs = ({ tabs = [], active = "", onChange = (tab) => {} }) => {
  const totalTabs = tabs?.length;
  const activeTabStyle = {
    borderBottomWidth: 2.5,
    borderBottomColor: colors.black,
  };
  return (
    <ScrollView
      horizontal
      style={{ maxHeight: 65, backgroundColor: colors.light }}
    >
      {tabs?.map((tab) => (
        <Touchable
          onPress={() => onChange(tab.value)}
          hasPadding
          style={[
            { minWidth: `${100 / totalTabs}%`, alignItems: "center" },
            active === tab.value ? activeTabStyle : {},
          ]}
        >
          <Text color={active === tab.value ? "black" : undefined}>
            {tab.label}
          </Text>
        </Touchable>
      ))}
    </ScrollView>
  );
};

export default Tabs;
