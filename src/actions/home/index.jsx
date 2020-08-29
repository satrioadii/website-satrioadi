import axios from "axios";
import {
	FETCH_LANDING_DATA_DETAIL_ERROR,
	FETCH_LANDING_DATA_DETAIL_REQUEST,
	FETCH_LANDING_DATA_DETAIL_SUCCESS,
	FETCH_LANDING_DATA_ERROR,
	FETCH_LANDING_DATA_REQUEST,
	FETCH_LANDING_DATA_SUCCESS,
} from "../../providers/landingpage/index.type";
import { OPEN_SNACKBAR } from "../../providers/snackbar/index.type";

const BASE_URL_PROJECT = `${process.env.NEXT_PUBLIC_HOST_API}/${process.env.NEXT_PUBLIC_VERSION_1_API}/project`;
export const FetchAllProject = async (dispatch) => {
	dispatch.landingPage({ type: FETCH_LANDING_DATA_REQUEST });

	console.log("FETCH");

	try {
		const response = await axios({
			method: "get",
			url: `${BASE_URL_PROJECT}?sort=-createdAt`,
			headers: {
				"Content-Type": "application/json",
			},
		});
		dispatch.landingPage({
			type: FETCH_LANDING_DATA_SUCCESS,
			payload: { data: response.data.data },
			pagination: response.data.pagination,
			count: response.data.count,
		});
	} catch (error) {
		console.log(error.response);
		dispatch.landingPage({ type: FETCH_LANDING_DATA_ERROR });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Fetch All Project Error, Please Refresh The Browser",
			snacktype: "error",
		});
	}
};

export const FetchDetailProject = async (dispatch, id) => {
	dispatch.landingPage({ type: FETCH_LANDING_DATA_DETAIL_REQUEST });

	try {
		const response = await axios({
			method: "get",
			url: `${BASE_URL_PROJECT}/${id}`,
			headers: {
				"Content-Type": "application/json",
			},
		});
		dispatch.landingPage({
			type: FETCH_LANDING_DATA_DETAIL_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		console.log(error.response);
		dispatch.landingPage({ type: FETCH_LANDING_DATA_DETAIL_ERROR });
		dispatch.snackbar({
			type: OPEN_SNACKBAR,
			message: "Fetch Project Detail Error, Please Refresh The Browser",
			snacktype: "error",
		});
	}
};
