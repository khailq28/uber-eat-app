import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderTabs() {
    const [activeTabs, setActiveTabs] = useState("Delivery");

    return (
        <View style={styles.header}>
            <HeaderButton
                text="Delivery"
                activeTabs={activeTabs}
                setActiveTabs={setActiveTabs}
            />
            <HeaderButton
                text="Pickup"
                activeTabs={activeTabs}
                setActiveTabs={setActiveTabs}
            />
        </View>
    );
}

const HeaderButton = (props) => (
    <TouchableOpacity
        style={{
            backgroundColor:
                props.activeTabs === props.text ? "black" : "white",
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
        }}
        onPress={() => props.setActiveTabs(props.text)}
    >
        <Text
            style={{
                color: props.activeTabs === props.text ? "white" : "black",
                fontSize: 15,
                fontWeight: "bold",
            }}
        >
            {props.text}
        </Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignSelf: "center",
        // justifyContent: "center",
        // alignItems: "center",
    },
});
