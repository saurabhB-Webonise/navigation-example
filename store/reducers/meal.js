import MEALS from '../../data/dummy-data'

const intialState = {
    meals: MEALS,
    filterMeal: MEALS,
    favoritesMeal: []

}

const mealReducer = (state = intialState, actions) => {

    return state;
}

export default mealReducer; 