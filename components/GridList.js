import React from 'react';
import { FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';

const GridList = props => {
    const renderGridItem = itemData => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={props.onSelect.bind(this, itemData)}
            />
        );
    };

    return <FlatList
        keyExtractor={(item, index) => item.id}
        data={props.listData}
        renderItem={renderGridItem}
        numColumns={2}
    />
};

export default GridList;