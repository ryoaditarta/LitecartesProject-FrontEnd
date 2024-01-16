import React, { useState } from 'react';
import { View, Text, Pressable, Platform, Image } from 'react-native';
import tw from 'twrnc';

const CustomOptionButton = ({ text, onPress, size, roundCorner, color, textColor }) => {
    const [isPressed, setIsPressed] = useState('#F9BD85');


    const handlePressIn = () => {
        if(isPressed==='#8B340D'){
            setIsPressed('#F9BD85');
        }else{
            setIsPressed('#8B340D');
        }
    };

    const handlePressOut = () => {
    };

    return (
        <Pressable
            onPress={onPress}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            android_ripple={{ color: '#F9BD85' }}
            style={({ pressed }) => [
                tw`h-${size} w-full rounded-${roundCorner} p-2 justify-center`,
                { backgroundColor: isPressed},
            ]}
        >
            <Text style={[tw`text-center text-xl font-bold`, { color: textColor }]}>{text}</Text>
        </Pressable>
    );
};

export default CustomOptionButton;
