import React, { Component } from 'react';
import { Text, View, Item, Input, Button, Form, Picker, Icon } from 'native-base';
import style from './style';

export default class AddProduct extends Component {
	state = {
		name: '',
		price: '',
		rating: '',
		merchantType: 'amozon',
		isDisabled: true
	};

	async handleAdd() {
		const { name, price, rating, merchantType } = await this.state;

		const product = {
			name,
			price,
			rating,
			merchantType
		};
		this.props.onAddProduct(product);
	}

	handleChange = (name, value) => {
		this.setState({ [name]: value }, () => {
			const { name, price, rating } = this.state;
			if (name !== '' && price !== '' && rating !== '') {
				this.setState({ isDisabled: false });
			}
		});
	};

	renderHeader() {
		return (
			<View style={style.header}>
				<Text>Please Add Product Details</Text>
				<Button transparent onPress={this.props.close}>
					<Icon name="close" style={{ color: '#ea484a' }} type="FontAwesome" />
				</Button>
			</View>
		);
	}

	renderForm() {
		return (
			<Form>
				<Item>
					<Input
						placeholder="Name"
						maxLength={10}
						value={this.state.name}
						onChangeText={(value) => this.handleChange('name', value)}
					/>
				</Item>
				<Item>
					<Input
						keyboardType="numeric"
						placeholder="Price"
						maxLength={9}
						value={this.state.price}
						onChangeText={(value) => this.handleChange('price', value)}
					/>
				</Item>
				<Item>
					<Input
						maxLength={1}
						keyboardType="number-pad"
						placeholder="Rating"
						value={this.state.rating}
						onChangeText={(value) => this.handleChange('rating', value)}
					/>
				</Item>
				<Item picker style={style.picker}>
					<View>
						<Picker
							mode="dropdown"
							iosIcon={<Icon name="arrow-down" />}
							style={style.pickerStyle}
							placeholder="Select MerchantType"
							placeholderIconColor="#007aff"
							selectedValue={this.state.merchantType}
							onValueChange={(value) => this.handleChange('merchantType', value)}
						>
							<Picker.Item label="Amazon" value="amazon" />
							<Picker.Item label="FlipKart" value="flipkart" />
							<Picker.Item label="ShopClues" value="shopclues" />
						</Picker>
					</View>
				</Item>

				<Button full danger disabled={this.state.isDisabled} onPress={this.handleAdd.bind(this)}>
					<Text>Add </Text>
				</Button>
			</Form>
		);
	}

	render() {
		return (
			<View style={style.productBox}>
				{this.renderHeader()}
				{this.renderForm()}
			</View>
		);
	}
}
