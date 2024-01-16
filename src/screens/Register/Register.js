import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {FIREBASE_AUTH} from '../../../FirebaseConfig'

import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';

import PeekingFox from '../../../assets/Register/peekingFox.png'
import chatbox from '../../../assets/Register/chatbox.png'
import chatboxtext from '../../../assets/Register/yukmulaitext.png'
import google from '../../../assets/Register/google.png'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [namalengkap, setNamaLengkap] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH; 

    const handleForgotPassword = () => {
        // Implement your logic here
        console.log('Lupa Password pressed!');
    };

    const RegisterPressed = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, username, password);
            console.log(response);
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
                    <View className="">
                        <Image className="left-5" source={chatbox} />
                        <Image className="absolute top-4 left-12 bottom-0" source={chatboxtext} />
                    </View>
                    <Image className="right-9 w-50 h-50" source={PeekingFox} />
                </View>
            </View>
            <View className="flex flex-col gap-5 h-full py-10 px-10">
                <CustomInput
                    placeholder="Nama Lengkap"
                    value={namalengkap}
                    setValue={setNamaLengkap}
                />

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

                <CustomButton onPress={RegisterPressed} roundCorner='10' text='DAFTAR' warnaFont='#FFD4B8' jenisFont='NunitoBold' bgColor='#8B340D' sizeX='100%' sizeY='5' />

                <Text className="text-center text-xl text-buttonColor">ATAU</Text>
                <TouchableOpacity className="items-center" onPress={RegisterPressed}>
                    <Image source={google} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Register;
