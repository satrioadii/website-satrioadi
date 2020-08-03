const {
	SHOW_MODAL,
	HIDE_MODAL,
	GET_LIST_REQUEST,
	GET_LIST_SUCCESS,
	GET_LIST_FAIL,
	GET_DETAIL_REQUEST,
	GET_DETAIL_SUCCESS,
	GET_DETAIL_FAIL,
} = require("./index.type");

const ModalReducer = (state, action) => {
	switch (action.type) {
		case SHOW_MODAL:
			return { ...state, modalShow: true };
		case HIDE_MODAL:
			return { ...state, modalShow: false };
		case GET_LIST_REQUEST:
			return { ...state, isLoading: true };
		case GET_LIST_SUCCESS:
			console.log("SUCCESS:");
			console.log(action);
			return { ...state, isLoading: false, dataList: action.payload };
		case GET_LIST_FAIL:
			return { ...state, isLoading: false, error: action.payload };
		case GET_DETAIL_REQUEST:
			return { ...state, isLoading: true };
		case GET_DETAIL_SUCCESS:
			return { ...state, isLoading: false, dataDetail: action.payload };
		case GET_DETAIL_FAIL:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};

export default ModalReducer;
