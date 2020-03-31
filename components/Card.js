import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{ ...Styles.card, ...props.style }}>{props.children}</View>
};

const Styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        elevation: 5,
        borderRadius: 10,
    }
});

export default Card;