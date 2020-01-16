import React, { Component } from 'react';
import {
    Modal,
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';
const styles0501 = StyleSheet.create({
    mainContainer: {
        marginTop: 22,
    },
    modalContainer: {
        marginTop: 22,
    },
});
export class Ch0501 extends Component {
    constructor() {
        super();
        this.state = {
            visibility: false,
        };
    }
    setModalVisibility(visible) {
        this.setState({
            visibility: visible,
        });
    }
    render() {
        return (
            <View style={styles0501.mainContainer}>
                <Modal
                    animationType={'slide'}
                    transparent={false}
                    visible={this.state.visibility}
                >
                    <View style={styles0501.modalContainer}>
                        <View><Text>I'm a simple Modal</Text>
                            <Button
                                color="#000"
                                onPress={() => this.setModalVisibility(!this.state.visibility)}
                                title="Hide Modal"
                            />
                        </View>
                    </View>
                </Modal>
                <Button
                    color="#000"
                    onPress={() => this.setModalVisibility(true)}
                    title="Show Modal"
                />
            </View>
        );
    }
}