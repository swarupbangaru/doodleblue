import React, { Component } from 'react';
import { Text, View, Icon } from 'native-base';
import { TouchableOpacity, Image } from 'react-native';
import style from './style';
import amazon from '../../assets/images/amazon.png';
import flipKart from '../../assets/images/flipkart.png';
import shopClues from '../../assets/images/shopclues.png';

export default class ProductItem extends Component {
	handleClick() {
		this.props.onDeleteProduct(this.props.product);
	}

	renderRating(rating) {
		return [ ...Array(Number(rating)) ].map((x, i) => (
			<Icon key={i.toString()} name="star" style={style.rating} type="Entypo" />
		));
	}

	renderMerchant(merchantType) {
		if (merchantType === 'amazon') {
			src = amazon;
		} else if (merchantType === 'flipkart') {
			src = flipKart;
		} else src = shopClues;

		return <Image source={src} resizeMode="contain" style={style.image} />;
	}

	renderContent(product) {
		return (
			<View style={style.content}>
				<View style={style.thumbnail}>{this.renderMerchant(product.merchantType)}</View>
				<View style={style.aside}>
					<Text style={style.name}>{product.name}</Text>
					<View style={style.row}>
						<Text style={style.labelText}>Price:</Text>

						<Text style={style.labelBold}> ${product.price}</Text>
					</View>
					<View style={style.row}>
						<Text style={style.labelText}>Merchant:</Text>

						<Text style={style.labelBold}> {product.merchantType}</Text>
					</View>

					<View style={style.row}>{this.renderRating(product.rating)}</View>
				</View>
			</View>
		);
	}

	render() {
		const { product } = this.props;

		return (
			<View style={style.listBox}>
				<View style={style.headerIcon}>
					<TouchableOpacity onPress={this.handleClick.bind(this)}>
						<Icon name="delete" style={style.icon} type="MaterialCommunityIcons" />
					</TouchableOpacity>
				</View>
				{this.renderContent(product)}
			</View>
		);
	}
}
