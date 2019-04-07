import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { DashBoard } from './src/routes';
console.disableYellowBox = true;

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<DashBoard />
				</PersistGate>
			</Provider>
		);
	}
}
