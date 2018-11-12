import React from 'react';
import {View } from 'react-native';


const CardSection = (props) => {
    return (
        <View  style = {CardSectionStyle.cardSectionContainerStyle}>
            {props.children}
        </View>
    );
};


const  CardSectionStyle = {
    cardSectionContainerStyle:{
        borderBottomWidth:1,
        padding: 5,
        backgroundColor : '#FFF',
        justifyContent : 'flex-start',
        flexDirection : 'row',
        borderColor : '#DDD',
        position : 'relative'
    }
}

export default CardSection;