
import React from 'react';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavriotesScreen';

import Colors from '../constants/color';
import { Ionicons } from '@expo/vector-icons'
import { Platform, Text } from 'react-native';
import FiltersScreen from '../screens/FiltersScreen';




const defaultStackNavoptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
    headerTitle: 'A Screen'
};

// stack navigator
const MealNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen
}, {

    defaultNavigationOptions: defaultStackNavoptions
});


const FavNav = createStackNavigator({
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavoptions
});

// common code for nav
var tabScreenConfig = {
    Meals: {
        screen: MealNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.primary,
            tabBarLabel:<Text> Meals</Text>
        }

    }, Favorites: {
        screen: FavNav,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor} />
            },
            tabBarColor: Colors.accent
        }
    }
};

const createMaterialBottomTabNavigatorCode = createMaterialBottomTabNavigator(
    tabScreenConfig, {
    activeTintColor: Colors.primary,
    shifting: true,
});

const createBottomTabNavigatorCode = createBottomTabNavigator(
    tabScreenConfig,
    {
        tabBarOptions: {
            activeTintColor: Colors.primary
        }
    });

const MealFavTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigatorCode : createBottomTabNavigatorCode

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    navigationOptions: {
        drawerLabel: 'Filter!'
    },

    defaultNavigationOptions: defaultStackNavoptions
});

const MainNavigator = createDrawerNavigator({
    MealFav: MealFavTabNavigator,
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.primary
    }
});


export default createAppContainer(MainNavigator);