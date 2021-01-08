import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import HomePage from '../components/HomePage'
import Diary from '../components/Diary'
import Explore from '../components/Explore'
import Profile from '../components/Profile'

const components = {
    HomePage: {
        component: HomePage
    },
    Diary: {
        component: Diary
    },
    Explore: {
        component: Explore
    },
    Profile: {
        component: Profile
    }
}

const HomeStack = createStackNavigator(components);

export default createAppContainer(HomeStack);