import { StyleSheet, View, Text } from "react-native";
import Beacon from "./Beacon";

const Options = () => {
    return (
        <View
            style={Styles.cont}>
            <Text style={Styles.textB}>
                Configuration Screen
            </Text>
            <Beacon/>
        </View>
    );
};

const Styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        color: 'white',
        fontSize: 24,
        fontStyle: 'italic',
    },
    textB: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    }
});

export default Options;