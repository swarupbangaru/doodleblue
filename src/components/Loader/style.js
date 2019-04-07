import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const style = StyleSheet.create({
	loaderView: {
		marginTop: height / 2
	}
});

export default style;
