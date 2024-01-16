import react from 'react';
import { View, Text, Pressable } from 'react-native';
import {useFonts} from 'expo-font';


const LevelButton = ({warnaFont, warnaTepi, warnaDalam, isiDalam, onPress}) => {
    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
        <Pressable onPress={onPress} className="w-[7vh] h-[7vh] rounded-full items-center justify-center" style={{ borderColor: warnaTepi ,backgroundColor: warnaDalam,borderWidth: 7}}>
            <Text className=" font-[NunitoBold] text-2xl" style={{color: warnaTepi}} >{isiDalam}</Text>
        </Pressable>
    )
}

export default LevelButton; 