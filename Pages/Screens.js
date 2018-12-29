import {Navigation} from 'react-native-navigation';
import App from '../App';
import HomePage from './HomePage'


export function registerScreens() {
	Navigation.registerComponent('Login', () => App);
	Navigation.registerComponent('HomePage', () => HomePage);
}