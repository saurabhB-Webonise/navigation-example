import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';

import { useSelector } from 'react-redux'

const CategoryMealScreen = props => {
  const catId = props.navigation.getParam('categoryId');

  const available = useSelector(state => state.meals.filteredMeals);


  const displayedMeals = available.filter(meal => meal.categoryIds.indexOf(catId) >= 0);
  return <MealList listData={displayedMeals} navigation={props.navigation} />
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title
  };
};


export default CategoryMealScreen;