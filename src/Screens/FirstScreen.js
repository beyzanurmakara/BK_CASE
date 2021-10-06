import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const FirstScreen = props => {

	const [title, setTitle] = React.useState('');
	const navigation = useNavigation();

	const _onPressButton = () => {
		navigation.navigate("Second-Screen", { title });
		setTitle('');
	}

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<KeyboardAvoidingView style={{ flex: 1 }}>
				<TouchableWithoutFeedback style={{ flex: 1 }} onPress={Keyboard.dismiss}>
					<View style={styles.container}>
						<TextInput
							placeholder={"Başlık için yaz ..."}
							style={styles.textInput}
							value={title}
							onChangeText={(text) => { setTitle(text) }}
						/>
						<TouchableOpacity style={styles.button} onPress={_onPressButton}>
							<Text style={styles.text}>Başlık Getir</Text>
						</TouchableOpacity>
					</View>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white'
	},
	textInput: {
		width: 150,
		borderBottomColor: '#f4f4f4',
		borderBottomWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10
	},
	button: {
		width: 200,
		backgroundColor: 'black',
		padding: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		textTransform: 'uppercase'
	}
})

export default FirstScreen;
