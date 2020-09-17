/* level one routes contains only the top layer screens
 * - Login
 * - Reset Password
 * - Sign up
 * 
 * level two routes
 * - Home
 * - Feed
 * - Upload
 * - Notification
 * - Profile
 */
import React from 'react';

import { createStackNavigator, createBottomTabNavigator, createAppContainer, createDrawerNavigator, DrawerItems } from 'react-navigation';
import { Text, View, TouchableNativeFeedback } from 'react-native';
import { styles } from '../styles/StyleSheet.js'
// import { Icon } from 'react-native-elements';

// STACK
import Login from '../screens/Login';
// import SignUp from '../screens/SignUp';
// import ResetPassword from '../screens/ResetPassword';

// TABS
import Home from '../screens/Home'
// import Feed from '../screens/Feed'
// import Upload from '../screens/Upload'
// import Notification from '../screens/Notification'
// import Profile from '../screens/Profile'

// SUB-STACK : Stack in a tab
import Settings from '../screens/Settings'

// DRAWER - 
// import Drawer from '../screens/Drawer'
import { StackActions, NavigationActions, DrawerActions } from 'react-navigation';


// Bottom Tab Bar
export const BottomTabBar = createBottomTabNavigator({
  Home: { screen: Home },
  Feed: { screen: Feed },
  Upload: { screen: Upload },
  Notification: { screen: Notification },
  Profile: { screen: Profile }
},
  {
    initialRouteName: 'Home',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  });

export const HomeStack = createStackNavigator({
  Home: { screen: BottomTabBar },
  Settings: { screen: Settings }
},
  {
    initialRouteName: 'Home',
    // hide header
    headerMode: "none"
  });

export const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      // to hide drawer item in drawer
      drawerLabel: () => null
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      drawerLabel: "Settings"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      drawerLabel: "Logout"
    }
  }
},
  {
    initialRouteName: "Home",
    // headerMode: "none",
    drawerPosition: 'left',
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#f4511e',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#f4511e',
    }
  });

DrawerNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];


  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  // const { navigate } = this.props.navigation;

  const resetAction = StackActions.reset({
    index: 0, // <-- currect active route from actions array
    actions: [
      NavigationActions.navigate({ routeName: 'Login' }),
    ],
  });

  switch (routeName) {
    case "Home":
      return {
        headerTitle,
        headerLeft: null, // on Login, disable back button for home
        // headerRight:(
        //   <Drawer navigationProps={navigation} />
        // ),
        headerRight: (
          <TouchableNativeFeedback onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
            <View style={styles.button_header_container_right}>
              <Text style={styles.button_text}>
                Settings
                  </Text>
            </View>
          </TouchableNativeFeedback>
        )
      };
    // case "Settings":
    //   return {
    //     headerTitle,
    //     headerLeft: null, // on Login, disable back button for home
    //     // headerRight:(
    //     //   <Drawer navigationProps={navigation} />
    //     // ),
    //     headerRight: (
    //       <TouchableNativeFeedback onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
    //         <View style={styles.button_header_container_right}>
    //           <Text style={styles.button_text}>
    //             Settings
    //           </Text>
    //         </View>
    //       </TouchableNativeFeedback>
    //     )
    //   };
    case "Login":
      //navigation.dispatch(StackActions.popToTop());
      // reset stack
      navigation.dispatch(resetAction);
      break;
    default:
      return {
        headerTitle
      };
  }
};


// Used to display the title to the header of the stack navigator
// https://reactnavigation.org/docs/en/navigation-options-resolution.html
BottomTabBar.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const headerTitle = routeName;

  // const { navigate } = this.props.navigation;

  switch (routeName) {
    case "Home":
      return {
        headerTitle,
        // headerRight:(
        //   <Drawer navigationProps={navigation} />
        // ),
        headerRight: (
          <TouchableNativeFeedback onPress={() => { navigation.dispatch(DrawerActions.toggleDrawer()) }}>
            <View style={styles.button_header_container_right}>
              <Text style={styles.button_text}>
                Settings
                  </Text>
            </View>
          </TouchableNativeFeedback>
        ),
      };
    default:
      return {
        headerTitle
      };
  }
};

// navigation tutorial
// https://github.com/spencercarli/getting-started-react-navigation/tree/master/app
// https://codeburst.io/react-native-navigation-patterns-9c2b6d15ddb3

// Stack
// createStackNavigator documentation, goto : https://reactnavigation.org/docs/en/stack-navigator.html
const RootStack = createStackNavigator({
  Login: {
    screen: Login,
  },
  ResetPassword: {
    screen: ResetPassword,
  },
  SignUp: {
    screen: SignUp,
  },
  Home: {
    screen: DrawerNavigator
  }
},
  {
    initialRouteName: 'Login',
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });

export default createAppContainer(RootStack);


