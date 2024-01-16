import {View, Text} from 'react-native'
import React from 'react'
import {NavigationProp} from '@react-navigation/native';  

interface RouterProps {
    navigation: NavigationProp<any, any>
}
const List = ({navigation} : RouterProps ) => {

    const testi = () =>{
        console.log("testing"); 
    }

    testi
    return(
        <View>
            <Text>List</Text>
        </View>
    )
}

export default List; 