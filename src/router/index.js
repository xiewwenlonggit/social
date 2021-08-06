import React, { lazy, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import { useToast, Flex } from "native-base";
import { ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../view/login';
import Demo from '../view/demo';
import UserInfo from '../view/user'
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
  const Toast = useToast();
  const storeInfos = useSelector(state => state.loading);
  const toastId = useRef();
  useEffect(() => {
    if (storeInfos) {
      toastId.current = Toast.show({
        render: () => {
          return (
            <Flex flex={1} justify="center" align='center' style={{ backgroundColor: "#000" }} w={20} h={20} >
              <ActivityIndicator size="large" color="white" />
            </Flex>
          )
        },
        placement: 'top',
        duration: 30000
      },


      );
    } else {
      Toast.close(toastId.current);
    }
  }, [storeInfos])
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName={UserInfo}>
        <Stack.Screen name="UserInfo" component={UserInfo} />
        <Stack.Screen name="Login" component={Login} />
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
