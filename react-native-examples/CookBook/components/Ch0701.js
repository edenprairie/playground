import React, { Component } from 'react';
import { Text } from 'react-native';

// import { Text, Navigator } from 'react-native';
export class Ch0701 extends Component {
    render() {
        return (
            <Text>Navigator is deprecated</Text>
            // <Navigator
            //     initialRoute={{ title: 'Awesome Scene', index: 0 }}
            //     renderScene={(route, navigator) =>
            //         <Text>Hello {route.title}!</Text>
            //     }
            //     style={{ padding: 100 }}
            // />
        );
    }
}