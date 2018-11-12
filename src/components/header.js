import React from 'react';
import {Text , View} from 'react-native';

const Header = (props) => {
    const {headerTextStyles,headerViewStyle } = styles;
    return (
        <View style = {headerViewStyle}>
            <Text style = {headerTextStyles}>{props.headerText}</Text>
        </View>
    );
}


const styles = {
    headerTextStyles :{
      fontSize :20
    },

    headerViewStyle :{
        backgroundColor : '#F8F8F8',
        justifyContent : 'center',
        alignItems:'center',
        height : 60,
        padding:15,
        shadowColor:'#000',
        shadowOffset:{width:0 , height:2},
        shadowOpacity:0.2,
        elevation : 2,
        position :'relative'
        
    }
  };

export default Header;