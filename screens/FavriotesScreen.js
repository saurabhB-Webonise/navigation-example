import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux'

//Rendering UI Component
const FavoritesScreen = props => {



    const available = useSelector(state => state.meals.meals)

    // const favMeal = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return <MealList listData={available} navigation={props.navigation} />
};

// Styling section
const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
});


// Exporting for use
export default FavoritesScreen;