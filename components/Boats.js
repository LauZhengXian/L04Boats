import {Image, Text, View} from "react-native";
import {FontAwesome6} from "@expo/vector-icons";
import React from "react";


const Boats = ({name, description, icon_name, icon_color ,picture}) => {
    return (
        <View>
            <Text></Text>
            <Image  source={picture}
                    style={{width:400,height:500}}/>
            <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
                Boat: {name}
            </Text>
            <Text>
                <FontAwesome6 name={icon_name} size={40} color={icon_color}/>
            </Text>

            <Text style={{fontSize: 16, color: 'black'}}>
                {description}
            </Text>
        </View>
    );
};

export default Boats;