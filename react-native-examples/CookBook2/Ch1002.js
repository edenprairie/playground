import React, { Component } from 'react'
import { View, Text } from 'react-native'
export class Ch1002 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "Sriraman"
        }
    }
    render() {
        return (
            <View>
                <Text> Hi, {this.state.name}</Text>
            </View>
        )
    }
}