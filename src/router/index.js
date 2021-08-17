import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../view/login';
import Demo from '../view/demo';
import UserInfo from '../view/user';
import Home from '../view/home';
import {useSelector} from 'react-redux';
// import UserInfo from "./pages/account/userinfo";
// import Tabbar from "./tabbar";
// import TanHua from "./pages/friend/tanhua";
// import Search from "./pages/friend/search";
// import TestSoul from "./pages/friend/testSoul";
// import TestQA from "./pages/friend/testSoul/testQA";
// import TestResult from "./pages/friend/testSoul/testResult";
// import Detail from "./pages/friend/detail";
// import Chat from "./pages/message/chat";
// import Comment from "./pages/group/home/recommend/comment";
// import Publish from "./pages/group/home/recommend/publish";
// import Follow from "./pages/my/follow";
// import Trends from "./pages/my/trends";
// import Visitors from "./pages/my/visitors";
// import UserUpdate from "./pages/my/userUpdate";
// import Settings from "./pages/my/settings";

// import {inject, observer} from 'mobx-react';
const Stack = createStackNavigator();

// @inject('RootStore')
// @observer
const Nav = () => {
  const {token} = useSelector(store => store.user);
  const initName = token ? 'Home' : 'Login';
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="Home" initialRouteName={initName}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Demo" component={Demo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
// class Nav extends React.Component {
//   //   constructor(props) {
//   //     super(props);
//   //     this.state = {
//   //       initialRouteName: this.props.RootStore.token ? 'Tabbar' : 'Login',
//   //     };
//   //   }
//   render() {
//     // const {initialRouteName} = this.state;
//     return (
//       <NavigationContainer>
//         <Stack.Navigator headerMode="none" initialRouteName={Login}>
//           {/* <Stack.Screen name="Settings" component={Settings} />
//           <Stack.Screen name="UserUpdate" component={UserUpdate} />
//           <Stack.Screen name="Visitors" component={Visitors} />
//           <Stack.Screen name="Trends" component={Trends} />
//           <Stack.Screen name="Follow" component={Follow} />
//           <Stack.Screen name="Publish" component={Publish} />
//           <Stack.Screen name="Comment" component={Comment} />
//           <Stack.Screen name="Chat" component={Chat} />
//           <Stack.Screen name="Detail" component={Detail} />
//           <Stack.Screen name="TestResult" component={TestResult} />
//           <Stack.Screen name="TestQA" component={TestQA} />
//           <Stack.Screen name="TestSoul" component={TestSoul} />
//           <Stack.Screen name="Search" component={Search} />
//           <Stack.Screen name="TanHua" component={TanHua} />
//           <Stack.Screen name="Tabbar" component={Tabbar} />
//           <Stack.Screen name="UserInfo" component={UserInfo} /> */}
//           <Stack.Screen name="Demo" component={Demo} />
//           <Stack.Screen name="Login" component={Login} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

export default Nav;
