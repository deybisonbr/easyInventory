import React, { createContext, useEffect, useState } from "react";
import auth from '@react-native-firebase/auth';
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EncryptedStorage from 'react-native-encrypted-storage';
import NetInfo from '@react-native-community/netinfo';

export const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     async function loadStorage() {
    //         const remember = await AsyncStorage.getItem("@remember");

    //         const netState = await NetInfo.fetch();
    //         const isConnected = netState.isConnected;

    //         if (remember === "true") {
    //             if (isConnected) {
    //                 const unsubscribe = auth().onAuthStateChanged(user => {
    //                     if (user) {
    //                         setUser(user);
    //                     } else {
    //                         setUser(null);
    //                     }
    //                     setLoading(false);
    //                 });

    //                 return () => unsubscribe();

    //             } else {
    //                 try {
    //                     const creds = await EncryptedStorage.getItem('user_credentials');
    //                     if (creds) {
    //                         const { email, password } = JSON.parse(creds);
    //                         setUser({ email });
    //                     } else {
    //                         setUser(null);
    //                     }
    //                 } catch (error) {
    //                     console.log('Erro ao recuperar credenciais offline:', error);
    //                     setUser(null);
    //                 }
    //                 setLoading(false);
    //             }
    //         } else {
    //             setUser(null);
    //             setLoading(false);
    //         }
    //     }

    //     loadStorage();
    // }, []);

    // async function signIn(email, password, rememberMe = false) {
    //     setLoadingAuth(true);

    //     if (rememberMe) {
    //         await AsyncStorage.setItem("@remember", "true");
    //     } else {
    //         await AsyncStorage.removeItem("@remember");
    //     }

    //     try {
    //         const userCredential = await auth().signInWithEmailAndPassword(email, password);

    //         setUser(userCredential.user);

    //         console.log(userCredential.user.email);

    //     } catch (error) {
    //         if (error.code === 'auth/invalid-email') {
    //             Alert.alert('Erro', 'E-mail inválido!');
    //         } else if (error.code === 'auth/user-not-found') {
    //             Alert.alert('Erro', 'Usuário não encontrado!');
    //         } else if (error.code === 'auth/wrong-password') {
    //             Alert.alert('Erro', 'Senha incorreta!');
    //         } else {
    //             Alert.alert('Erro', error.message);
    //         }
    //     } finally {
    //         setLoadingAuth(false);
    //     }
    // }


    // function signOut() {
    //     auth().signOut()
    //         .then(() => {
    //             setUser(null);
    //         });
    // }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loadingAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;