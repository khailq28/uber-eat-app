import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";

export default function App() {
    return (
        <View style={styles.main}>
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        marginTop: 20,
    },
});
