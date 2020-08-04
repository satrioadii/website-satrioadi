const {
	SHOW_MODAL,
	HIDE_MODAL,
	GET_LIST_REQUEST,
	GET_LIST_SUCCESS,
	GET_DETAIL_REQUEST,
	GET_DETAIL_SUCCESS,
} = require("../../provider/modal/index.type");

import { ProjectContents } from "../../contents/projects";

export const ShowDialogAction = (dispatch) => {
	dispatch({ type: SHOW_MODAL });
};

export const HideDialogAction = (dispatch) => {
	dispatch({ type: HIDE_MODAL });
};

export const GetListData = (dispatch, title, subtitle) => {
	dispatch({ type: GET_LIST_REQUEST });
	dispatch({
		type: GET_LIST_SUCCESS,
		payload: [
			{
				title: title,
				subtitle: subtitle,
			},
		],
	});
};

export const GetDetailData = (dispatch) => {
	dispatch({ type: GET_DETAIL_REQUEST });
	setTimeout(() => {
		dispatch({ type: GET_DETAIL_SUCCESS, payload: ProjectContents[0].detail });
	}, 1000);
};
