import React from 'react';
import { Image, View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { Colors } from '../constants/color';
import DefaultText from '../components/DefaultText';
import { useSelector } from 'react-redux';



const ListItem = props => {


    return <View style={Styles.listItem}>
        <DefaultText>{props.children}</DefaultText>

    </View>

};

const MealDetailScreen = props => {

    const mealId = props.navigation.getParam('mealId');
    const available = useSelector(state => state.meals.meals)

    const selectedMeal = available.find(meal => meal.id === mealId);

    return <ScrollView>

        <Image source={{ uri: selectedMeal.imageUrl }} style={Styles.image} />
        <View style={Styles.details}>
            <DefaultText>{selectedMeal.duration}m</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={Styles.title}>Ingrediants</Text>

        {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}

        <Text style={Styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}

        <View style={Styles.screen}>
        </View>

    </ScrollView>
};


MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam('mealId');
    console.log("" + mealId)
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerStyle: {
            backgroundColor: 'grey'
        },
        headerRight: (< HeaderButtons HeaderButtonComponent={CustomHeaderButton} >
            <Item title="Favorite"
                iconName="ios-star"
                onPress={
                    () => {
                        console.log('Mark Favorite')
                    }
                } />
        </HeaderButtons>)
    };
}

const Styles = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    },
    image: {
        width: '100%',
        height: 200,
    },
    details: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-around',
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
    }

});

export default MealDetailScreen;