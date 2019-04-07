import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	productBox: {
		marginTop: 50,
		padding: 5,
		backgroundColor: '#ffff',
		elevation: 3,
		borderRadius: 5
	},
	header: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
	picker: { borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginBottom: 5, marginLeft: 5 },
	pickerStyle: { width: 300 }
});

export default style;
