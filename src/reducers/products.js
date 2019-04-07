import _ from 'lodash';

const initialState = [];

export default function(state = initialState, action) {
	switch (action.type) {
		case 'LOAD_PRODUCT':
			const timestamp = new Date().toISOString().replace(/[^\d]/g, '');
			const data = {
				id: action.payload.merchantType.concat(timestamp),
				...action.payload
			};

			if (!state.length) {
				return [ ...state, data ];
			} else {
				const obj = _.find(state, function(o) {
					return data.name === o.name;
				});

				if (obj) {
					return state;
				} else {
					return [ ...state, data ];
				}
			}

		case 'DELETE_PRODUCT':
			const newState = state.filter((val) => val.id !== action.payload.id);

			return newState;

		default:
			return state;
	}
}
