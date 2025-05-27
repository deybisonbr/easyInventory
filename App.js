import 'react-native-gesture-handler';
import 'react-native-get-random-values';
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StatusBar, Text, View } from "react-native";
import Routes from "./src/routes";
import AuthProvider from "./src/contexts/auth";
import { useEffect, useState } from 'react';
import getDBConnection from './src/database/db';

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function init() {
      try {
        const db = await getDBConnection();
        console.log("Banco conectado com sucesso");
      } catch (error) {
        console.error("Erro ao conectar ao banco:", error);
      } finally {
        setLoading(false);
      }
    }

    init();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Inicializando banco...</Text>
      </View>
    );
  }

  return (

    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#6A0DAD" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>

  )
}

