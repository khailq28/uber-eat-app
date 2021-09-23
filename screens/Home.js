import React from "react";
import { SafeAreaView, View } from "react-native";
import HeaderTabs from "../components/HeaderTabs";

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee" }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
            </View>
        </SafeAreaView>
    );
}
