import React from 'react';
import {View, Text} from 'react-native';

import tw from 'twrnc'
import CustomOptionButton from '../CustomOptionButton/CustomOptionButton';

const ListOption = () =>{
    return(
        <View style={[tw`w-full gap-5`, {}]}>
            <CustomOptionButton size={15} roundCorner={4} text='Pemula, tapi semangat!' color='#F9BD85' textColor='white'/>
            <CustomOptionButton size={15} roundCorner={4} text='Oke lah, cukup nyaman' color='#F9BD85' textColor='white'/>
            <CustomOptionButton size={15} roundCorner={4} text='Sudah bisa, sih!' color='#F9BD85' textColor='white'/>
            <CustomOptionButton size={15} roundCorner={4} text='Ahli banget, nih!' color='#F9BD85' textColor='white'/>
        </View>
    )
}

export default ListOption;