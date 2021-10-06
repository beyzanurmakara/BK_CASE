import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './TabNavigation';

const MainNavigation = props => {
	return (
		<NavigationContainer>
			<TabNavigation />
		</NavigationContainer>
	);
};

export default MainNavigation;
