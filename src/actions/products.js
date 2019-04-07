
export const loadProduct = product => (dispatch) => {
	dispatch({
		type: 'LOAD_PRODUCT',
		payload: product
	});
};

export const deleteProduct = product => (dispatch) => {
	dispatch({
		type: 'DELETE_PRODUCT',
		payload: product
	});
};
