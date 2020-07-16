import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages';

const Rnbank = () => {
  return (
    <>
      <StatusBar backgroundColor="#103040" />
      <Home />
    </>
  );
}

export default Rnbank;