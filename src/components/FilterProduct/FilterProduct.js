import React, { Component } from 'react';
import { Button, Icon, Header, Left, Right, Body } from 'native-base';
import style from './style';

export default class FilterProduct extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selected: 'all',
			filterEnabled: false
		};
	}

	async handleClick(item) {
		if (item === 'all') {
			this.setState({ filterEnabled: false });
		}
		await this.setState({ selected: item });
		this.props.onFilter(this.state.selected);
	}

	renderFilters() {
		if (this.state.filterEnabled === false) {
			return (
				<Right>
					<Button transparent onPress={() => this.setState({ filterEnabled: true })}>
						<Icon name="filter" type="MaterialCommunityIcons" style={style.icon} />
					</Button>
				</Right>
			);
		}
		return (
			<Right>
				<Button transparent onPress={this.handleClick.bind(this, 'amazon')}>
					<Icon name="amazon" type="FontAwesome" style={style.icon} />
				</Button>
				<Button transparent onPress={this.handleClick.bind(this, 'shopclues')}>
					<Icon name="check" type="FontAwesome" style={style.icon} />
				</Button>
				<Button transparent onPress={this.handleClick.bind(this, 'flipkart')}>
					<Icon name="facebook" type="FontAwesome" style={style.icon} />
				</Button>
				<Button transparent onPress={this.handleClick.bind(this, 'all')}>
					<Icon name="filter-remove" type="MaterialCommunityIcons" style={style.icon} />
				</Button>
			</Right>
		);
	}

	render() {
		return (
			<Header style={style.content}>
				<Left />
				<Body />
				{this.renderFilters()}
			</Header>
		);
	}
}
