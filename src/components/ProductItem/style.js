import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
	listBox: {
		marginBottom: 30,
		width: '90%',
		height: 160,
		backgroundColor: '#ffff',
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 5,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.8,
		elevation: 5
	},
	headerIcon: {
		top: -15,
		width: 50,
		height: 50,
		borderRadius: 50 / 2,
		backgroundColor: '#ea484a',
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'flex-end'
	},
	content: { flexDirection: 'row', height: 100 },
	thumbnail: {
		flex: 0.8,
		backgroundColor: 'transparent',
		justifyContent: 'center',
		alignItems: 'center'
	},
	aside: {
		flex: 1,
		backgroundColor: 'transparent',
		justifyContent: 'space-evenly'
	},
	labelText: { color: '#606060' },
	labelBold: {
		color: '#606060',
		fontWeight: 'bold'
	},
	name: { fontSize: 22, color: '#606060', fontWeight: 'bold' },
	icon: { color: '#ffff' },
	row: { flexDirection: 'row' },
	image: { width: 80, height: 80, backgroundColor: 'transparent' },
	rating: { color: '#fbe632', fontSize: 20 }
});

export default style;
