import React, { Component } from 'react';
import {View, StyleSheet, ImageBackground, Dimensions} from 'react-native';

class SplashScreen extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    setLoadingView = ()=>{
        this.setState({
            loadingView:1
        })
        setTimeout(this.gotohomescreen,(Math.floor(Math.random()*2000)) + 2000)
    }
    componentDidMount(){
        this.setLoadingView()
    }
    gotohomescreen = ()=>{
        this.props.navigation.replace("MainTab")
        this.props.navigation.navigate("MainTab")
    }
    render() {
        return (
            <ImageBackground
            source={require("../../assets/icon/posterPortrait.jpg")}
            style = {{height:Dimensions.get("screen").height,width:Dimensions.get("screen").width}}
            >

            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({})

export default SplashScreen;

