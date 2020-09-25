import Form from "../Form";
import {validateContent, validateEmail, validateLength} from "../Validation";
import React from "react";

export const UpdateScreen = ({ route, navigation }) => {

    const author = route.params;
    const refresh = route.params.refresh;

    return <Form
        navigation={navigation}
        author={author}
        refresh={refresh}
        fields={{
            name: {
                label: 'Name',
                inputProps: {
                },
                validators: [validateContent, validateLength],
            },
            email: {
                label: 'Email',
                inputProps: {
                    keyboardType: 'email-address',
                },
                validators: [validateContent, validateLength, validateEmail],
            },
            location: {
                label: 'Location',
                inputProps: {
                },
                validators: [validateContent, validateLength],
            },
            github: {
                label: 'Github',
                inputProps: {
                },
                validators: [validateContent, validateLength],
            },
        }}/>
};
