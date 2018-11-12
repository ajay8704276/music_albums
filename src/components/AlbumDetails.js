import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Buttton';

const AlbumDetails = (props) => {

    return (
        <Card>
            <CardSection>
                <View style={Styles.thumbnailContainerStyle}>
                    <Image
                        style={Styles.thumbnailStyle}
                        source={{ uri: props.album.thumbnail_image }} />
                </View>
                <View style={Styles.headerContentStyle}>
                    <Text style={Styles.headerTextStyle}>{props.album.title}</Text>
                    <Text>{props.album.title}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={Styles.imageStyle} source={{ uri: props.album.image }} />
            </CardSection>
            <CardSection>
                <Button onPress={() => Linking.openURL(props.album.url)}>
                    Buy Now!!
                </Button>
            </CardSection>
        </Card>
    );
};

const Styles = {

    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    headerTextStyle: {
        fontSize: 18
    },

    imageStyle: {
        height: 300,
        flex: 1,
        width: null

    }
};

export default AlbumDetails;