import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

import MainMenuNavigation from '../../components/MainMenuNavigation/MainMenuNavigation';
import KeteranganUser from '../../components/KeteranganUser/KeteranganUser';
import CardTask from '../../components/CardTask/CardTask';
import Layout from '../../Layout';

import fox1 from '../../../assets/MainMenu/fox1.png';
import fox2 from '../../../assets/MainMenu/fox2.png';
import fox3 from '../../../assets/MainMenu/fox3.png';
import fox4 from '../../../assets/MainMenu/fox4.png';


function generateTask(navigation) {
    const tasks = [];

    const judul = [];
    judul[0] = "Litera Rookie";
    judul[1] = "Voyager";
    judul[2] = "Luminary";
    judul[3] = "Master Mind";

    const isi = [];
    isi[0] = "Mulailah perjalanan literasimu dengan membaca kata-kata sederhana dan memahami ide dari paragraf pendek.";
    isi[1] = "Gali lebih dalam skill baca dan pemahamanmu. Cari gagasan utama, susun jawaban lebih detail.";
    isi[2] = "Menyusuri literasi lebih dalam! Hadapi teks kompleks, analisis sudut pandang, dan latih kemampuanmu di tingkat ini.";
    isi[3] = "Jadi MasterMind literasi! Taklukkan teks sulit, tafsirkan makna simbolis, dan tunjukkan pemikiranmu secara kreatif.";


    const fox = [];
    fox[0] = fox1;
    fox[1] = fox2;
    fox[2] = fox3;
    fox[3] = fox4;



    for (let i = 0; i < 4; i++) {
        if (i % 2 == 0) {
            tasks.push(<CardTask navigation={navigation} warnaTextDesc='#8B340D' warnaTextButton='#FCC99F' warnaBgButton='#F37704' warnaBg='#FCC99F' isi={isi[i]} gambar={fox[i]} judul={judul[i]} key={i} />);
        } else {
            tasks.push(<CardTask navigation={navigation} warnaTextDesc='#FFFFFF' warnaTextButton='#8B340D' warnaBgButton='#FFD4B8' warnaBg='#F37704' isi={isi[i]} gambar={fox[i]} judul={judul[i]} key={i} />);
        }
    }
    return tasks;
}


const MainMenu = ({ navigation }) => {
    // const [currentUser, setCurrentUser] = useState({ username: '', gems: 0, total_exp: 0, level: 1 })

    // useEffect(() => {
    //     onAuthStateChanged(FIREBASE_AUTH, (user) => {
    //         if (user) {
    //             //user logged in
    //             const uid = user.uid

    //             fetch('http://54.255.34.229:8060/users/' + uid)
    //                 .then(response => {
    //                     if (!response.ok) {
    //                         throw new Error('Network response was not ok');
    //                     }
    //                     return response.json(); // This returns a Promise
    //                 })
    //                 .then(data => {
    //                     console.log(data.data);
    //                     console.log(data.data.username)
    //                     setCurrentUser(data.data);
    //                 })
    //                 .catch(error => {
    //                     console.error('Fetch error:', error);
    //                 });

    //         } else {
    //             navigation.navigate('Login');
    //             alert('Belum Login!');
    //         }
    //     })
    // }, [])

    return (
        <Layout>
            <View className="bg-cream" style={{ flex: 1 }}>

                <ScrollView>
                    {generateTask(navigation)}
                </ScrollView>
                <MainMenuNavigation menuSekarang={0} navigation={navigation} />
            </View>
        </Layout>
    );
}

export default MainMenu;
