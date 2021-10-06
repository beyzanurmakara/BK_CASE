import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import FirstScreen from '../Screens/FirstScreen';

const SecondScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
			<Text>Second Screen</Text>
		</View>
	);
}
const ThirdScreen = ({ navigation }) => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
			<Text>Third Screen</Text>
		</View>
	);
}

const FirstScreenStack = createStackNavigator();
const FirstScreenStackScreen = ({ navigation }) => (
	<FirstScreenStack.Navigator>
		<FirstScreenStack.Screen name="First-Screen" component={FirstScreen} />
	</FirstScreenStack.Navigator>
)

const SecondScreenStack = createStackNavigator();
const SecondScreenStackScreen = ({ navigation }) => (
	<SecondScreenStack.Navigator>
		<SecondScreenStack.Screen
			name="Second-Screen"
			component={SecondScreen}
			options={({ route }) => ({
				headerShown: true,
				title: route.params ? route.params.title : 'Second-Screen',
			})}
		/>
	</SecondScreenStack.Navigator>
)

const ThirdScreenStack = createStackNavigator();
const ThirdScreenStackScreen = ({ navigation }) => (
	<ThirdScreenStack.Navigator>
		<ThirdScreenStack.Screen name="Third-Screen" component={ThirdScreen} />
	</ThirdScreenStack.Navigator>
)
const Tabs = createBottomTabNavigator();

const TabNavigation = props => {
	return (
		<Tabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: 'white',
				tabBarActiveBackgroundColor: '#f4f4f4',
				tabBarLabelStyle: {
					fontSize: 16,
					fontWeight: '600',
					color: 'black'
				},
				tabBarStyle: {
					justifyContent: 'center',
				},
				activeTintColor: 'white',
				inactiveTintColor: 'rgba(255,255,255,0.5)'
			}}
		>
			<Tabs.Screen
				name="first-stack"
				component={FirstScreenStackScreen}
				options={{
					title: "First",
					tabBarIcon: ({ tintColor }) => (
						<Icon name="ios-person" color={tintColor} size={25} />
					)
				}}
			/>
			<Tabs.Screen
				name="second-stack"
				component={SecondScreenStackScreen}
				options={{
					title: "Second",
					tabBarIcon: () => (
						<Icon name="ios-home" color={'grey'} size={25} />
					)
					// showIcon: true
				}}
			/>
			<Tabs.Screen
				name="third-stack"
				component={ThirdScreenStackScreen}
				options={{
					title: "Third"
				}}
			/>
		</Tabs.Navigator>
	);
};

export default TabNavigation;
