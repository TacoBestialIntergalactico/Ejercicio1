import { StyleSheet, View, Text } from "react-native";

const Beacon = () => {
    return (
        <View
            style={Styles.cont}>
            <Text style={Styles.textB}>
                BeaconScreen
            </Text>
        </View>
    );
};

const Styles = StyleSheet.create({
    cont: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
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

export default Beacon;