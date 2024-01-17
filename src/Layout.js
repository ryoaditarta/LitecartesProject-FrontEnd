import react, {useState, useEffect} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfig';
import KeteranganUser from './components/KeteranganUser/KeteranganUser';


const Layout = ({ children }) => {
    const [user, setUser] = useState({ username: '', gems: 0, total_exp: 0, level: 1 })

    useEffect(() => {
        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            if (user) {
                //user logged in
                const uid = user.uid

                fetch('http://54.255.34.229:8060/users/' + uid)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json(); // This returns a Promise
                    })
                    .then(data => {
                        console.log(data.data);
                        console.log(data.data.username)
                        setUser(data.data);
                        console.log('ok');
                    })
                    .catch(error => {
                        console.error('Fetch error:', error);
                    });

            } else {
                navigation.navigate('Login');
                alert('Belum Login!');
            }
        })
    }, [])

    return (
        <>
            <KeteranganUser user={user} />
            {children}
        </>
    )
}

export default Layout