import React, { Component } from 'react';
import {View, StyleSheet, Text, Linking} from 'react-native';
import { SocialIcon } from 'react-native-elements'

class About extends Component {
    render() {
        return (
            <View>
                <View style = {{padding:10}}>
                    <Text style = {styles.heading}>About US</Text>
                    <Text style = {styles.about}>
                    We "Team Sarathi" are devoted to innovate constantly to improve human life. Right now we are dealing with the prominent problem of road transit system safety as Vehicles made travelling easy & comfortable for us but everything has demerits as well. In india only thousand of road accidents occur every year, weather like fog and geographical location play vital role in it also accidents in remote areas
contribute to casualities due to non- availability of help. We are coming with the idea to reduce and monitor these sort of accidents by our innovative concept and merging technologies like IOT, Cloud, Android, Web and Blockchain.
                    </Text>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    heading:{
        fontFamily:"Orbitron-Bold",
        fontSize:40,
    },
    about:{
        fontFamily:"Orbitron-Bold",
        fontSize:15,
        lineHeight:25
    }
})

export default About;
