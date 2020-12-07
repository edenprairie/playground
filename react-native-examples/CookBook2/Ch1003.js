import React from 'react'
import { View, Text } from 'react-native'

export const Title = ({ Message }) => (
    <Text>{Message}</Text>
)

export const Ch1003 = () => (
    <View>
        <Title Message='Example Stateless Component' />
    </View>
)