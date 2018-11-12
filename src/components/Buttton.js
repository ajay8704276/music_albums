import React from 'react';
import {Text,TouchableOpacity }  from 'react-native';

const Button = (props) =>{

    return(
        <TouchableOpacity onPress = {props.onPress} style = {Styles.buttonStyle}>
            <Text style = {Styles.textStyle}>{props.children}</Text>
        </TouchableOpacity>
    );
};

const Styles = {

    buttonStyle :{
        flex : 1,
        alignSelf : 'stretch',
        backgroundColor : '#FFF',
        borderRadius : 5,
        borderWidth :1,
        borderColor : '#007AFF',
        marginLeft :5,
        marginRight : 5
    },
    textStyle :{
        alignSelf : 'center',
        color : '#007AFF',
        fontSize : 16,
        fontWeight : '600',
        paddingTop : 10,
        paddingBottom : 10
    }
};


export default Button;