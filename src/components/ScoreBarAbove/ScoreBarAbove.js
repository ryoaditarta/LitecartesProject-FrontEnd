import React from 'react';
import {View, Text, SafeAreaView,} from 'react-native';

import tw from 'twrnc'; 

const ScoreBarAbove = ({diamonds, energy, tier, name, school, image}) => {
    return(
        
        <View style={tw`gap-1 px-5 items-center flex-row h-20% w-full rounded-br-5 rounded-bl-5 bg-black`}>
            <View style={tw`rounded-4 h-40% w-20% bg-white`}></View>
            <View style={tw`flex-col rounded-4 h-40% w-40% bg-white`}>
                <Text>{name}</Text>
                <Text>{school}</Text>
            </View>
            <View style={tw`flex-col rounded-4 h-40% w-40% bg-white`}>
                <View>
                    <View>
                        {diamonds}
                    </View>
                    <View>
                        {energy}
                    </View>
                </View>
                <View>
                    {tier}
                </View>
            </View>
        </View>
    )
}

export default ScoreBarAbove; 