import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

const style = StyleSheet.create({
	container: { backgroundColor: '#E0E0E0' },
	content: { paddingTop: 20, flex: 1 },
	list: { justifyContent: 'center', alignItems: 'center', marginTop: 30 },
	footer: {
		backgroundColor: '#E0E0E0',
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		paddingLeft: 10,
		paddingRight: 10
	},
	floater: {
		top: -15,
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		backgroundColor: '#5066fc',
		justifyContent: 'center',
		alignItems: 'center'
	},
	icon: { color: '#ffff' },
	noListBox: { alignSelf: 'center', marginTop: height / 3, justifyContent: 'center', alignItems: 'center' },
	listText: { fontWeight: 'bold', color: '#ea484a' },
	noIcon: { color: '#ea484a', fontSize: 50 }
});

export default style;
