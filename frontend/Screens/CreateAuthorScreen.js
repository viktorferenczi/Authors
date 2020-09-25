import Form from "../Form";
import {validateContent, validateEmail, validateLength} from "../Validation";
import React from "react";

export const CreateAuthorScreen = ({ route, navigation, }) => {
    return <Form
        jumpToTop={route.params.jumpToTop}
        refresh={route.params.onRefresh}
        navigation={navigation}
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
