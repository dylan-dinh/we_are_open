import * as ReactNavigation from "react-navigation";

import CredentialsScreen from "../Credentials/Credentials";

import LoginScreen from "../Screens/Login";
import WelcomeScreen from "../Screens/Welcome";
import RegisterScreen from "../Screens/Register";
import HomeScreen from "../Screens/Home";
import GoogleBusinessApiScreen from "../Screens/GoogleBusinessApi";
import GetInfoUserScreen from "../Screens/GetInfoUser";

const AppNavigator = ReactNavigation.createStackNavigator(
  {
    Credentials: {
      screen: CredentialsScreen,
      navigationOptions: () => ({
        title: "Credentials",
        headerBackTitle: null
      })
    },

    Home: {
      screen: HomeScreen
    },

    GetInfoUser: {
      screen: GetInfoUserScreen,
      navigationOptions: () => ({
        title: "Google Business API",
        headerBackTitle: null
      })
    },

    GoogleBusinessApi: {
      screen: GoogleBusinessApiScreen,
      navigationOptions: () => ({
        title: "Google Business API",
        headerBackTitle: null
      })
    },

    Login: {
      screen: LoginScreen,
      navigationOptions: () => ({
        title: "Login",
        headerBackTitle: null,
        headerLeft: null
      })
    },

    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: () => ({
        //title: "Welcome",
        headerBackTitle: null,
        headerLeft: null
      })
    },

    Register: {
      screen: RegisterScreen,
      navigationOptions: () => ({
        title: "Register",
        headerBackTitle: null
      })
    }
  },
  {
    initialRouteName: "Credentials",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#2f2d30"
      },
      headerTintColor: "pink",
      headerTitleStyle: "pink"
    }
  }
);

const AppContainer = ReactNavigation.createAppContainer(AppNavigator);

export default AppContainer;

/*  const TabNavigator = createBottomTabNavigator({
        Home: HomeScreen,
        Welcome: WelcomeScreen,
      });
      
      export default createAppContainer(TabNavigator); */

/* const StackNavigatorOptions = {
        navigationOptions: {
          header: null
        }
      };
      
      const CredentialsStack = ReactNavigation.StackNavigator({Credentials: CredentialsScreen},
        {
          headerMode: 'none',
          navigationOptions: {
            headerVisible: true
          }
        })

      const LoginStack = StackNavigator({
        Login: {
          screen: LoginScreen
        }
      },
      StackNavigatorOptions
      )

      const HomeStack = StackNavigator({
        Home: {
          screen: HomeScreen
        }
      },
      StackNavigatorOptions
      )

      const RegisterStack = StackNavigator({
        Register: {
          screen: RegisterScreen
        }
      },
      StackNavigatorOptions
      )

      const WelcomeStack = StackNavigator({
        Welcome: {
          screen: WelcomeScreen
        }
      },
      StackNavigatorOptions
      )

    export default ReactNavigation.SwitchNavigator(
        {
          Credentials: CredentialsStack
          
        },
        {
          initialRouteName: 'Credentials'
        }
      );
      */

/*Home: {
      screen: HomeScreen
    },
    Login: {
        screen: LoginScreen
    },
    Welcome: {
        screen: WelcomeScreen
    },
    Register: {
        screen: RegisterScreen
    },*/
//export default createAppContainer(AppNavigator);

/*
const StackNavigatorOptions = {
    navigationOptions: {
      header: null
    }
  };
  
  const ModalNavigationOptions = {
    tabBarVisible: false,
    swipeEnabled: false
  }

  const LoginStack = StackNavigator({
        Login: {
            screen: LoginScreen
        },
    },
    StackNavigatorOptions
);

const WelcomeStack = StackNavigator({
    Welcome: {
        screen: WelcomeScreen
    },
},
StackNavigatorOptions
);

const RegisterStack = StackNavigator({
    Register: {
        screen: RegisterScreen
    },
},
StackNavigatorOptions
);

const HomeStack = StackNavigator({
    Home: {
        screen: HomeScreen
    },
},
StackNavigatorOptions
);


const AppStack = TabNavigator({
    Login: {
      screen: LoginStack,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarIcon: ({ tintColor }) => <Icon name="login" color={tintColor} />
      },
    },
    Welcome: {
      screen: WelcomeStack,
      navigationOptions: {
        tabBarLabel: 'Welcome',
        tabBarIcon: ({ tintColor }) => <Icon name="welcome" color={tintColor} />
      },
    },
    Register: {
      screen: RegisterStack,
      navigationOptions: {
        tabBarLabel: 'Register',
        tabBarIcon: ({tintColor}) => <Icon name="register" color={tintColor}/>
      },
    },
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => <Icon name="build" color={tintColor}/>
      }
    }
  }, 
  );


  const AuthStack = StackNavigator({Login: LoginScreen}, 
    {
        headerMode: 'none',
        navigationOptions: {
        headerVisible: true
        }
    });



  export default SwitchNavigator(
    {
      PreLogin: PreLogin,
      Auth: AuthStack
    },
    {
      initialRouteName: 'PreLogin'
    }
  );
  */
