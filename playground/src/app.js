const { Navigation } = require('react-native-navigation');
const { registerScreens } = require('./screens');
const { Platform } = require('react-native');

if (Platform.OS === 'android') {
  alert = (title) => {
    Navigation.showOverlay({
      component: {
        name: 'navigation.playground.alert',
        passProps: {
          title
        },
        options: {
          overlay: {
            interceptTouchOutside: true
          }
        }
      }
    });
  };
}

function start() {
  registerScreens();
  Navigation.events().onAppLaunched(() => {
    Navigation.setDefaultOptions({
      animations: {
        push: {
          topBar: {
            y: {
              from: 1000,
              to: 0,
              duration: 500,
              interpolation: 'decelerate',
            },
            alpha: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'decelerate'
            }
          },
          content: {
            y: {
              from: 1000,
              to: 0,
              duration: 500,
              interpolation: 'decelerate',
            },
            alpha: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'decelerate'
            }
          }
        },
        // pop: {
        //   topBar: {
        //     y: {
        //       from: 0,
        //       to: 100,
        //       duration: 2000,
        //       interpolation: 'accelerate',
        //     },
        //     // alpha: {
        //     //   from: 1,
        //     //   to: 0,
        //     //   duration: 2000,
        //     //   interpolation: 'accelerate'
        //     // }
        //   },
        //   content: {
        //     y: {
        //       from: 0,
        //       to: 1000,
        //       duration: 2000,
        //       interpolation: 'accelerate',
        //     },
        //     alpha: {
        //       from: 1,
        //       to: 0,
        //       duration: 2000,
        //       interpolation: 'accelerate'
        //     }
        //   }
        // }
      }
    });

    Navigation.setRoot({
      stack: {
        children: [
          {
            component: {
              name: 'navigation.playground.WelcomeScreen'
            }
          }
        ]
      }
    });
  });
}

module.exports = {
  start
};
