import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Home';
import Search from '../Search';

// const screens={
//     Home:{
//         screen:Home
//     },
//     Search:{
//         screen:Search
//     },

// }
// const HomeStack=createStackNavigator(screens);

// export default createAppContainer(HomeStack);

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
    
    </Stack.Navigator>
  );
}
