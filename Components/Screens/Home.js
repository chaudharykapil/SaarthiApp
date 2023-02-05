import React, { Component } from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import { Card } from 'react-native-paper';

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            curTime:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval(() => {this.setState({curTime: new  Date().toLocaleTimeString()})}, 1000);
    }
    
    render() {
         
        return (
            <View style = {{flex:1,flexDirection:"column"}}>
                <View style = {styles.cardview}>
                    <View style = {{flex:1.5,flexDirection:"row"}}>
                        <View style = {styles.cardinner}>
                            <Text style = {{fontSize:60,fontFamily:"Orbitron-Bold",opacity:0.7}}>{this.state.curTime}</Text>
                        </View>
                        
                    </View>
                    <View style = {{flex:2}}>
                        <View style = {{flex:1.2,justifyContent:"center",alignItems:"center"}}>
                            <View style = {{flexDirection:"row",justifyContent:"center"}}>
                                <Text style = {{...styles.locationText}}>Longitude: </Text>
                                <Text style = {{...styles.locationText}}>77.533211</Text>
                            </View>
                            <View style = {{flexDirection:"row",justifyContent:"center"}}>
                                <Text style = {{...styles.locationText}}>Location: </Text>
                                <Text style = {{...styles.locationText}}>28.693258</Text>
                            </View>
                            <View style = {{flexDirection:"row",justifyContent:"center",alignItems:"flex-end"}}>
                                <Text style = {{fontSize:60,fontFamily:"Orbitron-Bold",opacity:0.7}}>0</Text>
                                <Text style = {{fontFamily:"Orbitron-Bold",opacity:0.7,marginVertical:20}}>KM/H</Text>
                            </View>
                            <View>
                                <Text>Speed</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardview:{
        flex:1,
        justifyContent:"center",
        
        margin:0,
        borderRadius:0,
    },
    cardinner:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    locationText:{
        flexDirection:"row",
        fontSize:20,
        fontWeight:"bold",
        marginHorizontal:2,
        fontFamily:"Orbitron-Bold"

    }
})

export default Home;
