import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Main from './pages/main';
import Product from './pages/product';

const screens = {
    HomePage: {
        screen: Main,
        navigationOptions: {
            title: 'Curso React JS - Main',
        }
    },
    Produto: {
        screen: Product,
        navigationOptions: {
            title: 'Curso React JS - Produto',
        }
    }
}




const stack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerStyle: { backgroundColor: '#DA552F' }
    }
});

const Routes = createAppContainer(stack);

export default Routes;


