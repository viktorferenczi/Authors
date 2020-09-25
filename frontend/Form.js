import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    Alert,
    Vibration,
    FlatList,
    RefreshControl,
    Image
} from 'react-native';
import {hasValidationError, validateFields} from "./Validation";
import Axios from "axios";
import FlatListItem from "./FlatListItem";


const getInitialStateValues = (fieldKeys,author) => {
    const state = {};

    if (author) {
        const authorValues = Object.values(author);
        let j = 1;
        for (let i = 0; i < fieldKeys.length; i++) { //case: update
            state[fieldKeys[i]] = authorValues[j];
            j++;
        }
    } else {
        fieldKeys.forEach((key) => { //case: creation
            state[key] = '';
        });
    }

    return state;
};

const getInitialStateErrors = (fieldKeys) => {
    const state = {};
    fieldKeys.forEach((key) => {
        state[key] = '';
    });

    return state;
};

const Form = ({ fields, afterSubmit, navigation, author, refresh, jumpToTop }) => {
    const fieldKeys = Object.keys(fields);
    const [values, setValues] = useState(getInitialStateValues(fieldKeys,author));
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [validationErrors, setValidationErrors] = useState(
        getInitialStateErrors(fieldKeys),
    );

    const onChangeValue = (key, value) => {
        const newState = { ...values, [key]: value };
        setValues(newState);

        if (validationErrors[key]) {
            const newErrors = { ...validationErrors, [key]: '' };
            setValidationErrors(newErrors);
        }
    };

    const getValues = () => {
        return fieldKeys.map((key) => values[key]);
    };

    const submit = async () => {
        setErrorMessage('');
        setValidationErrors(getInitialStateErrors(fieldKeys));

        const errors = validateFields(fields, values);
        if (hasValidationError(errors)) {
            return setValidationErrors(errors);
        }

        try {
            //alexios post
            const values = getValues();
            const name = values[0];
            const email = values[1];
            const location = values[2];
            const github = values[3];
            const authorJSON = {
                "name" : name,
                "email" : email,
                "location" : location,
                "github" : github,
                "twitter" : "",
                "latest_article_published" : ""
            }

            if(author){ //update
                Vibration.vibrate();
                Axios.put("http://crudmobilebackendapi-env.eba-64pkmxse.us-east-2.elasticbeanstalk.com/api/authors/"+author.authorId, authorJSON)
                    .then(navigation.navigate("AuthorList")).then(refresh);
            }else{ //create
                Vibration.vibrate();
                Axios.post("http://crudmobilebackendapi-env.eba-64pkmxse.us-east-2.elasticbeanstalk.com/api/authors", authorJSON)
                    .then(navigation.navigate("AuthorList")).then(refresh).then(jumpToTop.current.scrollToOffset({ animated: true, offset: 0 }));
            }
        } catch (e) {
            setErrorMessage(e.message);
        }
    };


    return (
        <View style={styles.positionItems}>
                <Image
                    style={styles.FormImage}
                    source={{uri: author ? "https://i.imgur.com/bGqWSpG.png" : "https://i.imgur.com/oXPuh1S.png"
                    }}
                />
            <Text>{successMessage}</Text>
            <Text>{errorMessage}</Text>
            {fieldKeys.map((key) => {
                const field = fields[key];
                const fieldError = validationErrors[key];
                return (
                    <View key={key} style={styles.container}>
                        <Text style={styles.formLabel}>{field.label}</Text>
                        <TextInput style={styles.formInput}
                            {...field.inputProps}
                            value={values[key]}
                            onChangeText={(text) => onChangeValue(key, text)}
                        />
                        <Text style={styles.formError}>{fieldError}</Text>
                    </View>
                );
            })}
            <Button style={styles.formButton} title="Submit"  onPress={submit} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    formLabel: {
        color: 'black',
        fontSize: 22,
        textAlign: 'center'
    },
    formInput: {
        marginTop:5,
        borderColor: 'gray',
        borderWidth: 0.9,
        fontSize: 20,
        paddingLeft:9,
        borderRadius: 10,
        height: 40,
        width: '80%'
    },
    formError: {
        color:'red'
    },
    FormImage:{
        resizeMode: 'contain',
        width: 100,
        marginTop: 20,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50
    },
});

export default Form;
