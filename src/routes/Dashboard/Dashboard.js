import React, { Component } from 'react';
import { Text, Icon, View, Content, Container, Footer } from 'native-base';
import { connect } from 'react-redux';
import _ from 'lodash';
import { TouchableOpacity } from 'react-native';
import { loadProduct, deleteProduct } from '../../actions/products';
import { ProductItem, AddProduct, FilterProduct, Loader } from '../../components';
import style from './style';

import Modal from 'react-native-modal';

// route to display list of items and add item and delete items
class Dashboard extends Component {
	constructor() {
		super();
		this.state = {
			active: 'true',
			addEnable: false,
			selectedMerchant: 'all',
			filteredProducts: [],
			clicked: '',
			loaded: false
		};
	}

	async componentDidMount() {
		if (this.props.products.length) {
			await this.setState({ filteredProducts: this.props.products });
		}
		this.setTimer();
	}

	async setTimer() {
		await setTimeout(() => {
			this.setState({ loaded: true });
		}, 1000);
	}

	handleAdd() {
		const { addEnable } = this.state;
		this.setState({ addEnable: !addEnable });
	}

	async handleAddProduct(product) {
		await this.props.loadProduct(product);
		const { addEnable } = this.state;
		this.setState({ addEnable: !addEnable, filteredProducts: this.props.products });
	}

	async handleFilter(selectedMerchant) {
		await this.setState({ selectedMerchant });

		if (this.state.selectedMerchant !== 'all') {
			const filteredData = await _.filter(this.props.products, (product) => {
				return product.merchantType === this.state.selectedMerchant;
			});

			this.setState({ filteredProducts: filteredData });
		} else {
			this.setState({ filteredProducts: this.props.products });
		}
	}

	async handleDeleteProduct(product) {
		await this.props.deleteProduct(product);

		this.setState({ filteredProducts: this.props.products });
	}

	renderList() {
		if (this.state.filteredProducts.length) {
			return _.map(this.state.filteredProducts, (product) => {
				return (
					<ProductItem product={product} onDeleteProduct={(product) => this.handleDeleteProduct(product)} />
				);
			});
		}
		return (
			<View style={style.noListBox}>
				<Icon name="remove-shopping-cart" style={style.noIcon} type="MaterialIcons" />

				<Text style={style.listText}>No {this.state.selectedMerchant} Products</Text>
			</View>
		);
	}

	render() {
		if (this.state.loaded) {
			return (
				<Container style={style.container}>
					<FilterProduct onFilter={(merchantType) => this.handleFilter(merchantType)} />

					<Content style={style.content}>
						<Modal isVisible={this.state.addEnable}>
							<AddProduct
								onAddProduct={(product) => this.handleAddProduct(product)}
								close={this.handleAdd.bind(this)}
							/>
						</Modal>

						<View style={style.list}>{this.renderList()}</View>
					</Content>
					<Footer transparent style={style.footer}>
						<View style={style.floater}>
							<TouchableOpacity onPress={this.handleAdd.bind(this)}>
								<Icon name="plus" style={style.icon} type="FontAwesome" />
							</TouchableOpacity>
						</View>
					</Footer>
				</Container>
			);
		}
		return <Loader />;
	}
}

const mapStateToProps = (state) => ({
	products: state.products
});

const mapDispatchToProps = (dispatch) => ({
	loadProduct: (product) => dispatch(loadProduct(product)),
	deleteProduct: (product) => dispatch(deleteProduct(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
