import React, { Component } from 'react';
import {View, StyleSheet, Dimensions, PermissionsAndroid, ToastAndroid, Pressable,Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { Marker } from 'react-native-maps';

class MapScreen extends Component {

    constructor(props){
        super(props)
        this.state = {
            userLong:-122.4324,
            userlat:0,
            markers : []
        }
    }
    GetAccidentCoordinate = ()=>{
        fetch("https://kapil829.pythonanywhere.com/api/getcoord").then(res=>{
            res.json().then(e=>{
                this.setState({markers:e.data})
            })
        })
    }
    requestLocation = async()=>{
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    title:"Location",
                    message:
                    "Please allow your loaction",
                    buttonNegative: "Deny",
                    buttonPositive: "Allow"
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED){
                console.log("permission granted")
                
                
            } else {
                console.log("permission deny")
            }
            
        } catch (error) {
            console.warn(error)
        }
    }

    componentDidMount(){
        this.requestLocation()
        this.GetAccidentCoordinate()
        Geolocation.watchPosition(
            (pos)=>{
                console.log(pos)
                this.setState({
                    userLong:pos.coords.longitude,
                    userlat:pos.coords.latitude
                })
            },
            (err)=>{
                console.error(err)
                ToastAndroid.show("Error",ToastAndroid.LONG)
            },
            {distanceFilter:1,enableHighAccuracy:true}
        )
    }

    render() {
        return (
            <View>
                <MapView                  
                style = {{
                        ...StyleSheet.absoluteFillObject,
                        height:Dimensions.get("screen").height,
                        width:Dimensions.get("screen").width
                    }}
                    
                    
                    initialRegion = {{
                        latitude: this.state.userlat,
                        longitude: this.state.userLong,
                        latitudeDelta: 0.0122,
                        longitudeDelta: 0.0121,
                    }}
                    showsUserLocation = {true}

                    provider={PROVIDER_GOOGLE}
                >
                    {this.state.markers.length ? this.state.markers.map((m,idx)=><Marker 
                    key={idx}
                    title = "Your Location" 
                    icon={require("../../assets/icon/car_accid_logo.png")}
                    coordinate={{latitude:parseFloat(m.lat),longitude:parseFloat(m.long)}} />)
                    :<></>}
                    <Marker
                    title = "Your Location" 
                    pinColor = "#aa2211"
                    coordinate = {{latitude:this.state.userlat,longitude:this.state.userLong}}
                    />
                </MapView>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({

})

export default MapScreen;
