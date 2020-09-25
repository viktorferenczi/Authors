import {Button, SafeAreaView, StatusBar, StyleSheet, Text} from "react-native";
import React from "react";

export const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffffff" translucent = {true}/>
            <Text style={styles.WelcomeText}>Welcome</Text>
            <Text style={styles.HomeText}>
                This is a practice app made by {"\n"} Viktor Ferenczi & Milán Molnár.
            </Text>
            <Text style={styles.HomeText}>
                Focuses on the basics of mobile development.
            </Text>
            <Button
                title="Next >"
                onPress={ () => navigation.navigate('AuthorList') }
            />
            <Text style={styles.VersionText}>
                Alpha Build: 1.0.1
            </Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        alignSelf: "center",
        marginBottom: -30,
        marginTop: 5
    },
    TouchableOpacityStyle: {
        position: 'absolute',
        width: 75,
        height: 75,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
    },
    FloatingButtonStyle: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
    },
    WelcomeText:{
        textAlign:"center",
        fontSize:25,
        marginTop: 20,
        marginBottom:30
    },
    HomeText:{
        textAlign:"center",
        fontSize:20,
    },
    VersionText:{
        paddingTop:"100%",
        textAlign: "left"
    }
});




