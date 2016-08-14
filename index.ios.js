'use strict';
import React, {
  AppRegistry
} from 'react-native';

import App from './app/containers/app.js';

const AwesomeProject = () => {
  return (
    <App />
  );
}

AppRegistry.registerComponent('MobileNewsAggregator', () => AwesomeProject);
