import React from "react";
import { SafeAreaView, View } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
    return (
        <SafeAreaView style={{ backgroundColor: "#eee" }}>
            <View style={{ backgroundColor: "white", padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <Categories />
        </SafeAreaView>
    );
}
