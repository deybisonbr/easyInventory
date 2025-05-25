import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Products from "../pages/Products";

const AppDrawer = createDrawerNavigator();

function AppRoutes() {
    return (
        <AppDrawer.Navigator
            screenOptions={{
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#6A0DAD',
                },
                drawerStyle: {
                    backgroundColor: '#F2F2F2', // Cor de fundo do drawer
                    width: 200,
                },
                drawerLabelStyle: {
                    fontSize: 16,
                    fontWeight: 'bold',
                },
                drawerActiveTintColor: '#ffffff',     // Cor do texto do item ATIVO
                drawerInactiveTintColor: '#000000',   // Cor do texto dos itens INATIVOS
                drawerActiveBackgroundColor: '#6A0DAD', // Fundo do item ativo (opcional)
            }}
        >
            <AppDrawer.Screen
                name="Página Inicial"
                component={Home}
            />
            <AppDrawer.Screen
                name="Produtos"
                component={Products}
            />

        </AppDrawer.Navigator>
    );
}

export default AppRoutes;