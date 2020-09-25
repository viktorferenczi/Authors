import React, {useEffect, useState} from "react";
import Axios from "axios";
import FlatListItem from "../FlatListItem";
import {
    ActivityIndicator,
    FlatList, Image,
    RefreshControl,
    SafeAreaView,
    StatusBar, StyleSheet,
    TouchableOpacity,
    View
} from "react-native";


export const AuthorListScreen = ({ navigation }) => {

    const [Loading, setLoading] = useState(true);
    const [AuthorList, setAuthorList] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    useEffect(  () => {
        Axios.get("http://crudmobilebackendapi-env.eba-64pkmxse.us-east-2.elasticbeanstalk.com/api/authors")
            .then(response => {
                setAuthorList(response.data);
                setLoading(false);
            });
    },[]);

    //refresh
    const onRefresh = React.useCallback(async () => {
        setRefreshing(true);
        Axios.get("http://crudmobilebackendapi-env.eba-64pkmxse.us-east-2.elasticbeanstalk.com/api/authors")
            .then(response => {
                setAuthorList(response.data);
            });
        setRefreshing(false);
    }, [refreshing]);


    //create button onclick
    const clickHandler = () => {
        navigation.navigate('CreateAuthor',
            {
                onRefresh: onRefresh,
                jumpToTop:flatListRef
            });
    }

    const flatListRef = React.useRef(); //flatlist refresh

    return (
        <SafeAreaView style={styles.container}>

            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffffff" translucent = {true}/>

            {Loading ? <ActivityIndicator  style={{height:200}} /> : <View style={{borderBottomColor:"black"}}></View>}

            {AuthorList != null && (
                <FlatList
                    ref={flatListRef}
                    showsVerticalScrollIndicator={false}
                    data={AuthorList}
                    refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
                    renderItem={({item}) =>
                        <FlatListItem
                            item={item}
                            refresh={onRefresh}
                            navigation={navigation}/>}
                />
            )}

            <TouchableOpacity
                activeOpacity={0.3}
                onPress={clickHandler}
                style={styles.TouchableOpacityStyle}>
                <Image
                    source={{ uri: 'https://img.icons8.com/cotton/2x/plus.png' }}
                    style={styles.FloatingButtonStyle}
                />
            </TouchableOpacity>

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
