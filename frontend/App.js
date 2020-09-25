import React from 'react';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import {HomeScreen} from "./Screens/HomeScreen";
import {UpdateScreen} from "./Screens/UpdateScreen";
import {CreateAuthorScreen} from "./Screens/CreateAuthorScreen";
import {AuthorListScreen} from "./Screens/AuthorListScreen";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{ title: 'Home' }}
                />

                <Stack.Screen
                    name="AuthorList"
                    component={AuthorListScreen}
                    options={{ title: 'Author List' }}
                />

                <Stack.Screen
                    name="CreateAuthor"
                    component={CreateAuthorScreen}
                    options={{ title: 'Create Author' }}
                />

                <Stack.Screen
                    name="Update"
                    component={UpdateScreen}
                    options={{ title: 'Update Author' }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
