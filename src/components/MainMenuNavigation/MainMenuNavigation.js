import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const MainMenuNavigation = ({ menuSekarang, navigation }) => {

    const HomeIconPressed = () => {
        navigation.navigate('MainMenu');
    }

    const TrophyIconPressed = () => {
        console.log("leaderboard pressed");
        navigation.navigate('Leaderboard');
    }
    const EditOutlinePressed = () => {

    }
    const GroupPressed = () => {

    }
    const AccountPressed = () => {

    }

    const icons = [
        { icon: <MaterialCommunityIcons name="home-heart" size={30} color={menuSekarang === 0 ? "#8B340D" : "#FFD8D8"} />, onPress: HomeIconPressed },
        { icon: <Ionicons name="trophy" size={28} color={menuSekarang === 1 ? "#8B340D" : "#FFD8D8"}  />, onPress: TrophyIconPressed },
        { icon: <MaterialCommunityIcons name="square-edit-outline" size={30} color={menuSekarang === 2 ? "#8B340D" : "#FFD8D8"} />, onPress: EditOutlinePressed },
        { icon: <MaterialCommunityIcons name="account-group" size={30} color={menuSekarang === 3 ? "#8B340D" : "#FFD8D8"} />, onPress: GroupPressed },
        { icon: <MaterialCommunityIcons name="account" size={30} color={menuSekarang === 4 ? "#8B340D" : "#FFD8D8"} />, onPress: AccountPressed },
    ];

    return (
        <View className="bg-litecartesOrange" style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', borderTopLeftRadius: 30, borderTopRightRadius: 30, height: '8%' }}>
            {icons.map((item, index) => (
                <TouchableOpacity key={index} onPress={item.onPress}>
                    {item.icon}
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default MainMenuNavigation;
