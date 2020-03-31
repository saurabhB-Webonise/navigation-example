import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/color';

const FilterSwitch = props => {
    return <View style={Styles.filterContainer}>
        <Text>{props.label} </Text>
        <Switch
            trackColor={{ true: Colors.primary }}
            thumbColor={Colors.accent}
            value={props.state} onValueChange={props.onChange} />
    </View>
};

const FiltersScreen = props => {

    const { navigation } = props;

    const [isGlutenFree, setGlutenFree] = useState(false);
    const [isLactosFree, setLactosFree] = useState(false);
    const [isVegan, setVegan] = useState(false);
    const [isVegeterian, setVegiterian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutednFree: isGlutenFree,
            lactosFree: isLactosFree,
            vegan: isVegan,
            vegeterian: isVegeterian
        }
        console.log(appliedFilters)
    }, [isVegeterian, isGlutenFree, isVegan, isLactosFree]);


    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        })
    }, [saveFilters, navigation]);

    return <View style={Styles.screen}>
        <Text style={Styles.title}>Available filter/ Restriction</Text>
        <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={newValue => setGlutenFree(newValue)} />
        <FilterSwitch label='Lactos-free' state={isLactosFree} onChange={newValue => setLactosFree(newValue)} />
        <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setVegan(newValue)} />
        <FilterSwitch label='vegeterian' state={isVegeterian} onChange={newValue => setVegiterian(newValue)} />
    </View>
};

FiltersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "filter screen",
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title="Save"
                iconName="ios-save"
                onPress={navData.navigation.getParam('save')} />
        </HeaderButtons>
    }
};

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: 'center',
    }, title: {

        fontSize: 22,
        textAlign: 'center',
        margin: 10,
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
    }
});

export default FiltersScreen;