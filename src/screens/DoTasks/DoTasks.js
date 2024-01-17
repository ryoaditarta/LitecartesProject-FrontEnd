import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Animated } from 'react-native';
import { useFonts } from 'expo-font';
import { AntDesign } from '@expo/vector-icons';

import NextAndPrevButton from '../../components/NextAndPrevButton/NextAndPrevButton';
import PilihanJawaban from '../../components/PilihanJawaban/PilihanJawaban';

const getCorrectAnswer = (questions, answer) => {
    const total = [0, 0];
    for (let i = 0; i < questions.length; i++) {
        if (parseInt(questions[i].answer) === answer[i]) {
            total[0]++;
        } else {
            total[1]++
        }
    }

    return total
}

const DoTasks = ({ navigation, route }) => {
    let opacity = new Animated.Value(0);
    const [progress, setProgress] = useState(100 / 4);
    const [selectedButton, setSelectedButton] = useState(null);
    const [questions, setQuestions] = useState(null)
    const [jawaban, setJawaban] = useState([]);

    const [fontsLoaded] = useFonts({
        'NunitoReg': require('../../../assets/fonts/Nunito/static/Nunito-Regular.ttf'),
        'NunitoSemiBold': require('../../../assets/fonts/Nunito/static/Nunito-SemiBold.ttf'),
        'NunitoBold': require('../../../assets/fonts/Nunito/static/Nunito-Bold.ttf'),
    });


    const { uid } = route.params;
    console.log(uid);

    useEffect(() => {
        fetch(`http://54.255.34.229:8060/tasks/${uid}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                const arrays = Object.values(data.data.questions_list)
                setQuestions(arrays)
                setProgress(100 / arrays.length);
                setJawaban(Array(arrays.length))
            })
    }, [uid])

    if (!fontsLoaded) {
        return null;
    }

    const animate = easing => {
        opacity.setValue(0);
        Animated.timing(opacity, {
            toValue: 1,
            duration: 1200,
            easing,
            useNativeDriver: true,
        }).start();
    };


    const nextClicked = () => {
        if (progress >= 0 && progress < 100) {
            setProgress(progress + (100 / (questions.length)));
            // jawaban[progress / (100 / progress) - 1] = selectedButton;
            setSelectedButton(null);
        } else {
            // alert('Anda Yakin Ingin Selesai?')
            // for (let i = 0; i < 4; i++) console.log(jawaban[i]);
            const total = getCorrectAnswer(questions, jawaban)

            // console.log(correct)

            navigation.navigate('EvaluationScreen', { total });
        }
    }

    const prevClicked = () => {
        if (progress > 100 / questions.length) {
            setProgress(progress - (100 / (questions.length)));
            // jawaban[progress / (100 / progress) - 1] = selectedButton;
            setSelectedButton(null);
        } else {
            // alert("Pergi ke halaman sebelumnya");
        }
    }

    const pilihanPressed = (buttonIndex) => {
        setSelectedButton((prevSelected) => {
            // Toggle the selected state for the pressed button
            const newJawaban = [...jawaban]
            newJawaban[progress / (100 / questions.length) - 1] = buttonIndex
            setJawaban(newJawaban)

            if (prevSelected === buttonIndex) {
                // If the same button is pressed again, unselect it
                return null;
            } else {
                // If a different button is pressed, select it
                return buttonIndex;
            }
        });
    };


    return (
        <>
            {questions && (
                <View className="flex-1 bg-cream">
                    <View className="flex-col justify-center items-center w-full bg-litecartesOrange px-2" style={{ borderBottomRightRadius: 50, borderBottomLeftRadius: 50, height: '55%' }}>
                        <View className="flex-row mt-12 ">
                            <NextAndPrevButton onPress={prevClicked} jenisFont='NunitoBold' text={<AntDesign name="left" size={24} color="white" />} bgColor='#662500' warnaFont='white' sizeX='20' />
                            <View className="mx-2" style={{ height: 40, borderWidth: 2, borderColor: '#FFD8D8', borderStyle: 'dashed', borderRadius: 30, width: '70%' }}>
                                <View className="bg-cream h-full" style={{ width: `${progress}%`, borderColor: '#662500', borderRadius: 30 }}>

                                </View>
                            </View>
                            <NextAndPrevButton onPress={nextClicked} jenisFont='NunitoBold' text={<AntDesign name="right" size={24} color="white" />} bgColor='#662500' warnaFont='white' />
                        </View>
                        <View className="border-1 bg-cream w-full h-1 my-5"><Text>test</Text></View>
                        <ScrollView className="h-100 flex-col gap-2 mx-4">
                            <Text className="text-white text-2xl my-3 text-center" style={{ fontFamily: 'NunitoBold' }}>{questions[progress / (100 / questions.length) - 1].title}</Text>
                            <Text className="text-white text-base text-justify" style={{ fontFamily: 'NunitoSemiBold' }}>{questions[progress / (100 / questions.length) - 1].literacy}</Text>
                        </ScrollView>
                    </View>
                    <ScrollView className="px-3 py-5 flex-col gap-5 ">
                        <View>
                            <Text className="text-buttonColor text-center text-base" style={{ fontFamily: 'NunitoSemiBold' }} >{questions[progress / (100 / questions.length) - 1].question}</Text>
                        </View>
                        {questions[progress / (100 / questions.length) - 1].option_list.map((option, index) => (
                            <View key={index}>
                                <PilihanJawaban
                                    onPress={() => pilihanPressed(index)}
                                    text={option}
                                    bgColor={selectedButton === index ? '#8B340D' : '#FFD4B8'}
                                    sizeY='20'
                                    sizeX='30'
                                    jenisFont='NunitoReg'
                                    warnaFont={selectedButton === index ? 'white' : 'black'}
                                />
                            </View>
                        ))}
                    </ScrollView>

                </View>

            )}
        </>
    );
}

export default DoTasks;

