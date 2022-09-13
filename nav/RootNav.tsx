import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNav from "./TabNav";

export type RootNavProps = {
  Main: undefined;
  Modal: {
    userId: string;
    name: string;
    order: {
      order: any;
    };
  };
};

const RootStack = createNativeStackNavigator();

const RootNav = ({}: RootNavProps) => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Group>
        <RootStack.Screen component={TabNav} name="main" />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNav;
