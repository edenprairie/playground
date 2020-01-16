import React, { Component } from 'react';
import { Text, View } from 'react-native';

export class Ch0602 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myInteger: 0
        }
    }
    render() {
        return (
            <View>
                <Text>Integer: {this.state.myInteger}</Text>
            </View>
        )
    }
}