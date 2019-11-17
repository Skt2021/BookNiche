import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Background from '../Components/Background';
import Logo from '../Components/Logo';

const Loading = () => {
	return(
    <Background>
      <Logo/>
    </Background>
		
	);
};

export { Loading };