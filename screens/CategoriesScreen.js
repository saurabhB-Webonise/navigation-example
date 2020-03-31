import React from 'react';
import { StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import GridList from '../components/GridList';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {

    const onGridCellClick = itemData => {
        props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
                categoryId: itemData.item.id
            }
        });
    };

    return <GridList listData={CATEGORIES} onSelect={onGridCellClick} />

};

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft:()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
             }} />
        </HeaderButtons>
    }
};

const Styles = StyleSheet.create({
    screen: {
    }
});

export default CategoriesScreen;