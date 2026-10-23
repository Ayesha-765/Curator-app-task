import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import "../../global.css"
import { Stack } from "expo-router";
// import { StackScreen } from "expo-router/build/layouts/stack-utils";

const AppShell=()=>{
  return(
    <View className="flex-1 bg-background">
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "transparent" },
      }}
    >

      <Stack.Screen name="index" />
        <Stack.Screen name="splash" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="details/[id]" />
        <Stack.Screen name="upcoming" />
        <Stack.Screen name="checkout" />
        <Stack.Screen name="success" />
        <Stack.Screen name="notifications" />
        <Stack.Screen name="notification/[id]" />
      </Stack>
      <StatusBar style="dark" />
    </View>
  );
};


export default function RootLayout() {
  return <AppShell />
}
