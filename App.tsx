import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { TailwindProvider, useTailwind } from "tailwind-rn";
import CustomersScreen from "./screens/CustomersScreen";
import utilities from "./tailwind.json";
import RootNav from "./nav/RootNav";

export default function App() {
  const tailwind = useTailwind();

  return (
    // @ts-ignore

    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNav
          Main={undefined}
          Modal={{
            userId: "",
            name: "",
            order: {
              order: undefined,
            },
          }}
        />
      </NavigationContainer>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
