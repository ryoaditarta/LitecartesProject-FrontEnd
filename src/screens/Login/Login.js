import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from '../../../FirebaseConfig'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();


import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

import PeekingFox from '../../../assets/Login/PeekingFox.png'
import chatbox from '../../../assets/Login/chatbox.png'
import chatboxtext from '../../../assets/Login/yukmasuktext.png'
import google from '../../../assets/Login/google.png'
import { signInWithEmailAndPassword } from 'firebase/auth';

const Login = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const handleForgotPassword = () => {
        // Implement your logic here
        console.log('Lupa Password pressed!');
    };

    const LoginPressed = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, username, password);
            console.log(response);
            navigation.navigate('Pretest'); 

        } catch (error) {
            console.log("Error Occured");
            alert('Registration Failed' + error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <View className="flex-1 w-full bg-cream">
            <View className="justify-end h-1/3 rounded-b-3xl bg-litecartesOrange">
                <View className="absolute flex-row items-center w-full">
                    <Image className="right-1 w-50 h-50" source={PeekingFox} />
                    <View className="">
                        <Image className="right-12" source={chatbox} />
                        <Image className="right-5 bottom-9" source={chatboxtext} />
                    </View>
                </View>
            </View>
            <View className="flex flex-col gap-5 h-full py-10 px-10">
                <CustomInput
                    placeholder="Username atau Email"
                    value={username}
                    setValue={setUsername}
                />

                <CustomInput
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true}
                />

                <TouchableOpacity className="my-5" onPress={handleForgotPassword}>
                    <Text className="text-right text-buttonColor">Lupa Password?</Text>
                </TouchableOpacity>

                <CustomButton onPress={LoginPressed} roundCorner='10' text='MASUK' warnaFont='#FFD4B8' jenisFont='NunitoBold' bgColor='#8B340D' sizeX='100%' sizeY='5' />

                <Text className="text-center text-xl text-buttonColor">ATAU</Text>
                <TouchableOpacity className="items-center" onPress={LoginPressed}>
                    <Image source={google} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Login;
