import React, { Component } from 'react';
import { Spinner, View } from 'native-base';
import style from './style';

export default class Loader extends Component {
	render() {
		return (
			<View style={style.loaderView}>
				<Spinner color="#ea484a" />
			</View>
		);
	}
}
