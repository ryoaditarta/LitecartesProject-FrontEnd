import React, { useState } from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';
import { AntDesign } from '@expo/vector-icons';

import tw from 'twrnc';

const CustomProgressBar = () => {
    const [progress, setProgress] = useState(0);

    let temp = 0;

    const nextSoalsButtonClicked = () => {
        if (progress < 100) {
            setProgress(progress + 25);
            temp += 25;
        } else {
            setProgress(0);
            temp = 0;
        }
    };

    const getColor = () => {
        return '#F37704';
    };

    return (
        <View style={[tw`flex-row items-center gap-5`, { backgroundColor: '#FFD4B8' }]}>
            <CustomButton sizeX={7} sizeY={9} roundCorner={1} text={<AntDesign name="left" size={10} color="white" />} onPress={nextSoalsButtonClicked} />
            <View style={[tw`justify-center w-70% h-7 rounded-10`, { backgroundColor: '#FFD4B8', borderColor: '#F37704', borderWidth: 1, borderStyle: 'dashed' }]}>
                <View style={[tw`h-full w-full rounded-10 z-10`, { backgroundColor: getColor(), width: `${progress}%` }]} />
            </View>
            <Text>{progress / 25}/{4}</Text>
        </View>
    );
};

export default CustomProgressBar;
